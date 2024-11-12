import struct from "@aksel/structjs";

import getDictionaryEntries from "./dictionary";

let buffer;

const RE_TRUE = /^true$/;
const RE_FALSE = /^false$/;
const RE_NAN = /^NaN$/;
const NAN_VALUE = parseFloat("nan");
const RE_INT = /^[-+]?\d+$/;
const RE_DECIMAL = /^[+-]?\d*\.?\d+(?:[Ee][+-]?\d+)?$/;
const RE_INT_VEC = /^(?:[-+]?\d+\s+)+(?:[-+]?\d+)*$/;
const RE_DECIMAL_VEC = /^(?:[+-]?(?:\d+\.\d*|\d*\.\d+|\d+)(?:[Ee][+-]?\d+)?\s+)+([+-]?(?:\d+\.\d*|\d*\.\d+|\d+)(?:[Ee][+-]?\d+)?)$/;

function ihash(value, retParam = 0) {
  let ret = retParam;

  for (let i = 0; i < value.length; i += 1) {
    ret =
      ((value[i].toLowerCase().codePointAt(0) + ((65599 * ret) & 0xffffffff) >>> 0) & 0xffffffff) >>> 0; // eslint-disable-line
  }

  return ret;
}

function aIhash(sections, names) {
  const COMMENTS = ["", "'"];
  const result = [];
  let resultIndex = result.length;

  for (let i = 0; i < sections.length; i += 1) {
    const sectionhash = ihash("*", ihash(sections[i]));

    for (let j = 0; j < names.length; j += 1) {
      for (let k = 0; k < COMMENTS.length; k += 1) {
        const nameEntry = `${COMMENTS[k]}${names[j]}`;
        const ret = ihash(nameEntry, sectionhash);

        const entry = {
          section: sections[i],
          nameEntry,
          ret
        };

        result[resultIndex] = entry;
        resultIndex += 1;
      }
    }
  }

  return result;
}

function readBytes(amount) {
  const bufferCurrent = buffer;
  const bufferPart = bufferCurrent.slice(0, amount);

  buffer = bufferCurrent.slice(amount);

  return bufferPart;
}

function sanitizeStr(data) {
  let result;

  if (data.match(RE_TRUE)) {
    result = 1;
  } else if (data.match(RE_FALSE)) {
    result = 0;
  } else if (data.match(RE_NAN)) {
    result = NAN_VALUE;
  } else if (data.match(RE_INT_VEC)) {
    const result1 = [];

    data
      .replace("\t", " ")
      .split(" ")
      .forEach(dataPart => {
        if (dataPart) result1.push(parseFloat(dataPart));
      });

    result = result1;
  } else if (data.match(RE_DECIMAL_VEC)) {
    const result1 = [];

    data
      .replace("\t", " ")
      .split(" ")
      .forEach(dataPart => {
        if (dataPart) result1.push(parseFloat(dataPart));
      });

    result = result1;
  } else if (data.match(RE_INT)) {
    result = parseFloat(data);
  } else if (data.match(RE_DECIMAL)) {
    result = parseFloat(data);
  } else {
    result = data;
  }

  return result;
}

function readOld() {
  const target = [];
  readBytes(3);
  const entryCount = struct("<I").unpack(readBytes(4))[0];
  const dataCount = struct("<I").unpack(readBytes(4))[0];
  const offsets = [];
  const offsetIndices = [];

  for (let i = 0; i < entryCount; i += 1) {
    const h = struct("<I").unpack(readBytes(4))[0];
    const o = struct("<I").unpack(readBytes(4))[0];

    offsets[h] = o;
    offsetIndices.push(h);
  }

  const data = new Uint8Array(readBytes(dataCount));
  const result = [];

  for (let i = 0; i < offsetIndices.length; i += 1) {
    const offsetIndex = offsetIndices[i];
    let o = parseInt(offsets[offsetIndex], 10);
    let t = "";

    while (data[o] !== 0) {
      t += String.fromCharCode(data[o]);
      o += 1;
    }

    result.push({
      hash: offsetIndex,
      value: sanitizeStr(t)
    });
  }

  for (let i = 0; i < result.length; i += 1) {
    target.push(result[i]);
  }

  return target;
}

function readNew() {
  function readBools() {
    const result = [];
    const num = struct("<H").unpack(readBytes(2))[0];
    const keys = [];

    for (let i = 0; i < num; i += 1) {
      keys[i] = struct("<I").unpack(readBytes(4))[0]; // eslint-disable-line
    }

    const bytesCount = Math.trunc(num / 8) + (num % 8 > 0 ? 1 : 0);
    const bools = new Uint8Array(readBytes(bytesCount));

    if (bytesCount !== bools.length) {
      console.log("bytesCount !== bools.length");
    }

    for (let j = 0; j < num; j += 1) {
      result[j] = {
        hash: keys[j],
        value: + Boolean((bools[Math.trunc(j / 8)] >> (j % 8)) & 1) // eslint-disable-line
      };
    }

    return result;
  }
  function readNumbers(fmt, count, mul) {
    const result = [];
    const num = struct("<H").unpack(readBytes(2))[0];
    const keys = [];

    for (let i = 0; i < num; i += 1) {
      keys[i] = struct("<I").unpack(readBytes(4))[0]; // eslint-disable-line
    }

    for (let j = 0; j < num; j += 1) {
      const tmp = [];

      for (let k = 0; k < count; k += 1) {
        const value = struct(fmt).unpack(readBytes(struct(fmt).size))[0] * mul;

        if (count !== 1 || mul !== 1) {
          tmp[k] = value.toFixed(1);
        } else {
          tmp[k] = value;
        }
      }

      result[j] = { hash: keys[j], value: count === 1 ? tmp[0] : tmp };
    }

    return result;
  }
  function readStrings(stringsLength) {
    const result = [];
    const offsets = readNumbers("<H", 1, 1);
    const data = new Uint8Array(readBytes(stringsLength));

    if (data.length !== stringsLength) {
      console.log("data.length !== stringsLength");
    }

    for (let i = 0; i < offsets.length; i += 1) {
      const offset = offsets[i];
      let o = parseInt(offset.value, 10);
      let t = "";

      while (data[o] !== 0) {
        t += String.fromCharCode(data[o]);
        o += 1;
      }

      result[i] = {
        hash: offset.hash,
        value: sanitizeStr(t)
      };
    }

    return result;
  }

  const target = [];
  const stringsLength = struct("<H").unpack(readBytes(2))[0];
  let flags = struct("<H").unpack(readBytes(2))[0];

  if (flags === 0) {
    flags = struct("<H").unpack(readBytes(2))[0]; // eslint-disable-line
  }

  const readConf = [
    ["<i", 1, 1],
    ["<f", 1, 1],
    ["<B", 1, 0.1],
    ["<h", 1, 1],
    ["<B", 1, 1],
    [],
    ["<B", 3, 0.1],
    ["<f", 3, 1],
    ["<B", 2, 0.1],
    ["<f", 2, 1],
    ["<B", 4, 0.1],
    ["<f", 4, 1],
    [stringsLength, 0],
    ["<i", 1, 1]
  ];

  if (flags & (1 << 13)) { // eslint-disable-line
    console.log("Found long long!");
  }

  if (Boolean(flags & (1 << 14))) { // eslint-disable-line
    console.log("Error! 14 doesnt exist");
  }

  if (Boolean(flags & (1 << 15))) { // eslint-disable-line
    console.log("Error! 15 doesnt exist");
  }

  for (let i = 0; i < 16; i += 1) {
    if (flags & (1 << i)) { // eslint-disable-line
      if (i < readConf.length) {
        const conf = readConf[i];

        if (conf.length === 0) {
          const result = readBools();

          for (let property in result) { // eslint-disable-line
            target.push(result[property]);
          }
        } else if (conf.length === 2) {
          const result = readStrings(conf[0], conf[1]);

          for (let property in result) { // eslint-disable-line
            target.push(result[property]);
          }
        } else {
          const result = readNumbers(conf[0], conf[1], conf[2]);

          for (let property in result) { // eslint-disable-line
            target.push(result[property]);
          }
        }
      } else {
        console.log("Unknown inibin flag: ", i);
      }
    }
  }

  return target;
}

function read(newResult = undefined) {
  let result = newResult;

  if (result === undefined) {
    result = {
      values: [],
      unknownHashes: []
    };
  } else {
    if (result.values === undefined) {
      result.values = [];
    }

    if (result.unknownHashes === undefined) {
      result.unknownHashes = [];
    }
  }

  const bufferPart = readBytes(1);
  const version = struct("<B").unpack(bufferPart)[0];

  if (version === 2) {
    result.unknownHashes = readNew();
  } else if (version === 1) {
    result.unknownHashes = readOld();
  } else {
    console.log("Unknown version!");
  }

  return result;
}

function getValues(tbinParam, sections, names) {
  const tbin = {
    values: tbinParam.values,
    unknownHashes: tbinParam.unknownHashes
  };

  const result = [];
  let resultIndex = result.length;
  const h = aIhash(sections, names);

  for (let i = 0; i < h.length; i += 1) {
    const ret = h[i].ret; // eslint-disable-line

    const unknIndex = tbin.unknownHashes.findIndex(
      element => element.hash === ret
    );

    if (unknIndex !== -1) {
      result[resultIndex] = tbin.unknownHashes[unknIndex].value;
      resultIndex += 1;
    }
  }

  return result;
}

function getFixdict(troybin) {
  const tbin = troybin;

  if (tbin.values === undefined) {
    tbin.values = [];
  }

  if (tbin.unknownHashes === undefined) {
    tbin.unknownHashes = [];
  }

  const groups = getValues(
    tbin,
    ["System"],
    getDictionaryEntries("partGroupNames")
  );
  const fields = getValues(
    tbin,
    groups,
    getDictionaryEntries("partFieldNames")
  );
  const fluids = getValues(
    tbin,
    groups,
    getDictionaryEntries("partFluidNames")
  );

  const result = [];
  let resultIndex = result.length;

  const dictonary = [
    { sections: groups, names: getDictionaryEntries("groupNames") },
    { sections: fields, names: getDictionaryEntries("fieldNames") },
    { sections: fluids, names: getDictionaryEntries("fluidNames") },
    { sections: ["System"], names: getDictionaryEntries("systemNames") }
  ];

  for (let i = 0; i < dictonary.length; i += 1) {
    const dicEntry = aIhash(dictonary[i].sections, dictonary[i].names);

    for (let j = 0; j < dicEntry.length; j += 1) {
      result[resultIndex] = {
        section: dicEntry[j].section,
        nameEntry: dicEntry[j].nameEntry,
        ret: dicEntry[j].ret
      };
      resultIndex += 1;
    }
  }

  return result;
}

function fix(tbin) {
  const fixd = getFixdict(tbin);

  const result = {
    unknownHashes: [],
    values: []
  };

  const unks = tbin.unknownHashes;
  const valuesFound = [];
  let groupIndex = 0;

  for (let i = 0; i < fixd.length; i += 1) {
    const fixDicEntry = fixd[i];
    const unknIndex = unks.findIndex(
      element => element.hash === fixDicEntry.ret
    );

    if (unknIndex !== -1 && !valuesFound.includes(fixDicEntry.ret)) {
      const valIndex = result.values.findIndex(
        element => element.groupName === fixDicEntry.section
      );
      const property = {
        propertyName: fixDicEntry.nameEntry,
        value: unks[unknIndex].value
      };

      if (valIndex === -1) {
        const group = {
          groupName: fixDicEntry.section,
          properties: [property]
        };

        result.values[groupIndex] = group;
        groupIndex += 1;
      } else {
        result.values[valIndex].properties.push(property);
      }

      valuesFound.push(fixDicEntry.ret);
    }
  }

  let resultunknownHashesIndex = result.unknownHashes.length;

  for (let j = 0; j < unks.length; j += 1) {
    let valueFound = false;

    for (let k = 0; k < valuesFound.length; k += 1) {
      if (unks[j].hash === valuesFound[k]) valueFound = true;
    }

    if (!valueFound) {
      result.unknownHashes[resultunknownHashesIndex] = unks[j];
      resultunknownHashesIndex += 1;
    }
  }

  return result;
}

function writeini(troybinParam) {
  function writeValue(propertyName, value) {
    let formatedValue = `${propertyName}=${value}\r\n`;

    if (typeof value === "string" && isNaN(value)) { // eslint-disable-line
      formatedValue = `${propertyName}="${value}"\r\n`;
    } else if (
      typeof value === "string" ||
      typeof value === "number" ||
      typeof value === "boolean"
    ) {
      formatedValue = `${propertyName}=${value}\r\n`;
    } else if (typeof value === "object") {
      let returnValue = `${value[0]}`;

      for (let i = 0; i < value.length; i += 1) {
        if (i > 0) {
          returnValue += ` ${value[i]}`;
        }
      }

      formatedValue = `${propertyName}=${returnValue}\r\n`;
    }

    return formatedValue;
  }
  let output = "";
  const troybin = {
    values: troybinParam.values.sort((a, b) =>
      a.groupName.localeCompare(b.groupName, "en", { numeric: true })
    ),
    unknownHashes: troybinParam.unknownHashes
  };

  for (let i = 0; i < troybin.values.length; i += 1) {
    const emitter = troybin.values[i];
    output += `[${emitter.groupName}]\r\n`;

    const properties = emitter.properties.sort((a, b) =>
      a.propertyName.localeCompare(b.propertyName, "en", { numeric: true })
    );

    for (let j = 0; j < properties.length; j += 1) {
      const property = properties[j];

      output += writeValue(property.propertyName, property.value);
    }

    output += "\r\n";
  }

  if (troybin.unknownHashes.length > 0) {
    output += "[UNKNOWN_HASHES]\r\n";

    for (let i = 0; i < troybin.unknownHashes.length; i += 1) {
      const unknownProperty = troybin.unknownHashes[i];

      output += writeValue(unknownProperty.hash, unknownProperty.value);
    }
  }

  return output;
}

export default function TroybinConverter(troybin) {
  let result = []; // eslint-disable-line
  buffer = troybin;

  const ibin = read();

  const fixedTroybin = fix(ibin);

  result = writeini(fixedTroybin);

  return result;
}

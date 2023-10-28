/*
Converts text into array with each entry representing a line of text
Also removes backspaces
*/
export function FormatInput(originalTroybin) {
  let troybinFileArray = originalTroybin.split("\r\n");

  // If formating is done differently
  if (troybinFileArray.length === 1) {
    troybinFileArray = troybinFileArray[0].split("\n");
  }

  const troybinArray = troybinFileArray;
  const convertedTroybin = [];

  for (let i = 0; i < troybinArray.length; i += 1) {
    const row = troybinArray[i];

    if (row !== "") {
      convertedTroybin.push(row);
    }
  }

  return convertedTroybin;
}

/*
Converts string value into array with floats
*/
export function FormatNumber(values) {
  const formatedValue = [];

  values.split(" ").forEach(value => {
    formatedValue.push(parseFloat(value));
  });

  return formatedValue;
}

/*
Converts string value to their correct type
*/
export function FormatValue(values, type, defaultAssetsPath, updateFileTypes) {
  const invalidValue = "INVALID_VALUE";
  let formatedValue;
  let isThreeDouble = false;

  switch (type) {
    case "ONE_DOUBLE":
      formatedValue = parseFloat(values);

      if (typeof formatedValue !== "number" || Number.isNaN(formatedValue)) {
        formatedValue = invalidValue;
      }

      break;
    case "TWO_DOUBLE":
      formatedValue = FormatNumber(values);

      if (formatedValue.length !== 2) {
        formatedValue = invalidValue;
      }

      break;
    case "THREE_DOUBLE":
      formatedValue = FormatNumber(values);

      if (formatedValue.length !== 3) {
        formatedValue = invalidValue;
      }

      break;
    case "FOUR_DOUBLE":
      formatedValue = FormatNumber(values);

      if (formatedValue.length !== 4) {
        formatedValue = invalidValue;
      }

      break;
    case "FIVE_DOUBLE":
      formatedValue = FormatNumber(values);

      if (formatedValue.length !== 5) {
        formatedValue = invalidValue;
      }

      break;
    case "COLOR_DOUBLE":
      formatedValue = FormatNumber(values);

      if (formatedValue.length !== 4) {
        formatedValue = invalidValue;
      }

      if (formatedValue.find(value => value > 1) !== undefined) {
        const correctValues = [];

        formatedValue.forEach(value => {
          correctValues.push(value / 255);
        });

        formatedValue = correctValues;
      }

      break;
    case "DOUBLE_TO_PRIMITIVE":
      if (values === "0") {
        formatedValue = "primitiveNone";
      } else if (values === "1") {
        // confirmed
        formatedValue = "primitiveArbitraryQuad";
      } else if (values === "2") {
        // confirmed
        formatedValue = "primitiveRay";
      } else if (values === "3") {
        // confirmed
        formatedValue = "primitiveMesh";
      } else if (values === "4") {
        // confirmed
        formatedValue = "primitiveTrail";
      } else if (values === "5") {
        // confirmed
        formatedValue = "primitiveArbitraryTrail";
      } else if (values === "6") {
        // confirmed
        formatedValue = "primitiveBeam";
      } else if (values === "7") {
        formatedValue = "primitivePlanarProjection";
      } else if (values === "8") {
        formatedValue = "primitiveAttachedMesh";
      } else {
        formatedValue = invalidValue;
      }
      break;
    case "BOOLEAN/INT":
      if (values === "4") {
        formatedValue = 4;
      } else if (values === "\"NotWhenHigh\"" || values === "3") { // eslint-disable-line
        // TODO: Check if NotWhenHigh is actually 3
        formatedValue = 3;
      } else if (values === "\"High\"" || values === "\"clamp\"" || values === "2") { // eslint-disable-line
        formatedValue = 2;
      } else if (values === "\"Medium\"" || values === "true" || values === "1") { // eslint-disable-line
        formatedValue = 1;
      } else if (values === "\"Low\"" || values === "0") { // eslint-disable-line
        formatedValue = 0;
      } else if (
        typeof parseInt(values, 10) === "number" ||
        !Number.isNaN(parseInt(values, 10))
      ) {
        formatedValue = parseInt(values, 10);
      } else {
        formatedValue = invalidValue;
      }
      break;
    case "INT/BOOLEAN":
      if (values === "1" || values === "true") {
        formatedValue = true;
      } else if (values === "0" || values === "false") {
        formatedValue = false;
      } else {
        formatedValue = invalidValue;
      }
      break;
    case "SET_ONE_DOUBLE":
      if (values === "1") {
        formatedValue = 2;
      }
      break;
    case "STRING_PATH":
      formatedValue = `\"${defaultAssetsPath}/${values.replace("\"", "")}`; // eslint-disable-line

      if (updateFileTypes) {
        formatedValue = formatedValue.replace(".tga", ".dds");
      }
      break;
    case "STRING_NO_EXT":
      formatedValue = values.replace(".troy", "");
      break;
    case "STRING_NO_PATH":
      formatedValue = values;
      break;
    case "STRINGS_NO_PATH":
      formatedValue = values.replaceAll('"', "").split(" ");
      break;
    case "TWO_DOUBLE_TO_ONE":
      if (
        values === "1" ||
        values === "1.0" ||
        values.split(" ")[0] === "1.0" ||
        values.split(" ")[1] === "1.0"
      ) {
        formatedValue = 1;
      } else if (values === "0") {
        formatedValue = 0;
      } else {
        const valueArray = values.split(" ");

        formatedValue = parseFloat(valueArray[0]);
      }

      if (values.split(" ").length !== 2 && values !== "1" && values !== "0") {
        formatedValue = invalidValue;
      }

      break;
    case "TWO_DOUBLE_TO_XYZ":
      if (values === "1") {
        formatedValue = ["Y", parseFloat(values)];
      } else if (values.split(" ")[0] === "0.0") {
        formatedValue = ["X", parseFloat(values.split(" ")[1])];
      } else if (values.split(" ")[0] === "1.0") {
        formatedValue = ["Y", parseFloat(values.split(" ")[1])];
      } else {
        formatedValue = ["Z", parseFloat(values.split(" ")[1])];
      }

      if (values !== "1" && values.split(" ").length !== 2) {
        formatedValue = invalidValue;
      }

      break;
    case "ENSURE_TWO_DOUBLE":
      formatedValue = FormatNumber(values);

      if (formatedValue.length !== 2) {
        if (formatedValue.length === 1) {
          formatedValue = [
            parseFloat(formatedValue[0]),
            parseFloat(formatedValue[0])
          ];
        } else {
          formatedValue = invalidValue;
        }
      }

      break;
    case "THREE_DOUBLE || ONE_DOUBLE":
      isThreeDouble = values.split(" ").length === 3;
      formatedValue = isThreeDouble ? FormatNumber(values) : parseFloat(values);

      if (
        (isThreeDouble && formatedValue.length !== 3) ||
        (!isThreeDouble &&
          (typeof formatedValue !== "number" || Number.isNaN(formatedValue)))
      ) {
        formatedValue = invalidValue;
      }

      break;
    case "ONE_DOUBLE_255_TO_PERCENT":
      formatedValue = Math.round((parseFloat(values) / 255) * 100) / 100;

      if (typeof formatedValue !== "number" || Number.isNaN(formatedValue)) {
        formatedValue = invalidValue;
      }

      break;
    default:
      formatedValue = invalidValue;
      break;
  }

  return formatedValue;
}

export function GetStructureData(troybinArray) {
  const entryStartIndices = [];
  let entryAmount = 0;
  let systemIndex = 0;
  let unknownIndex = -1;

  for (let i = 0; i < troybinArray.length; i += 1) {
    const row = troybinArray[i];

    // Checks if row starts with "[" to see if it's an entry starting point
    if (row[0] === "[") {
      entryStartIndices.push(i);
      entryAmount += 1;

      // Note down which one is the System entry
      if (row === "[System]") {
        systemIndex = i;
      }
    }
    // Note down which one is the UNKNOWN_HASHES entry if it exists
    if (row === "[UNKNOWN_HASHES]" || row.includes("UNKNOWN_HASH")) {
      if (unknownIndex === -1) {
        entryStartIndices.push(i);
        entryAmount += 1;
        unknownIndex = i;
      }
    }
  }

  const structureData = {
    entryAmount,
    entryStartIndices,
    systemIndex,
    unknownIndex
  };

  return structureData;
}

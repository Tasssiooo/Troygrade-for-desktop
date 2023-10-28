const FIELD_VARS = 10;
const GPART_VARS = 50;
const MAT_VARS = 5;
const RAND_VARS = 10;
const COLOR_VARS = 25;
const ROT_VARS = 10;

function flex(args) {
  const result = [];
  let resultindex = result.length;

  for (let i = 0; i < args.length; i += 1) {
    const propertyName = args[i];

    result[resultindex] = (`${propertyName}`, `${propertyName}_flex`);
    resultindex += 1;

    for (let j = 0; j < 4; j += 1) {
      result[resultindex] = `${propertyName}_flex${j}`;
      resultindex += 1;
    }
  }

  return result;
}

function color(mods, args) {
  const result = args;
  let resultindex = args.length;

  for (const arg in args) { // eslint-disable-line
    const argsEntry = args[arg];

    for (let j = 0; j < COLOR_VARS; j += 1) {
      result[resultindex] = `${argsEntry}${j}`;
      resultindex += 1;
    }

    for (const mod in mods) { // eslint-disable-line
      const modEntry = mods[mod];
      result[resultindex] = `${argsEntry}${modEntry}P`;
      resultindex += 1;

      for (let l = 0; l < COLOR_VARS; l += 1) {
        result[resultindex] = `${argsEntry}${modEntry}P${l}`;
        resultindex += 1;
      }
    }
  }

  return result;
}

function rand(mods, args) {
  const result = args;
  let resultindex = args.length;

  for (const arg in args) { // eslint-disable-line
    const argsEntry = args[arg];

    for (let j = 0; j < RAND_VARS; j += 1) {
      result[resultindex] = `${argsEntry}${j}`;
      resultindex += 1;
    }

    for (const mod in mods) { // eslint-disable-line
      const modEntry = mods[mod];
      result[resultindex] = `${argsEntry}${modEntry}P`;
      resultindex += 1;

      for (let l = 0; l < RAND_VARS; l += 1) {
        result[resultindex] = `${argsEntry}${modEntry}P${l}`;
        resultindex += 1;
      }
    }
  }

  return result;
}

function flexFloat(args) {
  const result = [];
  let resultindex = result.length;

  for (let i = 0; i < args.length; i += 1) {
    const propertyName = args[i];

    result[resultindex] = `${propertyName}`;
    resultindex += 1;
    result[resultindex] = `${propertyName}_flex`;
    resultindex += 1;

    for (let j = 0; j < 4; j += 1) {
      result[resultindex] = `${propertyName}_flex${j}`;
      resultindex += 1;
    }
  }

  return result;
}

function randColorAmount(args) {
  return color(["R", "G", "B", "A"], args);
}

function randFloat(args) {
  return rand(["X", ""], args);
}

function randVec2(args) {
  return rand(["X", "Y"], args);
}

function randVec3(args) {
  return rand(["X", "Y", "Z"], args);
}

function randColor(args) {
  return rand(["R", "G", "B", "A"], args);
}

function flexRandFloat(args) {
  const flexArgs = flex(args);

  return randFloat(flexArgs);
}

function flexRandVec2(args) {
  const flexArgs = flex(args);

  return randVec2(flexArgs);
}

function flexRandVec3(args) {
  const flexArgs = flex(args);

  return randVec3(flexArgs);
}

function flexRandColor(args) { // eslint-disable-line
  const flexArgs = flex(args);

  return randColor(flexArgs);
}

const materialNames = [
  "MaterialOverrideTransMap",
  "MaterialOverrideTransSource",
  "p-trans-sample",
  "MaterialOverride%PLACEHOLDER%BlendMode",
  "MaterialOverride%PLACEHOLDER%GlossTexture",
  "MaterialOverride%PLACEHOLDER%EmissiveTexture",
  "MaterialOverride%PLACEHOLDER%FixedAlphaScrolling",
  "MaterialOverride%PLACEHOLDER%Priority",
  "MaterialOverride%PLACEHOLDER%RenderingMode",
  "MaterialOverride%PLACEHOLDER%SubMesh",
  "MaterialOverride%PLACEHOLDER%Texture",
  "MaterialOverride%PLACEHOLDER%UVScroll"
];

const partFluidNames = ["fluid-params"];
const partGroupNames = ["GroupPart%PLACEHOLDER%"];
const partFieldNames = [
  "field-accel-%PLACEHOLDER%",
  "field-attract-%PLACEHOLDER%",
  "field-drag-%PLACEHOLDER%",
  "field-noise-%PLACEHOLDER%",
  "field-orbit-%PLACEHOLDER%"
];

const systemNames = [
  "AudioFlexValueParameterName",
  "AudioParameterFlexID",
  "build-up-time",
  "group-vis",
  "group-scale-cap",
  "GroupPart%PLACEHOLDER%",
  "GroupPart%PLACEHOLDER%Type",
  "GroupPart%PLACEHOLDER%Importance",
  "Override-Offset%PLACEHOLDER%",
  "Override-Rotation%PLACEHOLDER%",
  "Override-Scale%PLACEHOLDER%",
  "KeepOrientationAfterSpellCast",
  "PersistThruDeath",
  "PersistThruRevive",
  "SelfIllumination",
  "SimulateEveryFrame",
  "SimulateOncePerFrame",
  "SimulateWhileOffScreen",
  "SoundEndsOnEmitterEnd",
  "SoundOnCreate",
  "SoundPersistent",
  "SoundsPlayWhileOffScreen",
  "VoiceOverOnCreate",
  "VoiceOverPersistent"
];
const groupNames = [
  "ExcludeAttachmentType",
  "KeywordsExcluded",
  "KeywordsIncluded",
  "KeywordsRequired",
  "Particle-ScaleAlongMovementVector",
  "SoundOnCreate",
  "SoundPersistent",
  "VoiceOverOnCreate",
  "VoiceOverPersistent",
  "dont-scroll-alpha-UV",
  "e-active",
  "e-alpharef",
  "e-beam-segments",
  "e-censor-policy",
  "e-disabled",
  "e-life",
  "e-life-scale",
  "e-linger",
  "e-local-orient",
  "e-period",
  "e-shape-name",
  "e-shape-scale",
  "e-shape-use-normal-for-birth",
  "e-soft-in-depth",
  "e-soft-out-depth",
  "e-soft-in-depth-delta",
  "e-soft-out-depth-delta",
  "e-timeoffset",
  "e-trail-cutoff",
  "e-trail-smoothing",
  "e-uvscroll",
  "e-uvscroll-mult",
  "flag-brighter-in-fow",
  "flag-disable-z",
  "flag-disable-y",
  "flag-groundlayer",
  "flag-ground-layer",
  "flag-force-animated-mesh-z-write",
  "flag-projected",
  "p-alphaslicerange",
  "p-animation",
  "p-backfaceon",
  "p-beammode",
  "p-bindtoemitter",
  "p-coloroffset",
  "p-colorscale",
  "p-colortype",
  "p-distortion-mode",
  "p-distortion-power",
  "p-falloff-texture",
  "p-fixedorbit",
  "p-fixedorbittype",
  "p-flexoffset",
  "p-flexscale",
  "p-followterrain",
  "p-frameRate",
  "p-frameRate-mult",
  "p-fresnel",
  "p-life-scale",
  "p-life-scale-offset",
  "p-life-scale-symX",
  "p-life-scale-symY",
  "p-life-scale-symZ",
  "p-linger",
  "p-local-orient",
  "p-lockedtoemitter",
  "p-mesh",
  "p-meshtex",
  "p-meshtex-mult",
  "p-normal-map",
  "p-numframes",
  "p-numframes-mult",
  "p-offsetbyheight",
  "p-offsetbyradius",
  "p-orientation",
  "p-projection-fading",
  "p-projection-y-range",
  "p-randomstartframe",
  "p-randomstartframe-mult",
  "p-reflection-fresnel",
  "p-reflection-map",
  "p-reflection-opacity-direct",
  "p-reflection-opacity-glancing",
  "p-rgba",
  "p-scalebias",
  "p-scalebyheight",
  "p-scalebyradius",
  "p-scaleupfromorigin",
  "p-shadow",
  "p-simpleorient",
  "p-skeleton",
  "p-skin",
  "p-startframe",
  "p-startframe-mult",
  "p-texdiv",
  "p-texdiv-mult",
  "p-texture",
  "p-texture-mode",
  "p-texture-mult",
  "p-texture-mult-mode",
  "p-texture-pixelate",
  "p-trailmode",
  "p-type",
  "p-uvmode",
  "p-uvparallax-scale",
  "p-uvscroll-alpha-mult",
  "p-uvscroll-no-alpha",
  "p-uvscroll-rgb",
  "p-uvscroll-rgb-clamp",
  "p-uvscroll-rgb-clamp-mult",
  "p-vec-velocity-minscale",
  "p-vec-velocity-scale",
  "p-vecalign",
  "p-xquadrot-on",
  "pass",
  "rendermode",
  "single-particle",
  "submesh-list",
  "teamcolor-correction",
  "uniformscale",
  "ChildParticleName",
  "ChildSpawnAtBone",
  "ChildEmitOnDeath",
  "p-childProb",
  "ChildParticleName%PLACEHOLDER%",
  "ChildSpawnAtBone%PLACEHOLDER%",
  "ChildEmitOnDeath%PLACEHOLDER%"
];
const fluidNames = [
  "f-accel",
  "f-buoyancy",
  "f-denseforce",
  "f-diffusion",
  "f-dissipation",
  "f-life",
  "f-initdensity",
  "f-movement-x",
  "f-movement-y",
  "f-viscosity",
  "f-startkick",
  "f-rate",
  "f-rendersize",
  "f-jetdir%PLACEHOLDER%",
  "f-jetdirdiff%PLACEHOLDER%",
  "f-jetpos%PLACEHOLDER%",
  "f-jetspeed%PLACEHOLDER%"
];
const fieldNames = ["f-localspace", "f-axisfrac"];

function generateList(arrayEntry, startEntry, endEntry) {
  const result = [];
  let resultindex = result.length;

  function writeList(array, start, end) {
    for (let j = 0; j < array.length; j += 1) {
      if (
        start !== undefined &&
        end !== undefined &&
        array[j].includes("%PLACEHOLDER%")
      ) {
        for (let k = start; k < end; k += 1) {
          result[resultindex] = array[j].replace("%PLACEHOLDER%", String(k));
          resultindex += 1;
        }
      } else {
        result[resultindex] = array[j];
        resultindex += 1;
      }
    }
  }

  if (Array.isArray(startEntry)) {
    for (let i = 0; i < arrayEntry.length; i += 1) {
      writeList(arrayEntry[i], startEntry[i], endEntry[i]);
    }
  } else {
    writeList(arrayEntry, startEntry, endEntry);
  }

  return result;
}

export default function getDictionaryEntries(nameArray) {
  let result = [];

  switch (nameArray) {
    case "partGroupNames":
      result = generateList(partGroupNames, 0, GPART_VARS);
      break;
    case "partFieldNames":
      result = generateList(partFieldNames, 1, FIELD_VARS);
      break;
    case "partFluidNames":
      result = partFluidNames;
      break;
    case "groupNames":
      result = generateList(
        [
          groupNames,
          materialNames,
          randColorAmount(["e-rgba", "p-xrgba"]),
          flexFloat(["p-scale", "p-scaleEmitOffset"]),
          flexRandFloat(["e-rate", "p-life", "p-rotvel"]),
          flexRandVec2(["e-uvoffset"]),
          flexRandVec3(["p-offset", "p-postoffset", "p-vel"]),
          randColor([
            "e-censor-modulate",
            "p-fresnel-color",
            "p-reflection-fresnel-color"
          ]),
          randFloat([
            "e-color-modulate",
            "e-framerate",
            "p-bindtoemitter",
            "p-life",
            "p-quadrot",
            "p-rotvel",
            "p-scale",
            "p-xquadrot",
            "p-xscale",
            "e-rate"
          ]),
          randVec2([
            "e-ratebyvel",
            "e-uvoffset",
            "e-uvoffset-mult",
            "p-uvscroll-rgb",
            "p-uvscroll-rgb-mult"
          ]),
          randVec3([
            "Emitter-BirthRotationalAcceleration",
            "Particle-Acceleration",
            "Particle-Drag",
            "Particle-Velocity",
            "e-tilesize",
            "p-accel",
            "p-drag",
            "p-offset",
            "p-orbitvel",
            "p-postoffset",
            "p-quadrot",
            "p-rotvel",
            "p-scale",
            "p-vel",
            "p-worldaccel",
            "p-xquadrot",
            "p-xrgba-beam-bind-distance",
            "p-xscale"
          ]),
          randFloat(generateList(["e-rotation%PLACEHOLDER%"], 0, ROT_VARS)),
          ["e-rotation%PLACEHOLDER%-axis"],
          partFieldNames,
          partFluidNames
        ],
        [
          0,
          0,
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          0,
          1,
          undefined
        ],
        [
          10,
          MAT_VARS,
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          ROT_VARS,
          FIELD_VARS,
          undefined
        ]
      );
      break;
    case "fieldNames":
      result = generateList(
        [
          fieldNames,
          randFloat([
            "f-accel",
            "f-drag",
            "f-freq",
            "f-frequency",
            "f-period",
            "f-radius",
            "f-veldelta"
          ]),
          randVec3(["f-accel", "f-direction", "f-pos", "f-axisfrac"])
        ],
        [undefined, undefined, undefined],
        [undefined, undefined, undefined]
      );
      break;
    case "fluidNames":
      result = generateList(fluidNames, 0, 4);
      break;
    case "systemNames":
      result = generateList(
        [systemNames, materialNames],
        [0, 0],
        [GPART_VARS, MAT_VARS]
      );
      break;
    default:
      console.log("INVALID NAME!");
      console.log("Returning empty Array!");
      break;
  }

  return result;
}

import {
  FormatInput,
  FormatValue,
  GetStructureData
} from "./helpers/readHelperFunctions";
import Values from "./helpers/table";

const ReadTroybin = (
  defaultAssetsPath,
  namesOnly,
  originalTroybin,
  outputFileName,
  updateFileTypes
) => {
  let system = [];
  let unknown = [];
  const troybinEntries = [];

  // Creates an array with each row being an entry
  // Also removes unwanted characters
  const troybinArray = FormatInput(originalTroybin);

  // Collect info about troybin structure
  const structureData = GetStructureData(troybinArray);

  for (let i = 0; i < structureData.entryAmount; i += 1) {
    const isUnknown =
      structureData.unknownIndex !== -1 &&
      structureData.unknownIndex === structureData.entryStartIndices[i];

    // eslint-disable-next-line
    const entryName = isUnknown ? "UNKNOWN_HASHES" : troybinArray[0].replace(/[\[\]']+/g, "");
    let entryProperties;
    if (i === structureData.entryAmount - 1) {
      entryProperties = troybinArray.splice(0, troybinArray.length);
    } else {
      entryProperties = troybinArray.splice(
        0,
        structureData.entryStartIndices[i + 1] -
          structureData.entryStartIndices[i]
      );
    }

    const entry = {
      name: entryName,
      properties: entryProperties.splice(
        isUnknown ? 0 : 1,
        entryProperties.length
      )
    };

    entry.properties = entry.properties.sort((a, b) => {
      const formatedA = a.split("=")[0].replace("'", "");
      const formatedB = b.split("=")[0].replace("'", "");

      return formatedA.localeCompare(formatedB, "en", { numeric: true });
    });

    if (entry.name === "System") {
      system = entry;
    } else if (entry.name === "UNKNOWN_HASHES") {
      unknown = entry;
    } else {
      troybinEntries.push(entry);
    }
  }

  troybinEntries.push(unknown.length ? (system, unknown) : system);

  const troybinData = {
    fileName: outputFileName.replace(".txt", ""),
    emitters: [],
    system: [],
    unknown: []
  };

  troybinEntries.forEach(entry => {
    const emitter = {
      isMultiUseEntry: [],
      name: entry.name,
      properties: [],
      order: 0
    };
    const isSystem = entry.name === "System";
    const isUnknown = entry.name === "UNKNOWN_HASHES";

    let needsChanges = false;

    entry.properties.forEach(prop => {
      let assignedProperty = {
        value: undefined
      };
      let emitterNameIndex = -1;
      let entryFound = false;

      const stringParts = prop.split("=");
      const propertyName = stringParts[0];
      const propertyValuePart = stringParts[1];

      let isDisabledField = false;
      const fieldMarkers = [
        "field-accel-",
        "field-attract-",
        "field-drag-",
        "field-noise-",
        "field-orbit-"
      ];

      fieldMarkers.forEach(marker => {
        if (propertyName.includes(marker)) {
          isDisabledField = true;
        }
      });

      if (!isUnknown && (propertyName[0] !== "'" || isDisabledField)) {
        if (isSystem) {
          Values.systemValues.forEach(sValue => {
            if (sValue.troybinName === "GroupPart") {
              if (
                propertyName.includes("GroupPart") &&
                !propertyName.includes("Importance") &&
                !propertyName.includes("Type")
              ) {
                const emitterOrderValue = parseInt(
                  propertyName.replace("GroupPart", ""),
                  10
                );

                assignedProperty = sValue;
                entryFound = true;

                emitterNameIndex = troybinData.emitters.findIndex(
                  emit =>
                    emit.name ===
                    // eslint-disable-next-line
                    propertyValuePart.replace("\"", "").replace("\"", "")
                );

                if (emitterNameIndex !== -1) {
                  const emitterWithIndex =
                    troybinData.emitters[emitterNameIndex];

                  if (emitterWithIndex.order !== 0) {
                    emitterWithIndex.isMultiUseEntry.push(emitterOrderValue);
                  } else {
                    emitterWithIndex.order = emitterOrderValue;
                  }
                }
              }
            } else if (sValue.troybinName === "GroupPartImportance") {
              if (
                propertyName.includes("GroupPart") &&
                propertyName.includes("Importance")
              ) {
                const emitterValue = parseInt(
                  propertyName
                    .replace("GroupPart", "")
                    .replace("Importance", ""),
                  10
                );
                assignedProperty = sValue;
                entryFound = true;

                emitterNameIndex = troybinData.emitters.findIndex(
                  emit => emit.order === emitterValue
                );
              }
            } else if (sValue.troybinName === "GroupPartType") {
              if (
                propertyName.includes("GroupPart") &&
                propertyName.includes("Type")
              ) {
                if (propertyValuePart === "\"Simple\"") { // eslint-disable-line
                  entryFound = true;
                  needsChanges = true;

                  const emitterValue = parseInt(
                    propertyName.replace("GroupPart", "").replace("Type", ""),
                    10
                  );

                  emitterNameIndex = troybinData.emitters.findIndex(
                    emit => emit.order === emitterValue
                  );
                }
              }
            } else if (sValue.troybinName === propertyName) {
              assignedProperty = sValue;
              entryFound = true;
            }
          });
        } else if (propertyName[0] === "e") {
          Values.eValues.forEach(eValue => {
            if (eValue.troybinName === propertyName) {
              assignedProperty = eValue;
              entryFound = true;

              if (propertyName === "e-life" && propertyValuePart === "-1") {
                needsChanges = true;
              }
            }
          });
        } else if (
          propertyName[0] === "f" ||
          (propertyName[0] === "'" && propertyName[1] === "f")
        ) {
          Values.fValues.forEach(fValue => {
            if (
              fValue.troybinName === propertyName ||
              fValue.troybinName === propertyName.slice(1)
            ) {
              assignedProperty = fValue;
              entryFound = true;

              if (
                propertyName.includes("field-accel-") ||
                propertyName.includes("field-attract-") ||
                propertyName.includes("field-drag-") ||
                propertyName.includes("field-noise-") ||
                propertyName.includes("field-orbit-")
              ) {
                needsChanges = true;
              }

              // This is used to recognize field emitters in the update emitter step
              if (propertyName[0] === "'") {
                assignedProperty.definitionId = true;
              }
            }
          });
        } else if (propertyName[0] === "p" || propertyName[0] === "P") {
          Values.pValues.forEach(pValue => {
            if (pValue.troybinName === propertyName) {
              assignedProperty = pValue;
              entryFound = true;
            }
          });
        } else {
          Values.others.forEach(other => {
            if (other.troybinName === propertyName) {
              assignedProperty = other;
              entryFound = true;
            }

            if (
              (other.troybinName === "MaterialOverrideTexture" &&
                propertyName.includes("MaterialOverride") &&
                propertyName.includes("Texture")) ||
              (other.troybinName === "MaterialOverridePriority" &&
                propertyName.includes("MaterialOverride") &&
                propertyName.includes("Priority"))
            ) {
              const definitionId = propertyName
                .replace("MaterialOverride", "")
                .replace("Texture", "")
                .replace("Priority", "");

              assignedProperty = other;
              assignedProperty.definitionId = definitionId;

              entryFound = true;
              needsChanges = true;
            }
          });
        }
      }

      const isComplexGroupPartEntry =
        propertyName.includes("GroupPart") &&
        propertyName.includes("Type") &&
        propertyValuePart === '"Complex"';

      if (
        assignedProperty.binGroup === undefined &&
        !needsChanges &&
        !isComplexGroupPartEntry
      ) {
        const text = namesOnly
          ? `${propertyName}`
          : `${entry.name}: ${propertyName} = ${propertyValuePart}`;

        if (troybinData.unknown.findIndex(emit => emit === text) === -1) {
          troybinData.unknown.push(text);
        }
      }

      if (!entryFound && !isComplexGroupPartEntry) {
        const text = namesOnly
          ? `${propertyName}`
          : `${entry.name}: ${propertyName} = ${propertyValuePart}`;

        if (troybinData.unknown.findIndex(emit => emit === text) === -1) {
          troybinData.unknown.push(text);
        }
      }

      let formatedValue;

      if (assignedProperty.troybinName || needsChanges) {
        if (assignedProperty.troybinName) {
          formatedValue = JSON.parse(
            JSON.stringify(
              FormatValue(
                propertyValuePart,
                assignedProperty.troybinType,
                defaultAssetsPath,
                updateFileTypes
              )
            )
          );

          if (
            formatedValue === "INVALID_VALUE" &&
            assignedProperty.simpleValue !== undefined
          ) {
            formatedValue = JSON.parse(
              JSON.stringify(
                FormatValue(
                  propertyValuePart,
                  assignedProperty.simpleValue[0],
                  defaultAssetsPath,
                  updateFileTypes
                )
              )
            );
          }
        }

        const property = JSON.parse(
          JSON.stringify({
            troybinName: assignedProperty.troybinName,
            troybinType: assignedProperty.troybinType,
            binGroup: assignedProperty.binGroup,
            binGroupType: assignedProperty.binGroupType,
            binPropertyName: assignedProperty.binPropertyName,
            binPropertyType: assignedProperty.binPropertyType,
            defaultValue: assignedProperty.defaultValue,
            simpleValue: assignedProperty.simpleValue || undefined,
            value: formatedValue,
            definitionId: assignedProperty.definitionId || undefined
          })
        );

        if (property.value !== "INVALID_VALUE") {
          if (isSystem) {
            if (emitterNameIndex !== -1) {
              if (needsChanges) {
                troybinData.emitters[emitterNameIndex].needsChanges = true;
                troybinData.emitters[emitterNameIndex].isSimple = true;
                needsChanges = false;
              } else {
                troybinData.emitters[emitterNameIndex].properties.push(
                  JSON.parse(JSON.stringify(property))
                );
              }
            } else {
              troybinData.system.push(property);
            }
          } else {
            if (needsChanges) {
              emitter.needsChanges = true;
              needsChanges = false;
            }
            emitter.properties.push(property);
          }
        } else {
          const text = namesOnly
            ? `${propertyName} (unexpected amount of values)`
            : `${entry.name}: ${propertyName} = ${propertyValuePart}`;

          if (troybinData.unknown.findIndex(emit => emit === text) === -1) {
            troybinData.unknown.push(text);
          }
        }
      }
    });

    if (!isSystem) {
      troybinData.emitters.push(emitter);
    }
  });

  return troybinData;
};

export default ReadTroybin;

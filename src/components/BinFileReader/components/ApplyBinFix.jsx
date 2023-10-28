const listFix = [
  {
    type: "StaticMaterialDef",
    oldString: "samplerValues: list[embed]",
    newString: "samplerValues: list2[embed]"
  },
  {
    type: "StaticMaterialDef",
    oldString: "paramValues: list[embed]",
    newString: "paramValues: list2[embed]"
  },
  {
    type: "StaticMaterialDef",
    oldString: "switches: list[embed]",
    newString: "switches: list2[embed]"
  }
];

const mutedAudioFix = [
  {
    type: "SkinCharacterDataProperties",
    oldString: "bankUnits: list[embed]",
    newString: "bankUnits: list2[embed]"
  }
];

const fileRenames131Fix = [
  {
    type: "VfxSystemDefinitionData",
    oldString: "3026_Glow_Bright.TFT_Set7.dds",
    newString: "3026_Glow_Bright.PIE_C_12_22.dds"
  },
  {
    type: "VfxSystemDefinitionData",
    oldString: "Base_SmokeErode.TFT_Set7.dds",
    newString: "Base_SmokeErode.SRT_Preseason13_Chemtech.dds"
  },
  {
    type: "VfxSystemDefinitionData",
    oldString: "ball32_01.TFT_Set7.dds",
    newString: "ball32_01.TFT_Set8.dds"
  },
  {
    type: "VfxSystemDefinitionData",
    oldString: "bigglow02.TFT_Set7.dds",
    newString: "bigglow02.TFT_Set8_Carousel.dds"
  },
  {
    type: "VfxSystemDefinitionData",
    oldString: "color-hold.UltBook_Ults_12_13_Future.dds",
    newString: "color-hold.PIE_C_12_23.DDS"
  },
  {
    type: "VfxSystemDefinitionData",
    oldString: "common_color-hold.TFT_Set7.dds",
    newString: "common_color-hold.TFT_Booms_Set8.dds"
  },
  {
    type: "VfxSystemDefinitionData",
    oldString: "common_color-rampdown32.dds",
    newString: "common_color-rampdown32.SRT_Preseason13_Chemtech.dds"
  },
  {
    type: "VfxSystemDefinitionData",
    oldString: "common_distort-soft-shockwave.TFT_Booms_Vi.dds",
    newString: "common_distort-soft-shockwave.dds"
  },
  {
    type: "VfxSystemDefinitionData",
    oldString: "color-rampdown.TFT_Set7.dds",
    newString: "color-rampdown.PIE_C_13_1.dds"
  },
  {
    type: "VfxSystemDefinitionData",
    oldString: "color-rampdown32_03.TFT_Set7.dds",
    newString: "color-rampdown32_03.TFT_Set8.dds"
  },
  {
    type: "VfxSystemDefinitionData",
    oldString: "disc32.PIE_C_12_19",
    newString: "disc32.PIE_C_12_21"
  },
  {
    type: "VfxSystemDefinitionData",
    oldString: "Flame_trail_gradient.TFT_Set7.dds",
    newString: "Flame_trail_gradient.TFT_Booms_Set8.dds"
  },
  {
    type: "VfxSystemDefinitionData",
    oldString: "FN_Universal_Praxis_Red_001.dds",
    newString: "FN_Universal_Praxis_Red_001.TFT_Set8.dds"
  },
  {
    type: "VfxSystemDefinitionData",
    oldString: "Ground_Glow.TFT_Set7.dds",
    newString: "Ground_Glow.TFT_Set8.dds"
  },
  {
    type: "VfxSystemDefinitionData",
    oldString: "TFT_Glb_Gradient.TFT_Set7_Stage2",
    newString: "TFT_Glb_Gradient.TFT_Set8"
  },
  {
    type: "VfxSystemDefinitionData",
    oldString: "wind_streaks.dds",
    newString: "wind_streaks.TFT_Set8.dds"
  },
  {
    type: "VfxSystemDefinitionData",
    oldString: ".Season2022_SRT_Preseason.",
    newString: ".",
    ignoreStringIncluded: true,
    exceptions: [
      {
        oldString:
          "ASSETS/Shared/Particles/ball32_02.Season2022_SRT_Preseason.dds",
        newString: "ASSETS/Shared/Particles/ball32_02.TFT_Set8.dds"
      },
      {
        oldString:
          "ASSETS/Characters/SRU_Dragon_ChemTech/skins/base/Particles/sru_dragon_chemtech_Base_Icon_Remake_02.Season2022_SRT_Preseason.dds",
        newString:
          "ASSETS/Maps/Particles/SR/Chemtech_Environemnt_DragonRune_02.SRT_Preseason13_Chemtech.dds"
      }
    ]
  },
  {
    type: "VfxSystemDefinitionData",
    oldString: ".Season2022_SRT_Preseason_FirstStrike.",
    newString: ".",
    ignoreStringIncluded: true
  },
  {
    type: "VfxSystemDefinitionData",
    oldString: ".Structure_Assetization.",
    newString: ".",
    ignoreStringIncluded: true
  },
  {
    type: "VfxSystemDefinitionData",
    oldString: ".SummonersRiftTeam_Season2022_AprilFools.",
    newString: ".",
    ignoreStringIncluded: true
  },
  {
    type: "VfxSystemDefinitionData",
    oldString: ".TFT_Set6.",
    newString: ".",
    ignoreStringIncluded: true
  }
];

const particleChanges131Fix = [
  {
    type: "VfxSystemDefinitionData",
    oldString: "flags: u8",
    newString: "flags: u16"
  },
  {
    type: "VfxSystemDefinitionData",
    oldString: "particleUVScrollRateMult: embed = IntegratedValueVector2",
    newString: "0x22c3cf3e: embed = IntegratedValueVector2"
  },
  {
    type: "VfxSystemDefinitionData",
    oldString: "particleUVRotateRateMult: embed = IntegratedValueFloat",
    newString: "0xdd36a38c: embed = IntegratedValueFloat"
  },
  {
    type: "VfxSystemDefinitionData",
    oldString: "0x3bb0bd85",
    newString: "0x38123c47"
  },
  {
    type: "VfxSystemDefinitionData",
    oldString: [
      "textureMult",
      "texDivMult",
      "isRandomStartFrameMult",
      "0x33b8543e: embed = ValueFloat {",
      "particleUVScrollRateMult: embed = IntegratedValueVector2 {",
      "0x22c3cf3e: embed = IntegratedValueVector2 {",
      "particleUVRotateRateMult: embed = IntegratedValueFloat {",
      "0xdd36a38c: embed = IntegratedValueFloat {",
      "texAddressModeMult",
      "uvRotationMult: embed = ValueFloat {",
      "uvScaleMult: embed = ValueVector2 {",
      "uvScrollAlphaMult",
      "uvScrollClampMult",
      "uvTransformCenterMult",
      "birthUvScrollRateMult: embed = ValueVector2 {",
      "birthUVOffsetMult: embed = ValueVector2 {",
      "birthUvRotateRateMult: embed = ValueFloat {",
      "0x3bb0bd85",
      "0x38123c47",
      "emitterUvScrollRateMult"
    ],
    newString: "textureMult: pointer = 0xb097c1bd"
  },
  {
    type: "VfxSystemDefinitionData",
    oldString: [
      "scaleBirthScaleByBoundObjectSize",
      "scaleEmitOffsetByBoundObjectSize"
    ],
    newString: "0x4ffce322: pointer = 0xb13097f0"
  },
  {
    type: "VfxSystemDefinitionData",
    oldString: [
      "keywordsExcluded: list[string] = {",
      "keywordsIncluded: list[string] = {",
      "keywordsRequired: list[string] = {",
      "spectatorPolicy"
    ],
    newString: "0xf50b1a41: pointer = 0xf4e37e07"
  }
];

const updaterTypeFix = [
  {
    type: "animationGraphData",
    oldString: "mUpdaterType: u8 = 0",
    newString: ""
  },
  {
    type: "animationGraphData",
    oldString: "mUpdaterType: u32 = 0",
    newString: ""
  },
  {
    type: "animationGraphData",
    oldString: "mUpdaterType: u8 = 4",
    newString: "0x16860572: pointer = 0x3c38f0fa {}"
  },
  {
    type: "animationGraphData",
    oldString: "mUpdaterType: u32 = 4",
    newString: "0x16860572: pointer = 0x3c38f0fa {}"
  },
  {
    type: "animationGraphData",
    oldString: "mUpdaterType: u8 = 5",
    newString: "0x16860572: pointer = 0x6c816d62 {}"
  },
  {
    type: "animationGraphData",
    oldString: "mUpdaterType: u32 = 5",
    newString: "0x16860572: pointer = 0x6c816d62 {}"
  },
  {
    type: "animationGraphData",
    oldString: "mUpdaterType: u8 = 6",
    newString: "0x16860572: pointer = 0xee405aca {}"
  },
  {
    type: "animationGraphData",
    oldString: "mUpdaterType: u32 = 6",
    newString: "0x16860572: pointer = 0xee405aca {}"
  },
  {
    type: "animationGraphData",
    oldString: "mUpdaterType: u8 = 16",
    newString: "0x16860572: pointer = 0xbd71ac00 {}"
  },
  {
    type: "animationGraphData",
    oldString: "mUpdaterType: u32 = 16",
    newString: "0x16860572: pointer = 0xbd71ac00 {}"
  },
  {
    type: "animationGraphData",
    oldString: "mUpdaterType: u8 = 22",
    newString: "0x16860572: pointer = 0x4ccbdd5b {}"
  },
  {
    type: "animationGraphData",
    oldString: "mUpdaterType: u32 = 22",
    newString: "0x16860572: pointer = 0x4ccbdd5b {}"
  }
];

const getChangesEntries = value => {
  switch (value) {
    case "listFix":
      return listFix;
    case "mutedAudioFix":
      return mutedAudioFix;
    case "updaterTypeFix":
      return updaterTypeFix;
    case "particleChanges131Fix":
      return particleChanges131Fix;
    case "fileRenames131Fix":
      return fileRenames131Fix;
    default:
      return value;
  }
};

const ApplyBinFix = (changesProps, content, metadata) => {
  function rowIncludesOldString(currentRow, oString, nString, ignoreNewString) {
    return (
      currentRow.includes(oString) &&
      (!currentRow.includes(nString) || ignoreNewString)
    );
  }

  let fileData = content.split("\r\n");

  // If formating is done differently
  if (fileData.length === 1) {
    fileData = fileData[0].split("\n");
  }

  const newFileData = [];
  let amountChanges = 0;

  // Write bin header to fixed file
  for (let h = 0; h < metadata[0].start; h += 1) {
    newFileData.push(fileData[h]);
  }

  const changes = getChangesEntries(changesProps);
  const changesTypes = [...new Set(changes.map(change => change.type))];

  // Iterate bin entries
  for (let i = 0; i < metadata.length; i += 1) {
    const metaDataEntry = metadata[i];

    // Check if selected fix can be applied to this entry
    if (changesTypes.includes(metaDataEntry.type)) {
      const contentChanges = [];
      const structureChanges = [];

      // Filter changes into structure and content changes
      // Structure changes must be applied first
      for (let j = 0; j < changes.length; j += 1) {
        const currentChange = changes[j];

        if (currentChange.type === metaDataEntry.type) {
          if (Array.isArray(currentChange.oldString)) {
            structureChanges.push(currentChange);
          } else {
            contentChanges.push(currentChange);
          }
        }
      }

      // Array later used for content changes after structure changes have been applied
      const contentWithChangedStructure = [];

      // Start structure changes
      if (structureChanges.length) {
        // Create list with structure to save found properties in
        const changedProperties = {};

        for (let k = 0; k < structureChanges.length; k += 1) {
          changedProperties[structureChanges[k].newString] = [];
        }

        // Create list of properties to look for
        const propertiesToCheck = [];

        for (let n = 0; n < structureChanges.length; n += 1) {
          const structureChange = structureChanges[n];

          for (let o = 0; o < structureChange.oldString.length; o += 1) {
            const entry = {
              parent: structureChange.newString,
              property: structureChange.oldString[o]
            };

            propertiesToCheck.push(entry);
          }
        }

        // Start iterating bin entry
        for (let l = metaDataEntry.start; l <= metaDataEntry.end; l += 1) {
          const currentRow = fileData[l];

          // Check if row is start of an emitter
          if (currentRow.includes("VfxEmitterDefinitionData {")) {
            // Get string indicating the end of the emitter (with correct spacing)
            const emitterEndIndicator = currentRow.replace(
              "VfxEmitterDefinitionData {",
              "}"
            );
            const currentSpacing = currentRow.replace(
              "VfxEmitterDefinitionData {",
              ""
            );

            let skipNextLine = false;
            let writeNextLine;
            let writeNextLineStopIndicator = "";
            const newStructuresAlreadyPresent = [];

            // Start iterating emitter content to collect properties to change
            // Only collects properties not already in the new structure
            let m = l;

            while (fileData[m] !== emitterEndIndicator) {
              const currentEmitterContentRow = fileData[m];

              if (skipNextLine) {
                // Used to skip properties we don't want to move
                if (currentEmitterContentRow === writeNextLineStopIndicator) {
                  // Stop skipping cause end is reached
                  skipNextLine = false;
                  writeNextLineStopIndicator = "";
                }
              } else if (writeNextLine !== undefined) {
                // Keep writing property object
                changedProperties[writeNextLine].push(currentEmitterContentRow);

                if (currentEmitterContentRow === writeNextLineStopIndicator) {
                  // Stop writing property object cause end is reached
                  writeNextLine = undefined;
                  writeNextLineStopIndicator = "";
                }
              } else {
                for (let n = 0; n < propertiesToCheck.length; n += 1) {
                  const currentProperty = propertiesToCheck[n];
                  const propertyToCheck = currentProperty.property;

                  if (
                    currentEmitterContentRow.includes(currentProperty.parent)
                  ) {
                    // New structure already exists
                    newStructuresAlreadyPresent.push(currentEmitterContentRow);

                    // Skip content of already existing entry
                    // Missing content will be added to it in a later step
                    skipNextLine = true;
                    writeNextLineStopIndicator = currentEmitterContentRow.replace(
                      `${currentProperty.parent} {`,
                      "}"
                    );

                    break;
                  } else if (
                    currentEmitterContentRow.includes(propertyToCheck)
                  ) {
                    // Check if property is object
                    if (
                      currentEmitterContentRow[
                        currentEmitterContentRow.length - 1
                      ] === "{"
                    ) {
                      changedProperties[currentProperty.parent].push(
                        currentEmitterContentRow
                      );

                      // Save parent and end indicator for writing next lines
                      writeNextLine = currentProperty.parent;
                      writeNextLineStopIndicator = currentEmitterContentRow.replace(
                        propertyToCheck,
                        "}"
                      );
                    } else {
                      changedProperties[currentProperty.parent].push(
                        currentEmitterContentRow
                      );
                    }

                    break;
                  }
                }
              }

              m += 1;
            }

            // Start iterating emitter to write new structure
            let p = l;
            const propertyGroupsAdded = [];

            while (fileData[p] !== emitterEndIndicator) {
              const currentEmitterContentRow = fileData[p];

              if (skipNextLine) {
                // Used to remove rows we don't want
                if (currentEmitterContentRow === writeNextLineStopIndicator) {
                  // End of rows we want to remove reached
                  skipNextLine = false;
                  writeNextLineStopIndicator = "";
                }
              } else if (writeNextLine !== undefined) {
                // Check if property object end is reached
                if (currentEmitterContentRow === writeNextLineStopIndicator) {
                  const changedPropertiesGroup =
                    changedProperties[writeNextLine];

                  // Add properties to new structure
                  for (let n = 0; n < changedPropertiesGroup.length; n += 1) {
                    const changeToAdd = changedPropertiesGroup[n];

                    contentWithChangedStructure.push(`    ${changeToAdd}`);
                  }

                  // Save which property groups we already added
                  propertyGroupsAdded.push(writeNextLine);

                  writeNextLine = undefined;
                  writeNextLineStopIndicator = "";
                }

                // Writing property object
                contentWithChangedStructure.push(currentEmitterContentRow);
              } else {
                const propertyGroupsToAdd = Object.keys(changedProperties);

                if (propertyGroupsToAdd.length) {
                  let propertyFound = false;

                  for (let n = 0; n < propertyGroupsToAdd.length; n += 1) {
                    // Property already found
                    if (propertyFound) {
                      break;
                    }

                    const currentPropertyGroup = propertyGroupsToAdd[n];
                    const propertiesToAdd =
                      changedProperties[currentPropertyGroup];

                    if (
                      currentEmitterContentRow.includes(currentPropertyGroup)
                    ) {
                      // Write property group start
                      contentWithChangedStructure.push(
                        currentEmitterContentRow
                      );

                      // Save info to write rest of the property group
                      propertyFound = true;
                      writeNextLine = currentPropertyGroup;
                      writeNextLineStopIndicator = currentEmitterContentRow.replace(
                        `${currentPropertyGroup} {`,
                        "}"
                      );

                      break;
                    } else {
                      let skipNextPropertyToAdd = false;

                      for (let o = 0; o < propertiesToAdd.length; o += 1) {
                        const currentPropertyToAdd = propertiesToAdd[o];

                        if (skipNextPropertyToAdd) {
                          if (
                            currentPropertyToAdd === writeNextLineStopIndicator
                          ) {
                            // End of object entries reached
                            skipNextPropertyToAdd = false;
                            writeNextLineStopIndicator = "";
                          }
                        } else {
                          if (
                            currentPropertyToAdd[
                              currentPropertyToAdd.length - 1
                            ] === "{"
                          ) {
                            const propertyEntryMatchingCurrentProperty = propertiesToCheck.find(
                              currentEntry =>
                                currentPropertyToAdd.includes(
                                  currentEntry.property
                                )
                            );

                            // Skip next entries because part of object
                            skipNextPropertyToAdd = true;
                            writeNextLineStopIndicator = currentPropertyToAdd.replace(
                              propertyEntryMatchingCurrentProperty.property,
                              "}"
                            );
                          }

                          // Check if current row is property to move
                          if (
                            currentEmitterContentRow.includes(
                              currentPropertyToAdd
                            )
                          ) {
                            propertyFound = true;
                            const newStructurePresentIndicator = `    ${currentSpacing}${currentPropertyGroup} {`;

                            // Check if this is the first property of a group found
                            // Write group with new structure here if new structure doesn't already exist
                            if (
                              !propertyGroupsAdded.includes(
                                currentPropertyGroup
                              ) &&
                              !newStructuresAlreadyPresent.includes(
                                newStructurePresentIndicator
                              )
                            ) {
                              const changedPropertiesGroup =
                                changedProperties[currentPropertyGroup];

                              contentWithChangedStructure.push(
                                newStructurePresentIndicator
                              );

                              for (
                                let q = 0;
                                q < changedPropertiesGroup.length;
                                q += 1
                              ) {
                                const changeToAdd = changedPropertiesGroup[q];

                                contentWithChangedStructure.push(
                                  `    ${changeToAdd}`
                                );
                              }

                              contentWithChangedStructure.push(
                                `    ${currentSpacing}}`
                              );

                              propertyGroupsAdded.push(currentPropertyGroup);
                            }

                            // Check if property is object
                            if (
                              currentEmitterContentRow[
                                currentEmitterContentRow.length - 1
                              ] === "{"
                            ) {
                              const propertyEntryMatchingCurrentProperty = propertiesToCheck.find(
                                currentEntry =>
                                  currentEmitterContentRow.includes(
                                    currentEntry.property
                                  )
                              );

                              skipNextLine = true;
                              writeNextLineStopIndicator = currentEmitterContentRow.replace(
                                propertyEntryMatchingCurrentProperty.property,
                                "}"
                              );
                            }

                            break;
                          }
                        }
                      }
                    }
                  }

                  if (!propertyFound) {
                    contentWithChangedStructure.push(currentEmitterContentRow);
                  }
                } else {
                  // Add row wiithout change
                  contentWithChangedStructure.push(currentEmitterContentRow);
                }
              }

              if (fileData[p + 1] === emitterEndIndicator) {
                const propertyGroupsLeftToAdd = Object.keys(changedProperties);

                // Remove entries from array as we are done
                for (let n = 0; n < propertyGroupsLeftToAdd.length; n += 1) {
                  const propertyGroupLeftToAdd = propertyGroupsLeftToAdd[n];

                  changedProperties[propertyGroupLeftToAdd] = [];
                }

                contentWithChangedStructure.push(emitterEndIndicator);

                l = p + 1;
              }

              p += 1;
            }
          } else {
            contentWithChangedStructure.push(currentRow);
          }
        }
      } else {
        // Write unchanged file data into array used for content changes
        for (let k = metaDataEntry.start; k <= metaDataEntry.end; k += 1) {
          const currentRow = fileData[k];

          contentWithChangedStructure.push(currentRow);
        }
      }

      // Start content changes
      for (let k = 0; k < contentWithChangedStructure.length; k += 1) {
        let currentRow = contentWithChangedStructure[k];

        for (let l = 0; l < contentChanges.length; l += 1) {
          const currentChange = contentChanges[l];
          const ignoreStringIncluded =
            currentChange.ignoreStringIncluded || false;

          if (
            rowIncludesOldString(
              currentRow,
              currentChange.oldString,
              currentChange.newString,
              ignoreStringIncluded
            )
          ) {
            let isException = false;

            // Check if change has exceptions
            if (currentChange.exceptions) {
              for (let m = 0; m < currentChange.exceptions.length; m += 1) {
                const currentException = currentChange.exceptions[m];

                if (
                  rowIncludesOldString(
                    currentRow,
                    currentException.oldString,
                    currentException.newString,
                    ignoreStringIncluded
                  )
                ) {
                  isException = true;

                  currentRow = currentRow.replace(
                    currentException.oldString,
                    currentException.newString
                  );

                  break;
                }
              }
            }

            if (!isException) {
              currentRow = currentRow.replace(
                currentChange.oldString,
                currentChange.newString
              );
            }

            amountChanges += 1;
          }
        }

        // Write line into fixed file
        newFileData.push(currentRow);
      }
    } else {
      // Write unchanged lines into fixed file
      for (let j = metaDataEntry.start; j <= metaDataEntry.end; j += 1) {
        const currentRow = fileData[j];

        newFileData.push(currentRow);
      }
    }
  }

  // Write bin end to fixed file
  const binEndIndex = metadata[metadata.length - 1].end + 1;

  for (let i = binEndIndex; i < fileData.length; i += 1) {
    newFileData.push(fileData[i]);
  }

  const result = newFileData.join("\r\n");

  return { result, amountChanges };
};

export default ApplyBinFix;

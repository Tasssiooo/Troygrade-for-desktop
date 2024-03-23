function getSpacing(number) {
  return "    ".repeat(number);
}

function getValue(member) {
  let constValue = "";

  const isArray = Array.isArray(member.value);

  if (isArray) {
    const value1 = member.value[0].toString();
    const value2 = member.value[1].toString();

    constValue = `{ ${value1}, ${value2} }`;

    if (member.value.length === 3) {
      const value3 = member.value[2].toString();

      constValue = `{ ${value1}, ${value2}, ${value3} }`;
    }

    if (member.value.length === 4) {
      const value3 = member.value[2].toString();
      const value4 = member.value[3].toString();

      constValue = `{ ${value1}, ${value2}, ${value3}, ${value4} }`;
    }
  } else {
    constValue = member.value;
  }

  return constValue;
}

function writeConstantValue(
  property,
  spacingAmount,
  isMult = true,
  valueOnly = false
) {
  const members = isMult ? property.members : property;
  const result = [];
  let returnConst;

  members.forEach(member => {
    const constValue = getValue(member);

    if (member === members[0]) {
      returnConst = constValue;
    }

    if (constValue !== member.defaultValue) {
      if (valueOnly) {
        result.push(`${getSpacing(spacingAmount)}${constValue}\r\n`);
      } else {
        result.push(
          `${getSpacing(spacingAmount)}${member.binPropertyName}: ${
            member.binPropertyType
          } = ${constValue}\r\n`
        );
      }
    }
  });

  return { constValue: returnConst, result };
}

function writeDynamics(
  constValue,
  property,
  probTableX,
  probTableY,
  probTableZ,
  probTableA,
  spacingAmount,
  timesTable,
  timesSimpleTable,
  writeEmptyEntries = true
) {
  const result = [];

  if (
    probTableX.length ||
    probTableY.length ||
    probTableZ.length ||
    probTableA.length
  ) {
    result.push(
      `${getSpacing(spacingAmount)}dynamics: ${probTableX[0]?.binGroupType ||
        probTableY[0]?.binGroupType ||
        probTableZ[0]?.binGroupType ||
        probTableA[0]?.binGroupType} {\r\n`,
      `${getSpacing(spacingAmount + 1)}probabilityTables: list[pointer] = {\r\n`
    );

    const canHaveA =
      property.members[0].binGroup.members.findIndex(emit =>
        emit.includes("probTableA")
      ) !== -1;
    const canHaveY =
      property.members[0].binGroup.members.findIndex(emit =>
        emit.includes("probTableY")
      ) !== -1;
    const canHaveZ =
      property.members[0].binGroup.members.findIndex(emit =>
        emit.includes("probTableZ")
      ) !== -1;

    if (probTableX.length) {
      result.push(
        `${getSpacing(spacingAmount + 2)}VfxProbabilityTableData {\r\n`,
        `${getSpacing(spacingAmount + 3)}keyTimes: list[f32] = {\r\n`
      );

      probTableX.forEach(probTable => {
        result.push(
          `${getSpacing(spacingAmount + 4)}${probTable.value[0]}\r\n`
        );
      });

      result.push(
        `${getSpacing(spacingAmount + 3)}}\r\n`,
        `${getSpacing(spacingAmount + 3)}keyValues: list[${
          probTableX[0].binPropertyType
        }] = {\r\n`
      );

      probTableX.forEach(probTable => {
        let value = probTable.value[1];

        if (probTable.value.length === 3) {
          value = `{${value[1]}, ${value[2]}}`;
        }

        if (probTable.value.length === 4) {
          value = `{${value[1]}, ${value[2]}, ${value[3]}}`;
        }

        result.push(`${getSpacing(spacingAmount + 4)}${value}\r\n`);
      });

      result.push(
        `${getSpacing(spacingAmount + 3)}}\r\n`,
        `${getSpacing(spacingAmount + 2)}}\r\n`
      );
    } else if (writeEmptyEntries) {
      result.push(
        `${getSpacing(spacingAmount + 2)}VfxProbabilityTableData {}\r\n`
      );
    }

    if (probTableY.length) {
      result.push(
        `${getSpacing(spacingAmount + 2)}VfxProbabilityTableData {\r\n`,
        `${getSpacing(spacingAmount + 3)}keyTimes: list[f32] = {\r\n`
      );

      probTableY.forEach(probTable => {
        result.push(
          `${getSpacing(spacingAmount + 4)}${probTable.value[0]}\r\n`
        );
      });

      result.push(
        `${getSpacing(spacingAmount + 3)}}\r\n`,
        `${getSpacing(spacingAmount + 3)}keyValues: list[${
          probTableY[0].binPropertyType
        }] = {\r\n`
      );

      probTableY.forEach(probTable => {
        let value = probTable.value[1];

        if (probTable.value.length === 3) {
          value = `{${value[1]}, ${value[2]}}`;
        }

        if (probTable.value.length === 4) {
          value = `{${value[1]}, ${value[2]}, ${value[3]}}`;
        }

        result.push(`${getSpacing(spacingAmount + 4)}${value}\r\n`);
      });

      result.push(
        `${getSpacing(spacingAmount + 3)}}\r\n`,
        `${getSpacing(spacingAmount + 2)}}\r\n`
      );
    } else if (canHaveY && writeEmptyEntries) {
      result.push(
        `${getSpacing(spacingAmount + 2)}VfxProbabilityTableData {}\r\n`
      );
    }

    if (probTableZ.length) {
      result.push(
        `${getSpacing(spacingAmount + 2)}VfxProbabilityTableData {\r\n`,
        `${getSpacing(spacingAmount + 3)}keyTimes: list[f32] = {\r\n`
      );

      probTableZ.forEach(probTable => {
        result.push(
          `${getSpacing(spacingAmount + 4)}${probTable.value[0]}\r\n`
        );
      });

      result.push(
        `${getSpacing(spacingAmount + 3)}}\r\n`,
        `${getSpacing(spacingAmount + 3)}keyValues: list[${
          probTableZ[0].binPropertyType
        }] = {\r\n`
      );

      probTableZ.forEach(probTable => {
        let value = probTable.value[1];

        if (probTable.value.length === 3) {
          value = `{${value[1]}, ${value[2]}}`;
        }

        if (probTable.value.length === 4) {
          value = `{${value[1]}, ${value[2]}, ${value[3]}}`;
        }

        result.push(`${getSpacing(spacingAmount + 4)}${value}\r\n`);
      });

      result.push(
        `${getSpacing(spacingAmount + 3)}}\r\n`,
        `${getSpacing(spacingAmount + 2)}}\r\n`
      );
    } else if (canHaveZ && writeEmptyEntries) {
      result.push(
        `${getSpacing(spacingAmount + 2)}VfxProbabilityTableData {}\r\n`
      );
    }

    if (probTableA.length) {
      result.push(
        `${getSpacing(spacingAmount + 2)}VfxProbabilityTableData {\r\n`,
        `${getSpacing(spacingAmount + 3)}keyTimes: list[f32] = {\r\n`
      );

      probTableA.forEach(probTable => {
        result.push(
          `${getSpacing(spacingAmount + 4)}${probTable.value[0]}\r\n`
        );
      });

      result.push(
        `${getSpacing(spacingAmount + 3)}}\r\n`,
        `${getSpacing(spacingAmount + 3)}keyValues: list[${
          probTableA[0].binPropertyType
        }] = {\r\n`
      );

      probTableA.forEach(probTable => {
        let value = probTable.value[1];

        if (probTable.value.length === 3) {
          value = `{${value[1]}, ${value[2]}}`;
        }

        if (probTable.value.length === 4) {
          value = `{${value[1]}, ${value[2]}, ${value[3]}}`;
        }

        result.push(`${getSpacing(spacingAmount + 4)}${value}\r\n`);
      });

      result.push(
        `${getSpacing(spacingAmount + 3)}}\r\n`,
        `${getSpacing(spacingAmount + 2)}}\r\n`
      );
    } else if (canHaveA && writeEmptyEntries) {
      result.push(
        `${getSpacing(spacingAmount + 2)}VfxProbabilityTableData {}\r\n`
      );
    }

    result.push(`${getSpacing(spacingAmount + 1)}}\r\n`);
  } else {
    const binGroupType =
      timesSimpleTable[0] !== undefined
        ? timesSimpleTable[0].binGroupType
        : "pointer = VfxAnimatedVector3fVariableData";

    result.push(
      `${getSpacing(spacingAmount)}dynamics: ${
        timesTable[0] !== undefined ? timesTable[0].binGroupType : binGroupType
      } {\r\n`
    );
  }

  result.push(`${getSpacing(spacingAmount + 1)}times: list[f32] = {\r\n`);

  if (timesTable.length || timesSimpleTable.length) {
    const timesTableEntries = timesTable.length ? timesTable : timesSimpleTable;

    timesTableEntries.forEach(table => {
      result.push(`${getSpacing(spacingAmount + 2)}${table.value[0]}\r\n`);
    });

    result.push(
      `${getSpacing(spacingAmount + 1)}}\r\n`,
      `${getSpacing(spacingAmount + 1)}values: list[${
        timesTableEntries[0].binPropertyType
      }] = {\r\n`
    );

    timesTableEntries.forEach(table => {
      let value = table.value[1];

      if (table.value.length === 3) {
        value = `{ ${table.value[1]}, ${table.value[2]} }`;
      }

      if (table.value.length === 4) {
        value = `{ ${table.value[1]}, ${table.value[2]}, ${table.value[3]} }`;
      }

      if (table.value.length === 5) {
        value = `{ ${table.value[1]}, ${table.value[2]}, ${table.value[3]}, ${table.value[4]} }`;
      }

      result.push(`${getSpacing(spacingAmount + 2)}${value}\r\n`);
    });

    result.push(
      `${getSpacing(spacingAmount + 1)}}\r\n`,
      `${getSpacing(spacingAmount + 0)}}\r\n`
    );
  } else {
    const constValueEntry = property.members.find(
      memb => memb.binPropertyName === "constantValue"
    );

    result.push(
      `${getSpacing(spacingAmount + 2)}0\r\n`,
      `${getSpacing(spacingAmount + 1)}}\r\n`,
      `${getSpacing(spacingAmount + 1)}values: list[${
        constValueEntry
          ? constValueEntry.binPropertyType
          : property.members[0].binPropertyType
      }] = {\r\n`,
      `${getSpacing(spacingAmount + 2)}${constValue}\r\n`,
      `${getSpacing(spacingAmount + 1)}}\r\n`,
      `${getSpacing(spacingAmount)}}\r\n`
    );
  }

  return result;
}

/*
Returns array with property in bin format
*/
function WriteProperty(property, spacingAmount) {
  let constValueWritten;
  const forceDynamics = property.name === "worldAcceleration";
  const formatedProperty = [];

  const constantValues = [];
  const probTableX = [];
  const probTableY = [];
  const probTableZ = [];
  const probTableA = [];
  const timesTable = [];
  const timesSimpleTable = [];

  // Only needed for the ShapeRotationAnglesProperty structure
  const timesTableEntriesX = [];
  const timesTableEntriesY = [];

  property.members.forEach(member => {
    const type = member.binPropertyName;

    if (type === "constantValue") {
      constantValues.push(member);
    }

    if (type.includes("probTable")) {
      if (type.includes("X")) {
        probTableX.push(member);
      } else if (type.includes("Y")) {
        probTableY.push(member);
      } else if (type.includes("Z")) {
        probTableZ.push(member);
      } else {
        probTableA.push(member);
      }
    }

    if (type.includes("timesTable")) {
      timesTable.push(member);
    }

    if (type.includes("timesSimpleTable")) {
      timesSimpleTable.push(member);
    }
  });

  switch (property.members[0].binGroup.structure) {
    case "ChildParticleProperty":
      constValueWritten = getValue(property.members[0]);

      formatedProperty.push(
        `${getSpacing(spacingAmount)}${property.members[0].binGroup.name}: ${
          property.members[0].binGroupType
        } {\r\n`,
        `${getSpacing(
          spacingAmount + 1
        )}childrenIdentifiers: list[embed] = {\r\n`,
        `${getSpacing(spacingAmount + 2)}VfxChildIdentifier {\r\n`,
        `${getSpacing(spacingAmount + 3)}${
          property.members[0].binPropertyName
        }: ${property.members[0].binPropertyType} = ${constValueWritten}\r\n`,
        `${getSpacing(spacingAmount + 2)}}\r\n`,
        `${getSpacing(spacingAmount + 1)}}\r\n`,
        `${getSpacing(spacingAmount)}}\r\n`
      );

      break;
    case "ColorTypeProperty":
      if (property.members[0].value[1] !== property.members[0].defaultValue) {
        formatedProperty.push(
          `${getSpacing(spacingAmount)}${
            property.members[0].binPropertyName !== ""
              ? property.members[0].binPropertyName
              : property.name
          }${property.members[0].value[0]}: ${
            property.members[0].binGroupType
          } = ${property.members[0].value[1]}\r\n`
        );
      }

      break;
    case "MultConstantValueProperty":
      formatedProperty.push(
        `${getSpacing(spacingAmount)}${property.name}: ${
          property.members[0].binGroupType
        } {\r\n`
      );

      constValueWritten = writeConstantValue(property, spacingAmount + 1);

      constValueWritten.result.forEach(entry => {
        formatedProperty.push(entry);
      });

      formatedProperty.push(`${getSpacing(spacingAmount)}}\r\n`);

      break;
    case "SimpleProperty":
      constValueWritten = getValue(property.members[0]);

      if (constValueWritten !== property.members[0].defaultValue) {
        formatedProperty.push(
          `${getSpacing(spacingAmount)}${
            property.members[0].binPropertyName !== ""
              ? property.members[0].binPropertyName
              : property.name
          }: ${property.members[0].binGroupType} = ${constValueWritten}\r\n`
        );
      }

      break;
    case "SimpleObjectProperty":
      if (property.members[0].value !== property.members[0].defaultValue) {
        formatedProperty.push(
          `${getSpacing(spacingAmount)}${property.name}: ${
            property.members[0].binGroupType
          } = {\r\n`
        );

        const isStringArray =
          property.members[0].troybinType === "STRINGS_NO_PATH";

        if (isStringArray) {
          property.members[0].value.forEach(valuePart => {
            formatedProperty.push(
              `${getSpacing(spacingAmount + 1)}"${valuePart}"\r\n`
            );
          });
        } else if (property.members[0].binGroup.name === "emitRotationAxes") {
          property.members.forEach(memberPart => {
            const value = `{ ${memberPart.value[0]}, ${memberPart.value[1]}, ${memberPart.value[2]} }`;

            formatedProperty.push(
              `${getSpacing(spacingAmount + 1)}${value}\r\n`
            );
          });
        } else {
          constValueWritten = writeConstantValue(
            property,
            spacingAmount + 1,
            true,
            true
          );

          constValueWritten.result.forEach(entry => {
            formatedProperty.push(entry);
          });
        }

        formatedProperty.push(`${getSpacing(spacingAmount)}}\r\n`);
      }

      break;
    case "SimpleObjectVariableProperty":
      constValueWritten = writeConstantValue(
        constantValues,
        spacingAmount + 1,
        false
      );

      if (
        constValueWritten.result.length !== 0 ||
        probTableX.length ||
        probTableY.length ||
        probTableZ.length ||
        probTableA.length ||
        timesTable.length ||
        timesSimpleTable.length ||
        forceDynamics
      ) {
        formatedProperty.push(
          `${getSpacing(spacingAmount)}${property.name}: embed = ${
            property.members[0].binGroup.propertyType
          } {\r\n`
        );

        constValueWritten.result.forEach(entry => {
          formatedProperty.push(entry);
        });

        if (
          probTableX.length ||
          probTableY.length ||
          probTableZ.length ||
          probTableA.length ||
          timesTable.length ||
          timesSimpleTable.length ||
          forceDynamics
        ) {
          writeDynamics(
            constValueWritten.constValue,
            property,
            probTableX,
            probTableY,
            probTableZ,
            probTableA,
            spacingAmount + 1,
            timesTable,
            timesSimpleTable
          ).forEach(entry => {
            formatedProperty.push(entry);
          });
        }

        formatedProperty.push(`${getSpacing(spacingAmount)}}\r\n`);
      }

      break;
    case "ShapeRotationAnglesProperty":
      formatedProperty.push(
        `${getSpacing(spacingAmount)}${property.name}: ${
          property.members[0].binGroupType
        } {\r\n`
      );

      if (timesTable.length) {
        for (let i = 0; i < timesTable.length; i += 1) {
          const tableEntry = timesTable[i];

          if (tableEntry.troybinName.includes("e-rotation1")) {
            timesTableEntriesX.push(tableEntry);
          } else if (tableEntry.troybinName.includes("e-rotation2")) {
            timesTableEntriesY.push(tableEntry);
          }
        }
      }

      // eslint-disable-next-line
      const constantX = constantValues.filter(
        constant => constant.troybinName === "e-rotation1"
      )[0];

      if (
        probTableX.length ||
        timesTableEntriesX.length ||
        constantX !== undefined
      ) {
        formatedProperty.push(
          `${getSpacing(spacingAmount + 1)}ValueFloat {\r\n`
        );

        constValueWritten = writeConstantValue(
          [constantX],
          spacingAmount + 2,
          false
        );

        constValueWritten.result.forEach(entry => {
          formatedProperty.push(entry);
        });

        if (probTableX.length || timesTableEntriesX.length) {
          writeDynamics(
            constValueWritten.constValue,
            property,
            probTableX,
            [],
            probTableZ,
            probTableA,
            spacingAmount + 2,
            timesTableEntriesX,
            timesSimpleTable,
            false
          ).forEach(entry => {
            formatedProperty.push(entry);
          });
        }

        formatedProperty.push(`${getSpacing(spacingAmount + 1)}}\r\n`);
      } else {
        formatedProperty.push(
          `${getSpacing(spacingAmount + 1)}ValueFloat {}\r\n`
        );
      }

      // eslint-disable-next-line
      const constantY = constantValues.filter(
        constant => constant.troybinName === "e-rotation2"
      )[0];

      if (
        probTableY.length ||
        timesTableEntriesY.length ||
        constantY !== undefined
      ) {
        formatedProperty.push(
          `${getSpacing(spacingAmount + 1)}ValueFloat {\r\n`
        );

        constValueWritten = writeConstantValue(
          [constantY],
          spacingAmount + 2,
          false
        );

        constValueWritten.result.forEach(entry => {
          formatedProperty.push(entry);
        });

        if (probTableY.length || timesTableEntriesY.length) {
          writeDynamics(
            constValueWritten.constValue,
            property,
            [],
            probTableY,
            probTableZ,
            probTableA,
            spacingAmount + 2,
            timesTableEntriesY,
            timesSimpleTable,
            false
          ).forEach(entry => {
            formatedProperty.push(entry);
          });
        }

        formatedProperty.push(`${getSpacing(spacingAmount + 1)}}\r\n`);
      }

      formatedProperty.push(`${getSpacing(spacingAmount)}}\r\n`);

      break;
    default:
      break;
  }

  return formatedProperty;
}

const WriteBin = (bin, defaultFilePath) => {
  function writeEmitters(emitters, typeString, spacing) {
    const result = [];

    result.push(
      `${getSpacing(spacing + 1)}${typeString}: list[pointer] = {\r\n`
    );

    emitters.forEach(emitter => {
      const propertiesWritten = [];

      emitter.forEach(property => {
        let entry;

        if (property.name === "shape") {
          const writenLines = [];

          property.members.forEach(member => {
            entry = WriteProperty(member, spacing + 4);

            entry.forEach(e => {
              writenLines.push(e);
            });
          });

          if (writenLines.length) {
            propertiesWritten.push(
              `${getSpacing(spacing + 3)}shape: embed = VfxShape {\r\n`
            );

            writenLines.forEach(line => {
              propertiesWritten.push(line);
            });

            propertiesWritten.push(`${getSpacing(spacing + 3)}}\r\n`);
          }
        } else if (property.name.includes("primitive")) {
          if (
            property.name !== "primitiveNone" &&
            property.name !== "primitive"
          ) {
            let hasContent = false;
            const meshEntries = [];
            const beamEntries = [];

            switch (property.name) {
              // 1
              case "primitiveArbitraryQuad":
                propertiesWritten.push(
                  `${getSpacing(
                    spacing + 3
                  )}primitive: pointer = VfxPrimitiveArbitraryQuad {}\r\n`
                );
                break;
              // 2 ?
              case "primitiveArbitraryTrail":
                hasContent = true;

                propertiesWritten.push(
                  `${getSpacing(
                    spacing + 3
                  )}primitive: pointer = VfxPrimitiveArbitraryTrail {\r\n`,
                  `${getSpacing(
                    spacing + 4
                  )}mTrail: embed = VfxTrailDefinitionData {\r\n`
                );
                break;
              // 3
              case "primitiveMesh":
                hasContent = true;

                propertiesWritten.push(
                  `${getSpacing(
                    spacing + 3
                  )}primitive: pointer = VfxPrimitiveMesh {\r\n`,
                  `${getSpacing(
                    spacing + 4
                  )}mMesh: embed = VfxMeshDefinitionData {\r\n`
                );
                break;
              // 4 ?
              case "primitiveAttachedMesh":
                hasContent = true;

                propertiesWritten.push(
                  `${getSpacing(
                    spacing + 3
                  )}primitive: pointer = VfxPrimitiveAttachedMesh {\r\n`,
                  `${getSpacing(
                    spacing + 4
                  )}mMesh: embed = VfxMeshDefinitionData {\r\n`
                );
                break;
              // 5
              case "primitiveTrail":
                hasContent = true;

                propertiesWritten.push(
                  `${getSpacing(
                    spacing + 3
                  )}primitive: pointer = VfxPrimitiveCameraTrail {\r\n`,
                  `${getSpacing(
                    spacing + 4
                  )}mTrail: embed = VfxTrailDefinitionData {\r\n`
                );
                break;
              // 6
              case "primitiveBeam":
                hasContent = true;

                propertiesWritten.push(
                  `${getSpacing(
                    spacing + 3
                  )}primitive: pointer = VfxPrimitiveBeam {\r\n`
                );

                for (let i = 0; i < property.members.length; i += 1) {
                  const primitiveMember = property.members[i];

                  if (primitiveMember.name === "mMesh") {
                    meshEntries.push(primitiveMember);
                  } else {
                    beamEntries.push(primitiveMember);
                  }
                }

                if (meshEntries.length) {
                  propertiesWritten.push(
                    `${getSpacing(
                      spacing + 4
                    )}mMesh: embed = VfxMeshDefinitionData {\r\n`
                  );

                  meshEntries.forEach(member => {
                    const meshEntry = WriteProperty(member, spacing + 5);

                    meshEntry.forEach(e => {
                      propertiesWritten.push(e);
                    });
                  });

                  propertiesWritten.push(`${getSpacing(spacing + 4)}}\r\n`);
                }

                if (beamEntries.length) {
                  propertiesWritten.push(
                    `${getSpacing(
                      spacing + 4
                    )}mBeam: embed = VfxBeamDefinitionData {\r\n`
                  );

                  beamEntries.forEach(member => {
                    const beamEntry = WriteProperty(member, spacing + 5);

                    beamEntry.forEach(e => {
                      propertiesWritten.push(e);
                    });
                  });

                  propertiesWritten.push(`${getSpacing(spacing + 4)}}\r\n`);
                }

                propertiesWritten.push(`${getSpacing(spacing + 3)}}\r\n`);

                break;
              // 7
              case "primitivePlanarProjection":
                hasContent = true;

                propertiesWritten.push(
                  `${getSpacing(
                    spacing + 3
                  )}primitive: pointer = VfxPrimitivePlanarProjection {\r\n`,
                  `${getSpacing(
                    spacing + 4
                  )}mProjection: embed = VfxProjectionDefinitionData {\r\n`
                );
                break;
              // 8 ?
              case "primitiveRay":
                propertiesWritten.push(
                  `${getSpacing(
                    spacing + 3
                  )}primitive: pointer = VfxPrimitiveRay {}\r\n`
                );
                break;
              default:
                break;
            }

            if (
              hasContent &&
              property.members.length &&
              property.name !== "primitiveBeam"
            ) {
              property.members.forEach(member => {
                entry = WriteProperty(member, spacing + 5);

                entry.forEach(e => {
                  propertiesWritten.push(e);
                });
              });

              propertiesWritten.push(
                `${getSpacing(spacing + 4)}}\r\n`,
                `${getSpacing(spacing + 3)}}\r\n`
              );
            }
          }
        } else if (property.name === "distortionDefinition") {
          propertiesWritten.push(
            `${getSpacing(
              spacing + 3
            )}distortionDefinition: pointer = VfxDistortionDefinitionData {\r\n`
          );

          property.members.forEach(member => {
            entry = WriteProperty(member, spacing + 4);

            entry.forEach(e => {
              propertiesWritten.push(e);
            });
          });

          propertiesWritten.push(`${getSpacing(spacing + 3)}}\r\n`);
        } else if (property.name === "fieldCollectionDefinition") {
          const writenLines = [];

          property.members.forEach(member => {
            let fieldType;

            switch (member.name) {
              case "fieldAccelerationDefinitions":
                fieldType = "Acceleration";
                break;
              case "fieldAttractionDefinitions":
                fieldType = "Attraction";
                break;
              case "fieldDragDefinitions":
                fieldType = "Drag";
                break;
              case "fieldNoiseDefinitions":
                fieldType = "Noise";
                break;
              case "fieldOrbitalDefinitions":
                fieldType = "Orbital";
                break;
              default:
                break;
            }

            writenLines.push(
              `${getSpacing(
                spacing + 4
              )}field${fieldType}Definitions: list[embed] = {\r\n`
            );

            member.members.forEach(definitionGroup => {
              writenLines.push(
                `${getSpacing(
                  spacing + 5
                )}VfxField${fieldType}DefinitionData {\r\n`
              );

              definitionGroup.forEach(memb => {
                entry = WriteProperty(memb, spacing + 6);

                entry.forEach(e => {
                  writenLines.push(e);
                });
              });

              writenLines.push(`${getSpacing(spacing + 5)}}\r\n`);
            });

            writenLines.push(`${getSpacing(spacing + 4)}}\r\n`);
          });

          if (writenLines.length) {
            propertiesWritten.push(
              `${getSpacing(
                spacing + 3
              )}fieldCollectionDefinition: pointer = VfxFieldCollectionDefinitionData {\r\n`
            );

            writenLines.forEach(line => {
              propertiesWritten.push(line);
            });

            propertiesWritten.push(`${getSpacing(spacing + 3)}}\r\n`);
          }
        } else if (property.name === "materialOverrideDefinitions") {
          const writenLines = [];

          property.members[0].members.forEach(member => {
            writenLines.push(
              `${getSpacing(spacing + 4)}${property.members[0].name} {\r\n`
            );

            member.forEach(memb => {
              entry = WriteProperty(memb, spacing + 5);

              entry.forEach(e => {
                writenLines.push(e);
              });
            });

            writenLines.push(`${getSpacing(spacing + 4)}}\r\n`);
          });

          if (writenLines.length) {
            propertiesWritten.push(
              `${getSpacing(
                spacing + 3
              )}MaterialOverrideDefinitions: list[embed] = {\r\n`
            );

            writenLines.forEach(line => {
              propertiesWritten.push(line);
            });

            propertiesWritten.push(`${getSpacing(spacing + 3)}}\r\n`);
          }
        } else if (property.name === "textureMult") {
          propertiesWritten.push(
            `${getSpacing(spacing + 3)}textureMult: pointer = 0xb097c1bd {\r\n`
          );

          property.members.forEach(member => {
            entry = WriteProperty(member, spacing + 4);

            entry.forEach(e => {
              propertiesWritten.push(e);
            });
          });

          propertiesWritten.push(`${getSpacing(spacing + 3)}}\r\n`);
        } else if (property.name === "0xbc022424") {
          propertiesWritten.push(
            `${getSpacing(spacing + 3)}0xbc022424: pointer = 0x7f70a2b2 {\r\n`
          );

          property.members.forEach(member => {
            entry = WriteProperty(member, spacing + 4);

            entry.forEach(e => {
              propertiesWritten.push(e);
            });
          });

          propertiesWritten.push(`${getSpacing(spacing + 3)}}\r\n`);
        } else {
          entry = WriteProperty(property, spacing + 3);

          entry.forEach(e => {
            propertiesWritten.push(e);
          });
        }
      });

      if (propertiesWritten.length) {
        result.push(`${getSpacing(spacing + 2)}VfxEmitterDefinitionData {\r\n`);

        propertiesWritten.forEach(emitterLine => {
          result.push(emitterLine);
        });

        result.push(`${getSpacing(spacing + 2)}}\r\n`);
      }
    });

    result.push(`${getSpacing(spacing + 1)}}\r\n`);

    return result;
  }

  const spacing = 1;

  const finalBin = [
    "#PROP_text\r\n",
    'type: string = "PROP"\r\n',
    "version: u32 = 3\r\n",
    "linked: list[string] = {}\r\n",
    "entries: map[hash,embed] = {\r\n",
    `${getSpacing(spacing)}\"${defaultFilePath}/${ // eslint-disable-line
      bin.name
    }\" = VfxSystemDefinitionData {\r\n` // eslint-disable-line
  ];

  if (bin.emitters.complex.length) {
    const emitters = writeEmitters(
      bin.emitters.complex,
      "complexEmitterDefinitionData",
      spacing
    );

    emitters.forEach(emitterLine => {
      finalBin.push(emitterLine);
    });
  }

  if (bin.emitters.simple.length) {
    const emitters = writeEmitters(
      bin.emitters.simple,
      "simpleEmitterDefinitionData",
      spacing
    );

    emitters.forEach(emitterLine => {
      finalBin.push(emitterLine);
    });
  }

  bin.system.forEach(systemProperty => {
    const systemEntry = WriteProperty(systemProperty, spacing + 1);

    systemEntry.forEach(s => {
      finalBin.push(s);
    });
  });

  finalBin.push(`${getSpacing(spacing)}}\r\n`, "}\r\n");

  if (bin.unknowns.length) {
    const unknownProperties = [];

    for (let i = 0; i < bin.unknowns.length; i += 1) {
      const unkn = bin.unknowns[i];
      const namePart = unkn.split(": ")[1];

      if (namePart[0] !== "'") {
        unknownProperties.push(unkn);
      }
    }

    if (unknownProperties.length) {
      finalBin.push(
        `\r\n`,
        `\r\n`,
        `Troygrade was unable to translate the following properties: \r\n`
      );

      unknownProperties.forEach(unknownProp => {
        finalBin.push(`${unknownProp}\r\n`);
      });
    }
  }

  return finalBin.join("");
};

export default WriteBin;

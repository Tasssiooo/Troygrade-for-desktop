const CreateBin = (troybin, defaultFilePath) => {
  const binName = troybin.fileName;

  const bin = {
    name: binName,
    emitters: {
      complex: [],
      simple: []
    },
    system: [],
    unknowns: troybin.unknown
  };

  troybin.emitters.forEach(emitter => {
    const alreadyAdded = [];
    const binEmitters = [];

    emitter.properties.forEach(property => {
      if (
        alreadyAdded.filter(entry => entry === property.binGroup.name)
          .length === 0
      ) {
        const propertyGroup = property.binGroup.name;
        let propertyParts = [];

        if (property.binGroup.members.length > 0) {
          propertyParts = emitter.properties.filter(
            props => props.binGroup.name === propertyGroup
          );
        } else {
          propertyParts.push(property);
        }

        let finalProperty = {};

        if (property.binGroup.parent !== undefined) {
          const parentParent = property.binGroup.parent.parent;

          if (
            parentParent !== undefined &&
            (parentParent.name.includes("field") ||
              parentParent.name === "materialOverrideDefinitions")
          ) {
            const parentParentPropertyParts = [];

            parentParent.members.forEach(parentMember => {
              const parentMembers = emitter.properties.filter(
                props =>
                  props.binGroup.parent !== undefined &&
                  props.binGroup.parent.name === parentMember &&
                  props.binGroup.parent.parent.name === parentParent.name
              );

              if (parentMembers.length) {
                const definitionGroups = [
                  ...new Set(
                    parentMembers.map(par => par.binGroup.parent.definitionName)
                  )
                ];
                const troybinProperties = [];

                definitionGroups.forEach(defGroup => {
                  const propertiesMatchingGroupName = [];

                  parentMembers.forEach(member => {
                    const editedMember = member;

                    if (
                      editedMember.binGroup.parent.definitionName === defGroup
                    ) {
                      alreadyAdded.push(editedMember.binGroup.name);

                      // Has different name for noise
                      if (
                        parentMember === "fieldNoiseDefinitions" &&
                        editedMember.binGroup.name === "frequency"
                      ) {
                        editedMember.binGroup.name = "period";
                      }

                      const binProperty = {
                        name: editedMember.binGroup.name,
                        members: [editedMember],
                        order: editedMember.binGroup.order
                      };

                      propertiesMatchingGroupName.push(binProperty);
                    }
                  });

                  if (
                    parentMember === "fieldNoiseDefinitions" &&
                    propertiesMatchingGroupName.findIndex(
                      binProperty => binProperty.name === "axisFraction"
                    ) === -1
                  ) {
                    const binProperty = {
                      name: "axisFraction",
                      members: [
                        {
                          troybinName: "f-axisfrac",
                          troybinType: "THREE_DOUBLE",
                          binGroup: {
                            name: "axisFraction",
                            members: [],
                            structure: "SimpleProperty",
                            order: 24.5,
                            parent: [
                              {
                                name: "fieldNoiseDefinitions",
                                members: [
                                  "position",
                                  "radius",
                                  "frequency",
                                  "velocityDelta",
                                  "axisFraction"
                                ],
                                structure: "fieldNoiseDefinitions",
                                order: 24.4,
                                parent: {
                                  name: "fieldCollectionDefinition",
                                  members: [
                                    "fieldAccelerationDefinitions",
                                    "fieldAttractionDefinitions",
                                    "fieldDragDefinitions",
                                    "fieldNoiseDefinitions",
                                    "fieldOrbitalDefinitions"
                                  ],
                                  structure: "",
                                  order: 24
                                }
                              }
                            ]
                          },
                          binGroupType: "vec3",
                          binPropertyName: "",
                          binPropertyType: "",
                          value: [1, 1, 1]
                        }
                      ],
                      order: 24.5
                    };

                    propertiesMatchingGroupName.push(binProperty);
                  }

                  troybinProperties.push(propertiesMatchingGroupName);
                });

                troybinProperties.sort(function compareNumbers(a, b) {
                  return a.order - b.order;
                });

                const parentPropertyPart = {
                  name: parentMembers[0].binGroup.parent.name,
                  members: troybinProperties,
                  order: parentMembers[0].binGroup.parent.order
                };

                parentParentPropertyParts.push(parentPropertyPart);
              }
            });

            finalProperty = {
              name: parentParent.name,
              members: parentParentPropertyParts,
              order: parentParent.order
            };
          } else {
            let parent;

            // Is Part of multiple primitives
            if (Array.isArray(property.binGroup.parent)) {
              if (property.binGroup.parent[0].name.includes("primitive")) {
                const primitive = emitter.properties.filter(
                  props => props.troybinName === "p-type"
                );

                const correctPrimitive = property.binGroup.parent.filter(
                  props => props.name === primitive[0].value
                )[0];

                parent = correctPrimitive;
              }
            } else {
              parent = property.binGroup.parent;
            }

            if (parent.members.length > 0) {
              const parentPropertyParts = [];

              parent.members.forEach(parentMember => {
                const members = emitter.properties.filter(
                  props => props.binGroup.name === parentMember
                );

                if (members.length) {
                  members.forEach(member => {
                    alreadyAdded.push(member.binGroup.name);
                  });

                  const parentPropertyPart = {
                    name: members[0].binGroup.name,
                    members,
                    order: members[0].binGroup.order
                  };

                  parentPropertyParts.push(parentPropertyPart);
                }
              });

              parentPropertyParts.sort(function compareNumbers(a, b) {
                return a.order - b.order;
              });

              finalProperty = {
                name: parent.name,
                members: parentPropertyParts,
                order: parent.order
              };
            } else {
              finalProperty = {
                name: parent.name,
                members: propertyParts,
                order: parent.order
              };
            }
          }

          binEmitters.push(finalProperty);
        } else {
          finalProperty = {
            name: propertyGroup,
            members: propertyParts,
            order: property.binGroup.order
          };

          binEmitters.push(finalProperty);

          alreadyAdded.push(propertyGroup);
        }
      }
    });

    binEmitters.sort(function compareNumbers(a, b) {
      return a.order - b.order;
    });

    if (emitter.isSimple) {
      bin.emitters.simple.push(binEmitters);
    } else {
      bin.emitters.complex.push(binEmitters);
    }
  });

  const binSystemProperties = [
    {
      name: "particleName",
      members: [
        {
          troybinName: "",
          troybinType: "STRING_NO_PATH",
          binGroup: {
            name: "particleName",
            members: [],
            structure: "SimpleProperty",
            order: 302
          },
          binGroupType: "string",
          binPropertyName: "",
          binPropertyType: "",
          value: `\"${binName}\"` // eslint-disable-line
        }
      ]
    },
    {
      name: "particlePath",
      members: [
        {
          troybinName: "",
          troybinType: "STRING_PATH",
          binGroup: {
            name: "particlePath",
            members: [],
            structure: "SimpleProperty",
            order: 303
          },
          binGroupType: "string",
          binPropertyName: "",
          binPropertyType: "",
          value: `\"${defaultFilePath}/${binName}\"` // eslint-disable-line
        }
      ]
    }
  ];

  const flagsBitValue = [1, 0, 0, 0, 0, 1, 0, 0];

  troybin.system.forEach(property => {
    if (property.binGroup) {
      if (property.binGroup.name === "flags") {
        flagsBitValue[property.binPropertyName] = property.value;
      } else {
        const finalProperty = {
          name: property.binGroup.name,
          members: [property]
        };

        binSystemProperties.push(finalProperty);
      }
    }
  });

  const flagsFinalValue = parseInt(flagsBitValue.join(""), 2);
  const flags = {
    name: "flags",
    members: [
      {
        troybinName: "",
        troybinType: "ONE_DOUBLE",
        binGroup: {
          name: "flags",
          members: [],
          structure: "SimpleProperty",
          order: 307
        },
        binGroupType: "u16",
        binPropertyName: "",
        binPropertyType: "",
        defaultValue: 196,
        value: flagsFinalValue
      }
    ]
  };

  binSystemProperties.push(flags);

  binSystemProperties.sort(function compareNumbers(a, b) {
    return a.members[0].binGroup.order - b.members[0].binGroup.order;
  });

  bin.system = binSystemProperties;

  return bin;
};

export default CreateBin;

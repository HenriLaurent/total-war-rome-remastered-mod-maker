import { UnitAttributes } from "../../types";
import AttributeCheckbox from "../02_molecules/AttributeCheckbox";

export type Attribute = {
  id: UnitAttributes;
  name: string;
  description: string;
};

const attributesList: Attribute[] = [
  {
    id: "sea_faring",
    name: "Sea faring",
    description: "The unit can board ships",
  },
  {
    id: "hide_forest",
    name: "Hide in forest",
    description: "The unit can hide in forest",
  },
  {
    id: "hide_improved_forest",
    name: "Hide improved in forest",
    description: "The unit can hide better in forest",
  },
  {
    id: "hide_long_grass",
    name: "Hide in long grass",
    description: "The unit can hide in long grass",
  },
  {
    id: "hide_anywhere",
    name: "Hide anywhere",
    description: "The unit can hide anywhere",
  },
  {
    id: "can_sap",
    name: "Can sap",
    description: "The unit can dig tunnels under walls",
  },
  {
    id: "frighten_foot",
    name: "Frighten foot",
    description: "Cause fear to certain nearby foot unit",
  },
  {
    id: "frighten_mounted",
    name: "Frighten mounted",
    description: "Cause fear to certain nearby mounted unit",
  },
  {
    id: "can_run_amok",
    name: "Can run amok",
    description:
      "Unit may go out of control when riders lose control of animals",
  },
  {
    id: "mercenary_unit",
    name: "Mercenary unit",
    description: "The unit is s mercenary unit available to all factions",
  },
  {
    id: "general_unit",
    name: "General unit",
    description: "The unit can be used for a named character's bodyguard",
  },
  {
    id: "cantabrian_circle",
    name: "Cantabrian circle",
    description: "The unit has this special ability",
  },
  {
    id: "no_custom",
    name: "No custom",
    description: "The unit may not be selected in custom battles",
  },
  {
    id: "command",
    name: "Command",
    description:
      "The unit carries a legionary eagle, and gives bonuses to nearby units",
  },
];

export type AttributeListProps = {
  selectedAttributes: UnitAttributes[];
  handleCheckAttribute: (attribute: UnitAttributes) => void;
};

export default function AttributeList({
  selectedAttributes,
  handleCheckAttribute,
}: AttributeListProps) {
  return (
    <ul className="grid grid-cols-2 gap-4">
      {attributesList.map((attribute) => (
        <AttributeCheckbox
          label={attribute.name}
          description={attribute.description}
          key={attribute.id}
          isChecked={
            selectedAttributes.filter((a) => a === attribute.id).length > 0
          }
          onChange={() => handleCheckAttribute(attribute.id)}
        />
      ))}
    </ul>
  );
}

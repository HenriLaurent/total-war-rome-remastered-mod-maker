import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import Checkbox from "./Checkbox";

export type FilterUnitsByFactionProps = {
  factions: {
    isSelected: boolean;
    name: string;
  }[];
  handleChange: (faction: string) => void;
};

export default function FilterUnitsByFaction({
  factions,
  handleChange,
}: FilterUnitsByFactionProps) {
  return (
    <Menu>
      <MenuButton className="bg-gray-100 p-2 rounded-lg">Factions</MenuButton>
      <MenuItems anchor="bottom end" className="bg-white p-2 shadow-lg h-48">
        {factions.map((faction) => (
          <MenuItem>
            <div className="">
              <Checkbox
                label={faction.name}
                checked={faction.isSelected}
                handleChange={() => handleChange(faction.name)}
              />
            </div>
          </MenuItem>
        ))}
      </MenuItems>
    </Menu>
  );
}

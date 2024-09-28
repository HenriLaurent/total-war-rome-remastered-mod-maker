import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import Checkbox from "./Checkbox";
import { Category } from "../../types";

export type FilterUnitsByCategoryProps = {
  categories: {
    isSelected: boolean;
    name: Category;
  }[];
  handleChange: (category: string) => void;
};

export default function FilterUnitsByCategory({
  categories,
  handleChange,
}: FilterUnitsByCategoryProps) {
  return (
    <Menu>
      <MenuButton className="bg-gray-100 p-2 rounded-lg">Categories</MenuButton>
      <MenuItems anchor="bottom end" className="bg-white p-2 shadow-lg h-48">
        {categories.map((category) => (
          <MenuItem>
            <div className="">
              <Checkbox
                label={category.name}
                checked={category.isSelected}
                handleChange={() => handleChange(category.name)}
              />
            </div>
          </MenuItem>
        ))}
      </MenuItems>
    </Menu>
  );
}

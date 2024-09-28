import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { useState } from "react";
import { WeaponType } from "../../types";

const weaponsType: { id: WeaponType; name: string }[] = [
  { id: "melee", name: "Melee" },
  { id: "missile", name: "Missile" },
  { id: "no", name: "None" },
  { id: "siege_missile", name: "Siege missile" },
  { id: "thrown", name: "Thrown" },
];

export type SelectWeaponTypeType = {
  defaultValue: WeaponType;
  onChange: (newWeaponType: WeaponType) => void;
};

export default function SelectWeapontype({
  defaultValue,
  onChange,
}: SelectWeaponTypeType) {
  const [selectedWeaponType, setSelectedWeaponType] = useState(
    weaponsType.find((w) => w.id === defaultValue) || weaponsType[0]
  );

  return (
    <Listbox value={selectedWeaponType} onChange={setSelectedWeaponType}>
      <ListboxButton
        className="relative min-w-48 bg-contain bg-no-repeat bg-center w-fit p-4 font-crimsontext font-semibold pt-5 text-left"
        style={{ backgroundImage: `url("/assets/ui/select.png")` }}
      >
        {selectedWeaponType.name}
        <div className="absolute w-8 top-0 right-2 h-full flex items-center justify-center">
          <img className="w-2 -rotate-90" src="/assets/ui/arrow_left.png" />
        </div>
      </ListboxButton>
      <ListboxOptions
        anchor="bottom"
        className="bg-cover bg-center bg-no-repeat w-44 -mt-4 -mb-4"
        style={{ backgroundImage: `url("/assets/ui/background_marble.png")` }}
      >
        {weaponsType.map((weaponType) => (
          <ListboxOption
            key={weaponType.id}
            value={weaponType}
            className="data-[focus]:bg-black/30 p-2 font-crimsontext cursor-pointer"
            onClick={() => onChange(weaponType.id)}
          >
            {weaponType.name}
          </ListboxOption>
        ))}
      </ListboxOptions>
    </Listbox>
  );
}

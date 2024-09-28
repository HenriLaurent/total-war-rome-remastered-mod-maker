import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { useState } from "react";
import { DamageType } from "../../types";

const damagesType: { id: DamageType; name: string }[] = [
  { id: "no", name: "None" },
  { id: "blunt", name: "Blunt" },
  { id: "piercing", name: "Piercing" },
];

export type SelectDamageTypeType = {
  defaultValue: DamageType;
  onChange: (newDamageType: DamageType) => void;
};

export default function SelectDamageType({
  defaultValue,
  onChange,
}: SelectDamageTypeType) {
  const [selectedDamageType, setSelectedDamageType] = useState(
    damagesType.find((d) => d.id === defaultValue) || damagesType[0]
  );

  return (
    <Listbox value={selectedDamageType} onChange={setSelectedDamageType}>
      <ListboxButton
        className="relative min-w-48 bg-contain bg-no-repeat bg-center w-fit p-4 font-crimsontext font-semibold pt-5 text-left"
        style={{ backgroundImage: `url("/assets/ui/select.png")` }}
      >
        {selectedDamageType.name}
        <div className="absolute w-8 top-0 right-2 h-full flex items-center justify-center">
          <img className="w-2 -rotate-90" src="/assets/ui/arrow_left.png" />
        </div>
      </ListboxButton>
      <ListboxOptions
        anchor="bottom"
        className="bg-cover bg-center bg-no-repeat w-44 -mt-4 -mb-4"
        style={{ backgroundImage: `url("/assets/ui/background_marble.png")` }}
      >
        {damagesType.map((damageType) => (
          <ListboxOption
            key={damageType.id}
            value={damageType}
            className="data-[focus]:bg-black/30 p-2 font-crimsontext cursor-pointer"
            onClick={() => onChange(damageType.id)}
          >
            {damageType.name}
          </ListboxOption>
        ))}
      </ListboxOptions>
    </Listbox>
  );
}

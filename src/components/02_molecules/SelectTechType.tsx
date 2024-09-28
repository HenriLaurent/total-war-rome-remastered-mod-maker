import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { useState } from "react";
import { TechType } from "../../types";

const techsType: { id: TechType; name: string }[] = [
  { id: "no", name: "None" },
  { id: "simple", name: "Simple" },
  { id: "archery", name: "Archery" },
  { id: "blade", name: "Blade" },
  { id: "other", name: "Other" },
];

export type SelectTechTypeType = {
  defaultValue: TechType;
  onChange: (newTechType: TechType) => void;
};

export default function SelectTechtype({
  defaultValue,
  onChange,
}: SelectTechTypeType) {
  const [selectedTechType, setSelectedTechType] = useState(
    techsType.find((t) => t.id === defaultValue) || techsType[0]
  );

  return (
    <Listbox value={selectedTechType} onChange={setSelectedTechType}>
      <ListboxButton
        className="relative min-w-48 bg-contain bg-no-repeat bg-center w-fit p-4 font-crimsontext font-semibold pt-5 text-left"
        style={{ backgroundImage: `url("/assets/ui/select.png")` }}
      >
        {selectedTechType.name}
        <div className="absolute w-8 top-0 right-2 h-full flex items-center justify-center">
          <img className="w-2 -rotate-90" src="/assets/ui/arrow_left.png" />
        </div>
      </ListboxButton>
      <ListboxOptions
        anchor="bottom"
        className="bg-cover bg-center bg-no-repeat w-44 -mt-4 -mb-4"
        style={{ backgroundImage: `url("/assets/ui/background_marble.png")` }}
      >
        {techsType.map((techType) => (
          <ListboxOption
            key={techType.id}
            value={techType}
            className="data-[focus]:bg-black/30 p-2 font-crimsontext cursor-pointer"
            onClick={() => onChange(techType.id)}
          >
            {techType.name}
          </ListboxOption>
        ))}
      </ListboxOptions>
    </Listbox>
  );
}

import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { useState } from "react";
import { MissileType } from "../../types";

const missileTypes: { id: MissileType; name: string }[] = [
  { id: "arrow", name: "Arrow" },
  { id: "ballista", name: "Ballista" },
  { id: "boulder", name: "Boulder" },
  { id: "head", name: "Head" },
  { id: "javelin", name: "Javelin" },
  { id: "no", name: "None" },
  { id: "pilum", name: "Pilum" },
  { id: "stone", name: "Stone" },
];

export type SelectMissileTypeType = {
  defaultValue: MissileType;
  onChange: (newMissileType: MissileType) => void;
};

export default function SelectMissiletype({
  defaultValue,
  onChange,
}: SelectMissileTypeType) {
  const [selectedMissileType, setSelectedMissileType] = useState(
    missileTypes.find((m) => m.id === defaultValue) || missileTypes[0]
  );

  return (
    <Listbox value={selectedMissileType} onChange={setSelectedMissileType}>
      <ListboxButton
        className="relative min-w-48 bg-contain bg-no-repeat bg-center w-fit p-4 font-crimsontext font-semibold pt-5 text-left"
        style={{ backgroundImage: `url("/assets/ui/select.png")` }}
      >
        {selectedMissileType.name}
        <div className="absolute w-8 top-0 right-2 h-full flex items-center justify-center">
          <img className="w-2 -rotate-90" src="/assets/ui/arrow_left.png" />
        </div>
      </ListboxButton>
      <ListboxOptions
        anchor="bottom"
        className="bg-cover bg-center bg-no-repeat w-44 -mt-4 -mb-4"
        style={{ backgroundImage: `url("/ui/assets/background_marble.png")` }}
      >
        {missileTypes.map((missileType) => (
          <ListboxOption
            key={missileType.id}
            value={missileType}
            className="data-[focus]:bg-black/30 p-2 font-crimsontext cursor-pointer"
            onClick={() => onChange(missileType.id)}
          >
            {missileType.name}
          </ListboxOption>
        ))}
      </ListboxOptions>
    </Listbox>
  );
}

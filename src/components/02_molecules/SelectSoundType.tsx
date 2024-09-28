import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { useState } from "react";
import { SoundType } from "../../types";

const soundsType: { id: SoundType; name: string }[] = [
  { id: "axe", name: "Axe" },
  { id: "knife", name: "Knife" },
  { id: "mace", name: "Mace" },
  { id: "none", name: "None" },
  { id: "spear", name: "Spear" },
  { id: "sword", name: "Sword" },
];

export type SelectSoundTypeType = {
  defaultValue: SoundType;
  onChange: (newSoundType: SoundType) => void;
};

export default function SelectSoundType({
  defaultValue,
  onChange,
}: SelectSoundTypeType) {
  const [selectedSoundType, setSelectedSoundType] = useState(
    soundsType.find((s) => s.id === defaultValue) || soundsType[0]
  );

  return (
    <Listbox value={selectedSoundType} onChange={setSelectedSoundType}>
      <ListboxButton
        className="relative min-w-48 bg-contain bg-no-repeat bg-center w-fit p-4 font-crimsontext font-semibold pt-5 text-left"
        style={{ backgroundImage: `url("/assets/ui/select.png")` }}
      >
        {selectedSoundType.name}
        <div className="absolute w-8 top-0 right-2 h-full flex items-center justify-center">
          <img className="w-2 -rotate-90" src="/assets/ui/arrow_left.png" />
        </div>
      </ListboxButton>
      <ListboxOptions
        anchor="bottom"
        className="bg-cover bg-center bg-no-repeat w-44 -mt-4 -mb-4"
        style={{ backgroundImage: `url("/assets/ui/background_marble.png")` }}
      >
        {soundsType.map((soundType) => (
          <ListboxOption
            key={soundType.id}
            value={soundType}
            className="data-[focus]:bg-black/30 p-2 font-crimsontext cursor-pointer"
            onClick={() => onChange(soundType.id)}
          >
            {soundType.name}
          </ListboxOption>
        ))}
      </ListboxOptions>
    </Listbox>
  );
}

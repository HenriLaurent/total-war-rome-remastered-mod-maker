import { Input } from "@headlessui/react";

export type TextfieldProps = {
  value: string;
  onChange: (value: string) => void;
};

export default function Textfield({ value, onChange }: TextfieldProps) {
  return (
    <Input
      className="p-2 bg-transparent border-2 rounded-lg border-solid border-yellow-700 outline-yellow-900 flex-1"
      value={value}
      onChange={(evt) => onChange(evt.target.value)}
    />
  );
}

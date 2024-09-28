import { Textarea as HeadlessTextarea } from "@headlessui/react";

export type TextareaProps = {
  value: string;
  onChange: (value: string) => void;
  maxRows?: number;
};

export default function Textarea({ value, onChange, maxRows }: TextareaProps) {
  return (
    <HeadlessTextarea
      className="p-2 bg-transparent border-2 rounded-lg border-solid border-yellow-700 outline-yellow-900 flex-1"
      value={value}
      rows={maxRows || 4}
      onChange={(evt) => onChange(evt.target.value)}
    />
  );
}

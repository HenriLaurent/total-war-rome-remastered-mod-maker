import { Checkbox as HeadlessCheckbox, Field, Label } from "@headlessui/react";

export type CheckboxProps = {
  label: string;
  checked: boolean;
  handleChange: (checked: boolean) => void;
};

export default function Checkbox({
  label,
  checked,
  handleChange,
}: CheckboxProps) {
  return (
    <Field className="flex items-center gap-2">
      <HeadlessCheckbox
        checked={checked}
        onChange={handleChange}
        className="group block size-4 rounded border bg-white data-[checked]:bg-blue-500"
      >
        <svg
          className="stroke-white opacity-0 group-data-[checked]:opacity-100"
          viewBox="0 0 14 14"
          fill="none"
        >
          <path
            d="M3 8L6 11L11 3.5"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </HeadlessCheckbox>
      <Label>{label}</Label>
    </Field>
  );
}

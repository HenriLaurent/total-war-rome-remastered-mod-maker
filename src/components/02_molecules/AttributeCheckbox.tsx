import { Description, Field, Checkbox, Label } from "@headlessui/react";
import { Fragment, useState } from "react";

export type AttributeCheckboxProps = {
  label: string;
  description: string;
  isChecked: boolean;
  onChange: (isChecked: boolean) => void;
};

export default function AttributeCheckbox({
  label,
  description,
  isChecked,
  onChange,
}: AttributeCheckboxProps) {
  const [enabled, setEnabled] = useState(isChecked);

  return (
    <Field className="flex items-start gap-2">
      <Checkbox
        checked={enabled}
        onChange={(value) => {
          setEnabled(value);
          onChange(value);
        }}
        as={Fragment}
      >
        {({ checked }) => (
          <img
            src={
              checked
                ? "/assets/ui/checkbox_checked.png"
                : "/assets/ui/checkbox_unchecked.png"
            }
            className="w-6 h-6"
          />
        )}
      </Checkbox>
      <div className="-space-y-2">
        <Label className="font-crimsontext text-lg font-semibold">
          {label}
        </Label>

        <Description className="text-sm">{description}</Description>
      </div>
    </Field>
  );
}

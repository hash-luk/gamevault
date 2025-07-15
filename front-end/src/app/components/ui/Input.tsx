import { LucideIcon } from "lucide-react";
import { clsx } from "clsx";

interface inputProps {
  inputType?: string;
  inputName: string;
  inputID: string;
  inputPlaceholder: string;
  label?: string;
  icon?: LucideIcon;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function InputField({
  inputType = "text",
  inputName,
  inputID,
  inputPlaceholder,
  label,
  icon: Icon,
  onChange,
}: inputProps) {
  return (
    <div className="flex flex-col items-start flex-start gap-2">
      {label && (
        <label htmlFor={inputID} className="text-sm font-medium">
          {label}
        </label>
      )}
      <div className="relative w-full">
        <input
          type={inputType}
          name={inputName}
          id={inputID}
          placeholder={inputPlaceholder}
          className={clsx(
            "w-full pr-3 h-10 rounded border border-gray-300 text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
            Icon ? "pl-9" : "pl-3"
          )}
          onChange={onChange}
        />
        {Icon && (
          <Icon
            size={20}
            className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
          />
        )}
      </div>
    </div>
  );
}

import { Loader2 } from "lucide-react";

interface buttonProps {
  buttonText: string;
  buttonType: "button" | "submit" | "reset";
  isLoading?: boolean;
  isDisabled?: boolean;
}

export default function Button({
  buttonText,
  buttonType,
  isLoading = false,
  isDisabled = false,
}: buttonProps) {
  return (
    <button
      className="cursor-pointer flex justify-center bg-blue-500 p-3 text-white rounded-sm hover:opacity-90 transition-all disabled:cursor-not-allowed disabled:opacity-65 disabled:bg-gray-400"
      type={buttonType}
      disabled={isDisabled}
    >
      {isLoading ? (
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      ) : (
        buttonText
      )}
    </button>
  );
}

import { Loader2 } from "lucide-react";

interface buttonProps {
  buttonText: string;
  buttonType: "button" | "submit" | "reset";
  isLoading?: boolean;
}

export default function Button({
  buttonText,
  buttonType,
  isLoading = false,
}: buttonProps) {
  return (
    <button
      className="cursor-pointer flex justify-center bg-blue-500 p-3 text-white rounded-sm hover:opacity-90 transition-all"
      type={buttonType}
    >
      {isLoading ? (
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      ) : (
        buttonText
      )}
    </button>
  );
}

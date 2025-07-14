interface buttonProps {
  buttonText: string;
  buttonType: "button" | "submit" | "reset";
}

export default function Button({ buttonText, buttonType }: buttonProps) {
  return (
    <button
      className="cursor-pointer bg-blue-500 p-3 text-white rounded-sm hover:opacity-90 transition-all"
      type={buttonType}
    >
      {buttonText}
    </button>
  );
}

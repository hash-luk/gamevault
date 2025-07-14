import { LockKeyhole, Mail } from "lucide-react";
import Link from "next/link";
import InputField from "../ui/Input";
import Button from "../ui/Button";

interface RegisterFormProps {
  onToggleMode: () => void;
}

export default function LoginForm({ onToggleMode }: RegisterFormProps) {
  return (
    <>
      <form className="flex flex-col justify-center gap-4">
        <InputField
          inputName="email"
          inputID="email"
          inputPlaceholder="Email adress"
          icon={Mail}
          label="Email"
        />
        <InputField
          inputType="password"
          inputName="password"
          inputID="password"
          inputPlaceholder="Password"
          label="Password"
          icon={LockKeyhole}
        />
        <Button buttonType="submit" buttonText="Sign in" />
      </form>
      <div className="flex justify-between border-t-gray-300 border-t-1 pt-5">
        <button
          onClick={onToggleMode}
          type="button"
          className="text-gray-500 hover:opacity-80 hover:cursor-pointer"
        >
          <span>Don't have an account?</span>
        </button>
        <Link href="#" className="text-blue-600 hover:underline">
          <span>Forgot password?</span>
        </Link>
      </div>
    </>
  );
}

import { LockKeyhole, Mail, User } from "lucide-react";
import InputField from "../ui/Input";
import Button from "../ui/Button";

interface RegisterFormProps {
  onToggleMode: () => void;
}

export default function RegisterForm({ onToggleMode }: RegisterFormProps) {
  return (
    <>
      <form className="flex flex-col justify-center gap-4">
        <InputField
          inputID="name"
          inputName="name"
          inputPlaceholder="Enter your username"
          label="Username"
          icon={User}
        />
        <InputField
          inputID="email"
          inputName="email"
          inputPlaceholder="Enter your email"
          label="Email"
          icon={Mail}
        />
        <InputField
          inputID="password"
          inputName="password"
          inputPlaceholder="Create a Password"
          inputType="password"
          label="Password"
          icon={LockKeyhole}
        />
        <Button buttonType="submit" buttonText="Sign up" />
      </form>
      <div className="flex justify-center border-t-gray-300 border-t-1 pt-5">
        <div className="flex">
          <span className="text-gray-500 font-medium">
            Already have an account?{" "}
            <button
              onClick={onToggleMode}
              type="button"
              className="text-black hover:cursor-pointer hover:underline"
            >
              Sign In
            </button>
          </span>
        </div>
      </div>
    </>
  );
}

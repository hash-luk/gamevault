import { Mail, LockKeyhole } from "lucide-react";
import Link from "next/link";

export default function Login() {
  return (
    <div className="flex items-center justify-center h-[100vh]">
      <div className="w-full max-w-sm p-8 rounded-md flex flex-col gap-10 border-1 border-gray-100 shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
        <div className="flex flex-col w-full items-center justify-center gap-4">
          <h1 className="text-4xl font-bold">Login</h1>
          <span className="text-gray-500">Welcome back!</span>
        </div>
        <form className="flex flex-col justify-center gap-4">
          <div className="flex flex-col items-start flex-start gap-2">
            <label className="text-sm">Email</label>
            <div className="relative w-full">
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Email adress"
                className="w-full pl-9 pr-3 h-10 rounded border border-gray-300 text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <Mail
                size={20}
                className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
              />
            </div>
          </div>
          <div className="flex flex-col items-start flex-start gap-2">
            <label className="text-sm">Password</label>
            <div className="relative w-full">
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className="w-full pl-9 pr-3 h-10 rounded border border-gray-300 text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <LockKeyhole
                size={20}
                className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
              />
            </div>
          </div>
          <button
            className="cursor-pointer bg-blue-500 p-3 text-white rounded-sm hover:opacity-90 transition-all"
            type="submit"
          >
            Sign in
          </button>
        </form>
        <div className="flex justify-between border-t-gray-300 border-t-1 pt-5">
          <Link href="#" className="text-gray-500 hover:opacity-80">
            <span>Don't have an account?</span>
          </Link>
          <Link href="#" className="text-blue-600 hover:underline">
            <span>Forgot password?</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

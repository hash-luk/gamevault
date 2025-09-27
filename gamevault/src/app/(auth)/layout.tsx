import { ReactNode } from "react";
import Header from "../components/structure/Header";

export default function AuthenticatedLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Header />
      {children}
    </div>
  );
}

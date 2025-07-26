import { ReactNode } from "react";
import Header from "../components/ui/Header";

export default function AuthenticatedLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}

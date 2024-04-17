import { ReactNode } from "react";
import { Footer } from "@/widgets/footer";
import { Header } from "@/widgets/header";

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <main id="main">{children}</main>
      <Footer />
    </>
  );
};

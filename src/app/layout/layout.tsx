import { ReactNode, useRef } from "react";
import { Footer } from "@/widgets/footer";
import { Header } from "@/widgets/header";
import { TrackingCursor } from "@/features/trackingCursor";

export const Layout = ({ children }: { children: ReactNode }) => {
  const layoutRef = useRef<HTMLDivElement>(null);

  return (
    <div id="layout" ref={layoutRef}>
      <TrackingCursor layoutRef={layoutRef} />
      <Header />
      <main id="main" className="bg-black h-dvh">
        {children}
      </main>
      <Footer />
    </div>
  );
};

import { ReactNode, ReactElement } from "react";
import NavbarComponent from "../NavbarComponent.tsx/NavbarComponent";
import FooterComponent from "../FooterComponent/FooterComponent";

type Props = {
  children: ReactNode;
};

export default function LayoutComponent({ children }: Props) {
  return (
    <>
      <NavbarComponent />
      <div className="py-5 min-h-screen min-w-full mx-auto landing-page-image">
        {children}
      </div>
      <FooterComponent />
    </>
  );
}

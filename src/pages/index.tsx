import Image from "next/image";
import { Inter } from "next/font/google";
import NavbarComponent from "@/components/NavbarComponent.tsx/NavbarComponent";
import TableComponent from "@/components/TableComponent/TableComponent";
import FooterComponent from "@/components/FooterComponent/FooterComponent";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <NavbarComponent />
      <div>
        <TableComponent />
      </div>
      <FooterComponent />
    </>
  );
}

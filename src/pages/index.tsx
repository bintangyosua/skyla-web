import Image from "next/image";
import { Inter } from "next/font/google";
import TableComponent from "@/components/TableComponent/TableComponent";
import LayoutComponent from "@/components/LayoutComponent/LayoutComponent";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <LayoutComponent>
        <TableComponent />
      </LayoutComponent>
    </>
  );
}

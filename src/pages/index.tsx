import Image from "next/image";
import { Inter } from "next/font/google";
import TableComponent from "@/components/TableComponent/TableComponent";
import LayoutComponent from "@/components/LayoutComponent/LayoutComponent";
import HomepageHeroComponent from "@/components/HomepageHeroComponent/HomepageHeroComponent";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <LayoutComponent>
        <HomepageHeroComponent />
        {/* <div className="container mx-auto home-banner min-w-fit w-[1136px] h-48 bg-no-repeat bg-center bg-cover"></div> */}
        <TableComponent />
      </LayoutComponent>
    </>
  );
}

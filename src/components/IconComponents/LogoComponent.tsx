import Image from "next/image";

export default function LogoComponent() {
  return (
    // <svg
    //   xmlns="http://www.w3.org/2000/svg"
    //   fill="none"
    //   stroke="currentColor"
    //   strokeLinecap="round"
    //   strokeLinejoin="round"
    //   strokeWidth="2"
    //   className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
    //   viewBox="0 0 24 24">
    //   <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
    // </svg>
    <Image src="/logo.svg" alt="" width={75} height={75} />
  );
}

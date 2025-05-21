import LogoComponent from "../IconComponents/LogoComponent";
import Link from "next/link";
import { config } from "@/utils/config";

export default function NavbarComponent() {
  return (
    <header className="text-gray-300 body-font">
      <div
        className={`container mx-auto flex flex-wrap py-5 flex-col md:flex-row items-center lg:w-[1136px]`}
      >
        <Link
          className="flex items-center mb-4 font-medium text-white title-font md:mb-0"
          href="/"
        >
          <LogoComponent />
          <span className="ml-3 text-xl">Josephine</span>
        </Link>
        <nav className="flex flex-wrap items-center justify-center text-base md:ml-auto md:mr-auto">
          <Link
            href={config.inviteBot}
            className="mr-5 font-semibold hover:text-white"
          >
            Invite Bot
          </Link>
          <Link
            href={config.joinServer}
            className="mr-5 font-semibold hover:text-white"
          >
            Join Server
          </Link>
        </nav>
      </div>
    </header>
  );
}

// export async function getServerSideProps(email: string, id: string) {
//   const response = await fetch(`/api/discord/users/${id}`, {
//     method: "POST",
//     body: JSON.stringify({
//       discord_id: id,
//     }),
//     headers: {
//       "Content-Type": "application/json",
//       // 'Content-Type': 'application/x-www-form-urlencoded',
//     },
//   });

//   const data = await response.json();

//   return { props: { data } };
// }

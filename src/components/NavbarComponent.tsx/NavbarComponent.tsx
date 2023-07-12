import LogoComponent from "../IconComponents/LogoComponent";
import { signIn, signOut, useSession } from "next-auth/react";
import NextComponent from "../IconComponents/NextComponent";
import Link from "next/link";
import styles from "./Load.module.css";
import { config } from "@/utils/config";

export default function NavbarComponent() {
  const { data: session, status } = useSession();
  console.log({ session, status });

  return (
    <header className="text-gray-300 body-font">
      <div
        className={`container mx-auto flex flex-wrap py-5 flex-col md:flex-row items-center lg:w-[1136px]`}>
        <Link
          className="flex title-font font-medium items-center text-white mb-4 md:mb-0"
          href="/">
          <LogoComponent />
          <span className="ml-3 text-xl">Skyla</span>
        </Link>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <Link
            className="mr-5 font-semibold hover:text-white"
            href="/dashboard">
            Dashboard
          </Link>
          <Link
            href={config.inviteBot}
            className="mr-5 font-semibold hover:text-white">
            Invite Bot
          </Link>
          <Link
            href={config.joinServer}
            className="mr-5 font-semibold hover:text-white">
            Join Server
          </Link>
        </nav>

        {!session && (
          <Link
            href="/api/auth/signin"
            onClick={(e) => {
              e.preventDefault();
              signIn();
            }}>
            <button className="inline-flex items-center font-semibold bg-gray-800 border-0 py-2 px-4 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0 mx-3">
              Login
              <NextComponent />
            </button>
          </Link>
        )}
        {session && (
          <Link
            href="/api/auth/signout"
            onClick={(e) => {
              e.preventDefault();
              signOut();
            }}>
            <button className="inline-flex items-center font-semibold bg-gray-800 border-0 py-2 px-4 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0 mx-3">
              Logout
              <NextComponent />
            </button>
          </Link>
        )}
      </div>
    </header>
  );
}

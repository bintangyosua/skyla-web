import Link from "next/link";
import { config } from "@/utils/config";
import { join } from "path";
import Image from "next/image";

export default function HomepageHeroComponent() {
  return (
    <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center lg:w-[1136px]">
      <div className="flex flex-col items-center mb-16 text-center lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left md:mb-0">
        <h1 className="mb-4 text-5xl font-medium text-gray-300 title-font">
          <span>
            <span className="text-tatsu-blue">LEVEL UP</span> your
          </span>
          <br className="hidden lg:inline-block" />
          <span>
            <span className="text-discord-purple"> Discord </span>community.
          </span>
        </h1>
        <p className="mb-8 leading-relaxed">
          Turn your community into <b>THE</b> place to be! Join more than
          1,400,000 Discord servers that use Tatsu to manage and build a fun and
          inviting community.
        </p>
        <div className="flex justify-center">
          <Link href={config.inviteBot}>
            <button className="inline-flex px-6 py-2 text-lg text-white bg-indigo-500 border-0 rounded focus:outline-none hover:bg-indigo-600">
              Invite Bot
            </button>
          </Link>
          <Link href={config.joinServer}>
            <button className="inline-flex px-6 py-2 ml-4 text-lg text-gray-800 bg-gray-100 border-0 rounded focus:outline-none hover:bg-gray-200">
              Join Server
            </button>
          </Link>
        </div>
      </div>
      <div className="w-5/6 lg:max-w-lg lg:w-72 md:w-1/2">
        <Image
          className="object-cover object-center rounded"
          alt="hero"
          src="/kyubey.png"
          width={600}
          height={600}
        />
      </div>
    </div>
  );
}

import LayoutComponent from "@/components/LayoutComponent/LayoutComponent";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { FaDonate } from "react-icons/fa";
import { AiFillSetting } from "react-icons/ai";
import ProfileCardFormComponent from "@/components/ProfileCardFormComponent/index";

export default function Dashboard() {
  const { data: session, status } = useSession();

  return (
    <LayoutComponent>
      <div className="container lg:w-[1136px] mx-auto px-2 lg:px-0">
        <div className="flex justify-center space-x-5 max-w-xl mx-auto ">
          <Image
            src="https://images-ext-1.discordapp.net/external/vg0_fa1FPei3SOvfmpgwOiGy0dtQzpMTZRwlE7cS-XE/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/454629351607107595/34c82408a49f8900d2393ce504f21b3a.png"
            alt="Discord profile"
            width={128}
            height={128}
            className="rounded-full border-4 border-solid"
          />
          <div>
            <h2 className="text-4xl font-bold">Minuettaro#0</h2>
            <p>
              Consectetur ad nostrud ut in duis cupidatat do. Minim est ad do et
              fugiat eu tempor mollit esse ullamco.
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row lg:items-start items-center justify-between max-w-full mx-auto mt-10">
          <div className="flex lg:flex-col flex-row space-x-4 lg:space-x-0 mb-5 lg:mb-0 lg:w-1/4 mr-5">
            <button className="bg-zinc-800 hover:bg-zinc-700 px-4 py-2 flex flex-row justify-center space-x-4 max-w-full mb-3">
              <span> Support Us!</span>
              <FaDonate className="mt-1" color="yellow" />
            </button>
            <button className="bg-zinc-800 hover:bg-zinc-700 px-4 py-2 flex flex-row justify-center space-x-4 max-w-full mb-3">
              <span>Profile Settings</span>
              <AiFillSetting className="mt-1" color="green" />
            </button>
          </div>
          <div className="lg:w-3/4 lg:mx-0 mx-2">
            <div className="">
              <h3 className="text-2xl font-bold">Edit Profile Card</h3>
              <span>Edit your profile card visually</span>
              <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-400" />
            </div>
            <div className="flex flex-row justify-between">
              <Image
                src="https://media.discordapp.net/attachments/779154738612011059/1128510315458482216/profile-image.png"
                alt=""
                width={700}
                height={100}
                className="rounded-xl mx-auto lg:max-h-[250px] lg:max-w-[700px]"
              />
            </div>
            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-400" />
            <ProfileCardFormComponent />
          </div>
        </div>
      </div>
    </LayoutComponent>
  );
}

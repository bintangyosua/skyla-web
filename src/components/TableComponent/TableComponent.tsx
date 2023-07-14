import axios from "axios";
import { useState, useEffect } from "react";

export async function getServerSideProps() {
  const result = await fetch("/api/discord/commands");
  const data = await result.json();

  data.sort((a: any, b: any) => {
    if (a.category > b.category) return 1;
    if (a.category < b.category) return -1;
    return 0;
  });

  return data;
}

export default function TableComponent() {
  const [commands, setCommands] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getServerSideProps();
      setCommands(data);
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto lg:w-[1136px]">
      <div className="flex flex-col text-center mb-10">
        <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-white">
          Commands
        </h1>
        <p className="lg:w-6/8 mx-auto leading-relaxed text-base">
          This list will help you to understand Skyla&apos;s Commands
        </p>
      </div>
      <div className="lg:w-6/8 w-full mx-auto overflow-auto">
        <table className="table-auto w-full text-left whitespace-no-wrap">
          <thead>
            <tr className="">
              <th className="px-4 py-3 title-font tracking-wider font-medium text-white text-sm bg-gray-800 rounded-tl rounded-bl">
                Name
              </th>
              <th className="px-4 py-3 title-font tracking-wider font-medium text-white text-sm bg-gray-800">
                Description
              </th>
              <th className="px-4 py-3 title-font tracking-wider font-medium text-white text-sm bg-gray-800">
                Category
              </th>
              <th className="px-4 py-3 title-font tracking-wider font-medium text-white text-sm bg-gray-800">
                NSFW
              </th>
            </tr>
          </thead>
          <tbody>
            {commands.map(
              (command) =>
                command && (
                  <tr key={command.id}>
                    <td className="px-4 py-3">{command.id}</td>
                    <td className="px-4 py-3">{command.description}</td>
                    <td className="px-4 py-3">{command.category}</td>
                    <td className="px-4 py-3">{command.nsfw ? "✅" : "⛔"}</td>
                  </tr>
                )
            )}
          </tbody>
        </table>
      </div>
      <div className="flex pl-4 mt-4 lg:w-6/8 w-full">
        <a className="text-indigo-400 inline-flex items-center md:mb-2 lg:mb-0">
          Learn More
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-4 h-4 ml-2"
            viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
        {/* <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
            Button
          </button> */}
      </div>
    </div>
  );
}

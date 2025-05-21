import { useState, useEffect } from "react";

export async function getServerSideProps() {
  const result = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/commands`);
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
      <div className="flex flex-col mb-10 text-center">
        <h1 className="mb-2 text-3xl font-medium text-white sm:text-4xl title-font">
          Commands
        </h1>
        <p className="mx-auto text-base leading-relaxed lg:w-6/8">
          This list will help you to understand Josephine&apos;s Commands
        </p>
      </div>
      <div className="w-full mx-auto mb-10 overflow-auto lg:w-6/8">
        <table className="w-full text-left whitespace-no-wrap table-auto">
          <thead>
            <tr className="">
              <th className="px-4 py-3 text-sm font-medium tracking-wider text-white bg-gray-800 rounded-tl rounded-bl title-font">
                Name
              </th>
              <th className="px-4 py-3 text-sm font-medium tracking-wider text-white bg-gray-800 title-font">
                Description
              </th>
              <th className="px-4 py-3 text-sm font-medium tracking-wider text-white bg-gray-800 title-font">
                Category
              </th>
            </tr>
          </thead>
          <tbody>
            {commands.map(
              (command) =>
                command && (
                  <tr key={command.id}>
                    <td className="px-4 py-3">{`/${command.name}`}</td>
                    <td className="px-4 py-3">{command.description}</td>
                    <td className="px-4 py-3">{command.category}</td>
                  </tr>
                )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

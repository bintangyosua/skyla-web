export default function ProfileCardFormComponent() {
  return (
    <div className="container px-5 mx-auto flex">
      <div className="rounded-lg flex flex-col md:ml-auto w-full mt-4 md:mt-0 relative z-10">
        <div className="flex flex-row justify-between space-x-6">
          <div className="flex flex-col w-1/2">
            <div className="relative mb-4">
              <label
                htmlFor="name"
                className="leading-7 text-md text-gray-400 font=semibold block mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-zinc-800 rounded border border-zinc-600 focus:border-zinc-500 focus:ring-2 focus:ring-zinc-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="job"
                className="leading-7 text-md text-gray-400 font=semibold block mb-2">
                Job
              </label>
              <input
                type="text"
                id="job"
                name="job"
                className="w-full bg-zinc-800 rounded border border-zinc-600 focus:border-zinc-500 focus:ring-2 focus:ring-zinc-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
          <div className="relative mb-0 w-1/2 h-full">
            <label
              htmlFor="description"
              className="leading-7 text-md text-gray-400 block mb-2">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              className="w-full bg-zinc-800 rounded border border-zinc-600 focus:border-zinc-500 focus:ring-2 focus:ring-zinc-900 h-[136.3px] text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out overflow-hidden"></textarea>
          </div>
        </div>
        <button className="text-white bg-zinc-800 border-0 py-2 px-6 focus:outline-none hover:bg-zinc-700 rounded text-lg">
          Button
        </button>
        <p className="text-xs text-gray-400 text-opacity-90 mt-3">
          Chicharrones blog helvetica normcore iceland tousled brook viral
          artisan.
        </p>
      </div>
    </div>
  );
}

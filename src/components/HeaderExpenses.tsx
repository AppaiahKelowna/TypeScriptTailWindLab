export default function Expenses() {
  return (
    <section className="flex justify-center gap-2">
      <div className="bg-gray-800 w-[20%] rounded-md p-4 flex flex-col gap-2">
        <section className="flex justify-between">
          <label className="text-gray-500 text-sm">Input</label>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6 text-green-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </section>
        <label className="text-white text-2xl font-bold">$ 1,000</label>
      </div>
      <div className="bg-gray-800 w-[20%] rounded-md flex flex-col gap-2 p-4">
        <section className="flex justify-between items-center">
          <label className="text-gray-500 text-sm">Output</label>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6 text-red-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </section>
        <label className="text-white text-2xl font-bold">$ 1,000</label>
      </div>
      <div className="bg-green-900 w-[20%] rounded-md flex flex-col gap-2 p-4">
        <section className="flex justify-between items-center">
          <label className="text-gray-500 text-sm">Total</label>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </section>
        <label className="text-white text-2xl font-bold">$ 1,000</label>
      </div>
    </section>
  );
}

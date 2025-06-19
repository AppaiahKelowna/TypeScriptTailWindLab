export default function FooterSection() {
  return (
    <section className="h-[10vh] w-full bg-gray-900 flex justify-center items-center gap-2">
      <button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-7 h-7 fill-gray-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5 8.25 12l7.5-7.5"
          />
        </svg>
      </button>

      <label className="h-6 w-6 bg-green-700 text-white flex justify-center items-center rounded-sm">
        1
      </label>
      <label className="h-6 w-6 bg-gray-800 text-white flex justify-center items-center rounded-sm">
        2
      </label>
      <label className="h-6 w-6 bg-gray-800 text-white flex justify-center items-center rounded-sm">
        3
      </label>
      <button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-7 h-7 fill-green-700"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
    </section>
  );
}

import BodySearchButton from "./BodySearchButton";
import BodyInput from "./BodyInput";
export default function Body() {
  return (
    <section className="bg-gray-900 h-[80vh] w-full pt-20 flex flex-col items-center">
      <div className="flex gap-2 justify-center items-center h-[20vh] w-[55%]">
        <BodyInput />
        <BodySearchButton />
      </div>
      <section className="flex flex-col text-white gap-2 rounded-md w-[55%]">
        <label className="bg-gray-500 p-2 rounded-md">Hamburger</label>
        <label className="bg-gray-500 p-2 rounded-md">
          Website development
        </label>
        <label className="bg-gray-500 p-2 rounded-md">Dinner</label>
        <label className="bg-gray-500 p-2 rounded-md">Computer</label>
        <label className="bg-gray-500 p-2 rounded-md">Laptop</label>
        <label className="bg-gray-500 p-2 rounded-md">Bicycle</label>
        <label className="bg-gray-500 p-2 rounded-md">Hamburger</label>
        <label className="bg-gray-500 p-2 rounded-md">Break fast</label>
      </section>
    </section>
  );
}

import BodySearchButton from "./BodySearchButton";
import BodyInput from "./BodyInput";
export default function Body() {
  return (
    <section className="bg-gray-900 h-[90vh] w-full pt-20 flex flex-col items-center">
      <div className="flex gap-2 justify-center items-center h-[20vh] w-[55%]">
        <BodyInput />
        <BodySearchButton />
      </div>
      <section className="flex flex-col text-white gap-2 rounded-md w-[55%]">
        <div className="w-[100%] bg-gray-800 p-2 rounded-md flex justify-between px-4 text-left">
          <span className="w-[45%]">Hamburger</span>
          <span className="text-green-700">$1,200</span>
          <span className="">Sale</span>
          <span className="">17/06/2025</span>
        </div>
        <div className="w-[100%] bg-gray-800 p-2 rounded-md flex justify-between px-4">
          <span className="w-[45%]"> Website development</span>
          <span className="text-red-700">-$1,200</span>
          <span className="">Home</span>
          <span className="">17/06/2025</span>
        </div>
        <div className="w-[100%] bg-gray-800 p-2 rounded-md flex justify-between px-4">
          <span className="w-[45%]">Dinner</span>
          <span className="text-red-700">-$100</span>
          <span className="">Meals</span>
          <span className="">17/06/2025</span>
        </div>
      </section>
    </section>
  );
}

import BodySearchButton from "../components/SearchButton";
import BodyInput from "../components/Input";
import Data from "../utils/mock"

export default function Body() {
  return (
    <section className="bg-gray-900 h-[80vh] w-full pt-20 flex flex-col items-center">
      <div className="flex gap-2 justify-center items-center h-[20vh] w-[55%]">
        <BodyInput />
        <BodySearchButton />
      </div>
      <section className="flex flex-col text-white gap-2 rounded-md w-[55%]">
        {Data.map((transaction) => 
          <label className="bg-gray-500 p-2 rounded-md">{transaction.title}</label>
        )}
      </section>
    </section>
  );
}

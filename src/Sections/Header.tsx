import dtIcon from "../assets/DTMoneyIcon.png";
import Expenses from "../components/Expenses";

export default function Header() {
  return (
    <section className="bg-black h-[20vh]">
      <div className="h-[50%] w-full flex justify-around items-center mb-5">
        <div className="flex items-center">
          <img className="w-10 h-10" src={dtIcon} />
          <span className="text-white">DT Money</span>
        </div>
        <button className="h-10 bg-green-900 text-white text-base font-semibold p-2 rounded-md">
          New transaction
        </button>
      </div>
      <Expenses />
    </section>
  );
}

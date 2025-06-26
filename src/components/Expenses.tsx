import Data from "../utils/mock";
import imagesMock from "../utils/imagesMock";
import type { JSX } from "react";

type ExpensesProps = {
  type: string;
  amount: number;
  image: { id: number; img: JSX.Element };
};

const accumalateInputExpense = Data.filter((expense) => {
  return expense.type == "input" ? expense.expense : 0;
}).reduce((total, input) => {
  return total + input.expense;
}, 0);

const accumalateOutputExpense = Data.filter((expense) => {
  return expense.type == "output" ? expense.expense : 0;
}).reduce((total, output) => {
  return total + output.expense;
}, 0);

const expenseAccumalated = [
  {
    type: "Input",
    amount: accumalateInputExpense,
    image: imagesMock.filter((expense) => expense.id == 0)[0],
  },
  {
    type: "Output",
    amount: accumalateOutputExpense,
    image: imagesMock.filter((expense) => expense.id == 2)[0],
  },
  {
    type: "Total",
    amount: accumalateInputExpense + accumalateOutputExpense,
    image: imagesMock.filter((expense) => expense.id == 1)[0],
  },
];

function ExpenseCalculator({ type, amount, image }: ExpensesProps) {
  return (
    <div className="bg-gray-800 w-[20%] rounded-md p-4 flex flex-col gap-2">
      <section className="flex justify-between">
        <label className="text-gray-500 text-sm">{type}</label>
        {image.img}
      </section>
      <label className="text-white text-2xl font-bold">${amount}</label>
    </div>
  );
}

export default function Expenses() {
  const expenses = expenseAccumalated.map((expense) =>
    ExpenseCalculator(expense)
  );
  return <section className="flex justify-center gap-2">{expenses}</section>;
}

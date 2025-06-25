import { useState, type ChangeEvent, type HtmlHTMLAttributes } from "react";

type expense = {
  title: string;
  expense: number;
  category: "food" | "fun" | "needs" | "work";
  type: "input" | "output";
  date: string;
};

type InputExpensesProps = {
  expenses: expense[];
};

export default function BodyInput({ expenses = [] }: InputExpensesProps) {
  const [value, setValue] = useState("");

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const filterExpense = expenses.filter((expend) => {
    return (
      expend.title.toLowerCase().includes(value.toLowerCase()) ||
      expend.category.toLowerCase().includes(value.toLowerCase()) ||
      expend.date.toLowerCase().includes(value.toLowerCase())
    );
  });
  console.log(filterExpense);
  return (
    <input
      placeholder="Search for a Transaction"
      className="bg-black  h-[40%] w-[85%] rounded-md text-gray-600 px-5 text-white"
      onChange={handleInput}
    ></input>
  );
}

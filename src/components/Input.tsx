import { useState, type ChangeEvent } from "react";
import type { ExpenseProps } from "../utils/mock";

type InputExpensesProps = {
  expenses: ExpenseProps[];
};

export default function Input({ expenses = [] }: InputExpensesProps) {
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

import { useState, type ChangeEvent } from "react";
import type { ExpenseProps } from "../utils/mock";

type InputExpensesProps = {
  expenses: ExpenseProps[];
  handleInputChange: (newInputValue: string) => void;
};

export default function Input({handleInputChange,  expenses = []}: InputExpensesProps) {
  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    handleInputChange(e.target.value);
  };

  return (
    <input
      placeholder="Search for a Transaction"
      className="bg-black  h-[40%] w-[85%] rounded-md text-gray-600 px-5 text-white"
      onChange={handleInput}
    ></input>
  );
}

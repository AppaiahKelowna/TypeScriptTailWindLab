import SearchButton from "../components/SearchButton";
import Input from "../components/Input";
import Data from "../utils/mock";
import { useEffect, useMemo, useState } from "react";

// const [expenditureData, setExpenditureData] = useState(Data);

type expenseListProp = {
  title: string;
  expense: number;
  category: String;
  date: String;
};

function NewBody({ title, expense, category, date }: expenseListProp) {
  return (
    <tbody className="rounded-sm bg-gray-800 h-10 w-[100%]">
      <tr className="p-2">
        <td className="w-[40%]">{title}</td>
        <td className="w-[20%]">{expense}</td>
        <td className="w-[20%]">{category}</td>
        <td className="w-[20%]">{date}</td>
      </tr>
    </tbody>
  );
}

export default function Body() {
  const expenseListing = useMemo(() => {
    return Data.map((expenditure) => {
      const bodyData = {
        title: expenditure.title,
        expense: expenditure.expense,
        category: expenditure.category,
        date: expenditure.date,
      };
      return bodyData;
    });
  }, [Data]);

  const table = expenseListing.map((expense) => {
    return NewBody(expense);
  });
  return (
    <section className="bg-gray-900 h-[90vh] w-full pt-20 flex flex-col items-center">
      <div className="flex gap-2 justify-center items-center h-[20vh] w-[55%]">
        <Input expenses={Data} />
        <SearchButton />
      </div>
      <section className="flex flex-col text-white gap-2 rounded-md w-[55%] items-start">
        {table}
      </section>
    </section>
  );
}

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

function TableRow({ title, expense, category, date }: expenseListProp) {
  return (
    <tr className="p-2 w-full">
      <td className="w-[40%]">{title}</td>
      <td className="w-[20%]">{expense}</td>
      <td className="w-[20%]">{category}</td>
      <td className="w-[20%]">{date}</td>
    </tr>
  );
}

function TableHeader() {
  return (
    <thead>
      <th className="p-2 w-full">
        <td className="w-[40%]">title</td>
        <td className="w-[20%]">expense</td>
        <td className="w-[20%]">category</td>
        <td className="w-[20%]">date</td>
      </th>
    </thead>
  )
}

export default function Body() {
  const [searchValue, setSearchValue] = useState<string>();

  const handleSearchValueChange = (newInputValue: string) => {
    setSearchValue(newInputValue)
  }

  const filterExpense = Data.filter((expend) => {
    if(searchValue === undefined)
      return Data;

    return (
      expend.title.toLowerCase().includes(searchValue.toLowerCase()) ||
      expend.category.toLowerCase().includes(searchValue.toLowerCase()) ||
      expend.date.toLowerCase().includes(searchValue.toLowerCase())
    );
  });

  return (
    <section className="bg-gray-900 h-[90vh] w-full pt-20 flex flex-col items-center">
      <div className="flex gap-2 justify-center items-center h-[20vh] w-[55%]">
        <Input handleInputChange={handleSearchValueChange} expenses={Data} />
        <SearchButton />
      </div>
      <section className="text-white gap-2 rounded-md w-[55%] items-start">
        <table className="flex flex-col">
          <TableHeader />
          <tbody className="rounded-sm bg-gray-800 h-10 w-full">
            {filterExpense.map((expense) => {
              return TableRow(expense);
            })}
          </tbody>
        </table>
      </section>
    </section>
  );
}

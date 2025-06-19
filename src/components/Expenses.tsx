import React, { useState } from "react";
import Data from "../utils/mock"

type Props = {
  title: string,
  amount: number
}

function ExpenseCard({amount, title}: Props) {
  return (
  <div className="h-[100%] bg-gray-800 h-20 w-[20%] rounded-md">
    <section className="flex justify-between items-center p-5">
      <label className="text-gray-500 text-sm">{title}</label>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-6 w-6 text-white"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        />
      </svg>
    </section>
    <label className="text-white text-2xl font-bold pl-5">$ {amount}</label>
  </div>
  );
}

function accumulateTransactionType(type: string) { 
    return Data 
          .filter((transaction) => transaction.type == type)
          .map((transaction) => transaction.amout)
          .reduce((acc, curr) => acc + curr, 0)
}


export default function Expenses() {
  let [cashback, setCashback] = React.useState(0);

  React.useEffect(() => {
    alert("useEffect was called")

    return () => {
      alert("component is being unmounted")
    }
  }, [])

  React.useEffect(() => {
    alert("another useEffect was called")
  }, [cashback])

  const memoAccumulateTransactionType = React.useCallback(accumulateTransactionType, [Data])
  
  const input = memoAccumulateTransactionType("input")
  const output = memoAccumulateTransactionType("output")

  const handleClick = () => {
    setCashback(cashback + 0.01 * input)
  }

  return (
    <section className="flex justify-center gap-2">
      <ExpenseCard title="income" amount={input}/>
      <ExpenseCard title="outcome" amount={output}/>
      <ExpenseCard title="total" amount={input - output}/>
      <button className="text-black bg-white" onClick={handleClick}>Give Cashback</button>
      <span className="font-bold text-white">{cashback}</span>
    </section>
  );
}


export type ExpenseProps = {
    title: string,
    expense: number,
    category: "food" | "fun" | "needs" | "work",
    type: "input" | "output"
    date: string,
}
export default [{
    title: "Hamburger",
    expense: 1200,
    category: "work",
    type: "output",
    date: "17/06/2025"
}, {
    title: "Website Development",
    expense: 1200,
    category: "work",
    type: "input",
    date: "18/06/2025"
},{
    title: "Dinner",
    expense: 100,
    category: "food",
    type: "output",
    date: "17/06/2025"
},
{ title: "Laptop", category: "fun", expense: 255, type: "output",  date: "18/06/2025" },
{ title: "Bicycle", category: "fun", expense: 358, type: "output" ,  date: "18/06/2025" },
{ title: "Hamburger", category: "food", expense: 23, type: "output" ,  date: "18/06/2025" },
{ title: "Break", category: "needs", expense: 1000, type: "output" ,  date: "18/06/2025" },
{ title: "Website", category: "work", expense: 569, type: "input" ,  date: "18/06/2025" },] satisfies Array<ExpenseProps>
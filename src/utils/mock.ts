export type Transaction = {
    category: "food" | "fun" | "needs" | "work",
    title: string,
    amout: number,
    type: "input" | "output"
}

export default [
    { title: "Hamburger", category: "food", amout: 25, type: "output" },
    { title: "Website", category: "work", amout: 10000, type: "input" },
    { title: "Dinner", category: "food", amout: 50, type: "output" },
    { title: "Computer", category: "fun", amout: 152, type: "output" },
    { title: "Laptop", category: "fun", amout: 255, type: "output" },
    { title: "Bicycle", category: "fun", amout: 358, type: "output" },
    { title: "Hamburger", category: "food", amout: 23, type: "output" },
    { title: "Break", category: "needs", amout: 1000, type: "output" },
    { title: "Website", category: "work", amout: 569, type: "input" },

] satisfies Array<Transaction>
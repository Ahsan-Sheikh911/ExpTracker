// import { useState, useEffect } from "react";
// import "./App.css";
// import Clock from "./components/Clock";

// import ExpenseForm from "./components/ExpenseForm";
// import ExpenseList from "./components/ExpenseList";
// import ExpenseItem from "./components/ExpenseItem";

// function App() {
//   const [expenses, setExpenses] = useState(() => {
//     const saved = localStorage.getItem("expenses");
//     return saved ? JSON.parse(saved) : [];
//   });

//   useEffect(() => {
//     localStorage.setItem("expenses", JSON.stringify(expenses));
//   }, [expenses]);

//   const deleteExpense = (id) => {
//     setExpenses((prev) => prev.filter((item) => item.id != id));
//   };
//   const total = expenses.reduce((sum, exp) => sum + parseFloat(exp.amount), 0);

//   const addExpense = (title, amount) => {
//     const newExpense = {
//       id: Date.now(),
//       title: title,
//       amount: parseFloat(amount),
//     };
//     setExpenses([...expenses, newExpense]);
//   };
//   return (
//     // <div className="container">
//     <div>
//       {/* <h1>Expense Tracker 💰</h1>

//       <ExpenseForm addExpense={addExpense} />

//       <h2 className="total">Total Expense: ${total.toFixed(2)}</h2>

//       <h3>Expense List</h3>

//       <ExpenseList expenses={expenses} onDelete={deleteExpense} /> */}

//       <Clock />
//     </div>
//   );
// }

// export default App;

import { useState } from "react";

import Clock from "./components/Clock";

function App() {
  const [color, setColor] = useState("green");
  return (
    <div>
      <select
        style={{ margin: "10px" }}
        onChange={(e) => setColor(e.target.value)}
      >
        <option value="Green">Green</option>
        <option value="Blue">Blue</option>
        <option value="Red">Red</option>
      </select>
      <Clock color={color} />
    </div>
  );
}

export default App;

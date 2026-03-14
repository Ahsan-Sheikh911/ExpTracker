import ExpenseItem from "./ExpenseItem";

function ExpenseList({ expenses, onDelete }) {
  if (expenses.length === 0) {
    return <h2>No Expense Yet 🥲</h2>;
  }
  return (
    <div>
      {expenses.map((item) => (
        <ExpenseItem key={item.id} item={item} onDelete={onDelete} />
      ))}
    </div>
  );
}

export default ExpenseList;

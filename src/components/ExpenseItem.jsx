function ExpenseItem({ item, onDelete }) {
  return (
    <div className="expense-item">
      <span className="expense-title">{item.title}</span>
      <span className="amount">${parseFloat(item.amount).toFixed(2)}</span>
      <button onClick={() => onDelete(item.id)} className="delete-btn">
        Delete
      </button>
    </div>
  );
}

export default ExpenseItem;

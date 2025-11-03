import React, { useState } from 'react';

function ExpenseTracker() {
  const [expense, setExpense] = useState([]);
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');

  // Add
  const add = () => {
    if (name === '' || amount === '') {
      alert('Please enter details');
      return;
    }

    const newData = {
      id: Date.now(),
      name,
      amount: parseFloat(amount),
    };
    setExpense([...expense, newData]);
    setName('');
    setAmount('');
  };

  // Delete 
  const deleteData = (id) => {
    setExpense(expense.filter((exp) => exp.id !== id));
  };


  const total = expense.reduce((total, exp) => total + exp.amount, 0);


  return (
    <div className="row">
      <div className="col-4"></div>
      <div className="col-4">
        <div className="container text-center mt-5">
          <img style={{ width: "100%" }} src="https://repository-images.githubusercontent.com/419507496/cfcc1354-86ac-432e-823a-da56c21302ba" alt="" />
          <h1 className="mb-4 text-primary">Expense Tracker</h1>

          <div className="mb-3">
            <input
              type="text" placeholder="Expense" value={name} onChange={(e) => setName(e.target.value)} className="form-control mb-2"
            />
            <input type="text" placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} className="form-control mb-2"
            />
            <button className="btn btn-success w-50" onClick={add}>
              Add
            </button>
          </div>

          <h4 className="text-secondary mt-4">Total: ₹{total}</h4>

          <ul className="list-group mt-3">
            {expense.map((exp) => (
              <li key={exp.id} className="list-group-item d-flex justify-content-between align-items-center">
                <span>
                  {exp.name} — ₹{exp.amount}
                </span>
                <button className="btn btn-danger btn-sm" onClick={() => deleteData(exp.id)}>
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="col-4"></div>
    </div>
  );
}

export default ExpenseTracker;

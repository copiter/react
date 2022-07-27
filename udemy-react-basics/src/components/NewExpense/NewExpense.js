import React, {useState} from "react";

import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';
import './ExpenseForm.css';

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const onSaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  }

  const startEditingHandler = () => {
    setIsEditing(true);    
  }

  const stopEditingHandler = () => {
    setIsEditing(false);
  }
  
  return (
    <div className="new-expense">
      {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
      {isEditing && <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} stopEditing={stopEditingHandler}/>}
    </div>
  )
}

export default NewExpense;
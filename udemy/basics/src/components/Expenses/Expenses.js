import React, {useState} from "react";

import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import './Expenses.css'

function Expenses(props){
  const [filteredYear, setFilteredYear] = useState('2020');
  const ExpensesFilterHandler = (filteredYear) => {
    setFilteredYear(filteredYear);
  }

  const filteredYearArr = props.expenses.filter(expense => expense.date.getFullYear() == filteredYear)

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onExpensesFilter={ExpensesFilterHandler}/>
      <ExpenseChart expenses={filteredYearArr}/> 
      <ExpensesList expenses={filteredYearArr}/>
    </Card>
  );
}

export default Expenses;
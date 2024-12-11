import React, { useState } from "react";
import Card from "../Card/Card";
import ExpenseItem from "../ExpensesItem/ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  return (
    <Card className="expenses">
      <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
      {
        props.expenses.map((expense) => {
          return <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          ></ExpenseItem>
        })
      }
      
    </Card>
  );
}

export default Expenses;
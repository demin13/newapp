import React from 'react';

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';
import ExpenseHeader from './components/Expenses/ExpenseHeader';

function App(){ 
    const expenses = [
        {title:'Shopping', date:new Date(2021, 10,10),price:'1280'},
        {title:'Fixed deposit', date:new Date(2021, 10,17),price:'1580'},
        {title:'Credit Card', date:new Date(2021, 10,19),price:'1980'},
    ];
    const header = [
        {title:'Expense Manager'}
    ];
    
    const addExpenseHandler = expense => {
        console.log("In App.js");
        console.log(expense);
    };
    // r;eturn React.createElement(
    //     'div',
    //     {},
    //     React.createElement(ExpenseHeader, {title : header[0].title}),
    //     React.createElement(Expenses, { items : expenses})
    // );

    return (
        <div>
            <ExpenseHeader title={header[0].title} />
            <NewExpense onAddExpense={addExpenseHandler} />
            <Expenses items={expenses} />
        </div>
    );
}

export default App;
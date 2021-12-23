import React from 'react';
import ExpenseDate from './ExpenseDate';
import './css/ExpenseItem.css';
import Card from '../UI/Card';

const ExpenseItem = (props) => {
    // const [title, setTitle] = useState(props.title);
    // const eventHandler = () => {
    //     setTitle('New Title');
    //     console.log(title);
    // };
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">&#8377;{props.price}</div>
            </div>
        </Card>
    );
}

export default ExpenseItem;
import Card from '../Card/Card';
import ExpenseDate from '../ExpenseDate/ExpenseDate';
import './ExpenseItem.css'
function ExpenseItem(props){  
    return (
        <Card className="expense-item">
            <ExpenseDate expDate={props.date}/>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
        </Card>
    ); 
}
  
export default ExpenseItem;
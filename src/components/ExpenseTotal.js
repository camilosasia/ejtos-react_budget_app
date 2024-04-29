import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function ExpenseTotal() {
    const { expenses } = useContext(AppContext);

    const totalExpenses = expenses.reduce((total, { cost }) => total + cost, 0);

    return (
        <div className='alert alert-primary'>
            <span>Spent so far: £{totalExpenses}</span>
        </div>
    );
}

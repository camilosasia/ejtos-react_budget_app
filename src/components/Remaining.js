import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function Remaining() {
    const { budget, expenses } = useContext(AppContext);

    const totalExpenses = expenses.reduce((total, { cost }) => total + cost, 0);
    const alertType = totalExpenses > budget ? "alert-danger" : "alert-success";

    return (
        <div className={`alert ${alertType}`}>
            <span>Remaining: £{budget - totalExpenses}</span>
        </div>
    );
}

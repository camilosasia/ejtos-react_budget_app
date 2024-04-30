import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function Budget() {
    const { budget, expenses, currency, dispatch } = useContext(AppContext);

    const totalExpenses = expenses
        .reduce((total, { cost }) => total + cost, 0);

    function handlebBudgetChange(event) {
        const budget = event.target.value;

        if (budget > 20000) {
            alert("The budget value cannot be more than 20,000")
            return;
        }

        if (budget < totalExpenses) {
            alert("You cannot reduce the budget value lower than the spending")
            return;
        }

        dispatch({
            type: "SET_BUDGET",
            payload: budget,
        });
    }

    return (
        <div className="alert alert-secondary">
            <span>Budget: {currency}</span>
            <input
                style={{ marginLeft: "0.5rem", maxWidth: "100%" }}
                type="number"
                step={10}
                max={20000}
                value={budget}
                onChange={handlebBudgetChange}
            />
        </div>
    )
}

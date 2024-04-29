import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function Budget() {
    const { budget, dispatch } = useContext(AppContext);

    function handlebBudgetChange(event) {
        dispatch({
            type: "SET_BUDGET",
            payload: event.target.value,
        });
    }

    return (
        <div className="alert alert-secondary">
            <span>Budget: £</span>
            <input
                style={{ marginLeft: "2rem", maxWidth: "100%" }}
                type="number"
                step={10}
                value={budget}
                onChange={handlebBudgetChange}
            />
        </div>
    )
}

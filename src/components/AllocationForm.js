import { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function AllocationForm() {
    const { remaining, dispatch } = useContext(AppContext);

    const [name, setName] = useState("");
    const [cost, setCost] = useState("");
    const [action, setAction] = useState("Add");

    function submitEvent() {
        if (!name) {
            alert("Please select a department");
            return;
        }

        let costValue = parseInt(cost);
        if (isNaN(costValue)) {
            alert("Invalid value. Please enter numbers only.");
            return;
        }

        if (costValue < 0) {
            alert("The value should be non-negative")
            return;
        }

        const expense = {
            name,
            cost: costValue
        };

        switch (action) {
            case "Add":
                if (cost > remaining) {
                    alert("The value cannot exceed remaining funds £" + remaining);
                    setCost("");
                    return;
                }

                dispatch({ type: "ADD_EXPENSE", payload: expense });
                break;
            case "Reduce":
                dispatch({ type: "RED_EXPENSE", payload: expense });
                break;
            default:
                break;
        }
    }

    return (
        <div className='row'>
            <div className="input-group mb-3" style={{ marginLeft: '2rem' }}>
                <div className="input-group-prepend">
                    <label className="input-group-text" htmlFor="inputGroupSelect01">Department</label>
                </div>
                <select className="custom-select" id="inputGroupSelect01" onChange={(event) => setName(event.target.value)}>
                    <option defaultValue value="">Choose...</option>
                    <option value="Marketing" name="marketing"> Marketing</option>
                    <option value="Sales" name="sales">Sales</option>
                    <option value="Finance" name="finance">Finance</option>
                    <option value="HR" name="hr">HR</option>
                    <option value="IT" name="it">IT</option>
                    <option value="Admin" name="admin">Admin</option>
                </select>
                <div className="input-group-prepend" style={{ marginLeft: '2rem' }}>
                    <label className="input-group-text" htmlFor="inputGroupSelect02">Allocation</label>
                </div>
                <select className="custom-select" id="inputGroupSelect02" onChange={(event) => setAction(event.target.value)}>
                    <option defaultValue value="Add" name="Add">Add</option>
                    <option value="Reduce" name="Reduce">Reduce</option>
                </select>
                <div style={{ marginLeft: '2rem' }}>
                    £
                    <input
                        required='required'
                        type='number'
                        id='cost'
                        value={cost}
                        min={0}
                        style={{ marginLeft: "0.5rem" }}
                        onChange={(event) => setCost(event.target.value)}>
                    </input>
                </div>
                <button className="btn btn-primary" onClick={submitEvent} style={{ marginLeft: '2rem' }}>
                    Save
                </button>
            </div>
        </div>
    );
}

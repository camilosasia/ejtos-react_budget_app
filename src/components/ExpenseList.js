import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import ExpenseItem from "./ExpenseItem";

export default function ExpenseList() {
    const { expenses } = useContext(AppContext)

    return (
        <table className='table'>
            <thead className="thead-light">
                <tr>
                    <th scope="col">Department</th>
                    <th scope="col">Allocated Budget</th>
                    <th scope="col">Increase by 10</th>
                    <th scope="col">Delete</th>
                </tr>
            </thead>
            <tbody>
                {expenses.map(({ id, name, cost }) => (
                    <ExpenseItem key={id} id={id} name={name} cost={cost} />
                ))}
            </tbody>
        </table>
    );
}
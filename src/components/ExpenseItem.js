import { useContext } from 'react';
import { FaPlusCircle } from "react-icons/fa";
import { FaMinusCircle } from "react-icons/fa";
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

export default function ExpenseItem(props) {
    const { currency, dispatch } = useContext(AppContext);

    function increaseAllocation(name) {
        dispatch({ type: "ADD_EXPENSE", payload: { name, cost: 10, } })

    }

    function decreaseAllocation(name) {
        dispatch({ type: "SUBSTRACT_EXPENSE", payload: { name, cost: 10 } });
    }

    function handleDeleteExpense() {
        dispatch({ type: "DELETE_EXPENSE", payload: props.id, })
    }

    return (
        <tr>
            <td>{props.name}</td>
            <td>{currency}{props.cost}</td>
            <td>
                &nbsp;
                <FaPlusCircle
                    size='2rem'
                    color='green'
                    onClick={() => increaseAllocation(props.name)}
                />
                <i></i>
            </td>
            <td>
                &nbsp;
                <FaMinusCircle
                    size='2rem'
                    color='red'
                    onClick={() => decreaseAllocation(props.name)}
                />
            </td>
            <td>
                &nbsp;
                <TiDelete
                    size='1.5em'
                    onClick={handleDeleteExpense}
                />
            </td>
        </tr >
    );
}

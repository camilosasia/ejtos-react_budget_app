import { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

export default function ExpenseItem(props) {
    const { dispatch } = useContext(AppContext);

    function increaseAllocation(name) {
        dispatch({
            type: "ADD_EXPENSE",
            payload: {
                name,
                cost: 10,
            }
        })

    }

    function handleDeleteExpense() {
        dispatch({
            type: "DELETE_EXPENSE",
            payload: props.id,
        })
    }

    return (
        <tr>
            <td>{props.name}</td>
            <td>£{props.cost}</td>
            <td><button onClick={() => increaseAllocation(props.name)}>+</button></td>
            <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
}

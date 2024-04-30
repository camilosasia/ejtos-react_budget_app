import { useContext } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { AppContext } from '../context/AppContext';

const currencyName = {
    "$": "Dollar",
    "£": "Pound",
    "€": "Euro",
    "₹": "Ruppee",
}

export default function Currency() {
    const { currency, dispatch } = useContext(AppContext);

    function handleCurrencyChange(currency) {
        dispatch({
            type: "CHG_CURRENCY",
            payload: currency
        })
    }

    return (
        <DropdownButton
            title={`Currency (${currency} ${currencyName[currency]})`}
            variant='success'
            onSelect={handleCurrencyChange}
        >
            <Dropdown.Item eventKey="$">$ Dollar</Dropdown.Item>
            <Dropdown.Item eventKey="£">£ Pound</Dropdown.Item>
            <Dropdown.Item eventKey="€">€ Euro</Dropdown.Item>
            <Dropdown.Item eventKey="₹">₹ Ruppee</Dropdown.Item>
        </DropdownButton>
    )
}
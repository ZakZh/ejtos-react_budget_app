import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { currency, dispatch } = useContext(AppContext);

    const changeCurrency = (value) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: value,
        });
        console.log(currency, value)
    }

    return (
        <div className='alert alert-success'>
            <span>Currency </span>
            <select className="custom-select" style={{backgroundColor: '#badbcc'}} id="inputGroupSelect01" onChange={(event) => changeCurrency(event.target.value)}>
                <option  value="£" name="pound">£ Pound</option>
                <option value="$" name="dollar">$ Dollar</option>
                <option value="€" name="euro">€ Euro</option>
                <option value="₹" name="ruppee">₹ Ruppee</option>
            </select>
        </div>
    );
};

export default Currency;
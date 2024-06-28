import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { dispatch, budget, currency, expenses } = useContext(AppContext);

    const changeBudget = (value) => {
        const totalExpenses = expenses.reduce((total, item) => {
            return (total += item.cost);
        }, 0);
        
        if (+value > totalExpenses) {
            alert('You cannot reduce the budget value lower than the spending')
        } else {
            dispatch({
                type: 'SET_BUDGET',
                payload: value,
            });
        }
    }

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}</span>
            <input type="number" step="10" value={budget} onChange={(event) => {changeBudget(event.target.value)}}></input>
        </div>
    );
};

export default Budget;

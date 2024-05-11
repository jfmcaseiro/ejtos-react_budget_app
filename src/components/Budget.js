import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget } = useContext(AppContext);
    
    // we are using the useState hook to create a state variable called newBudget 
    // and initialize it with the current value of budget
    const [newBudget, setNewBudget] = useState(budget);
    
    //updates the value of newBudget when the user changes the value of the 
    //input field.
    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
    }
    return (

//We are then setting the value attribute of the input field to newBudget and adding 
//an onChange event listener that calls handleBudgetChange when the user changes 
//the value of the input field.
//inside the span is the text that appears before box
// the input is a box which allows for steps of 10 that contains the new budget
<div className='alert alert-secondary'>
<span>Budget: £{budget}</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;

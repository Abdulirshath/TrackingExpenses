import React, {useState, useContext} from 'react'
import { GlobalContext } from '../Context/GlobalState'


export const AddTransaction = () => {

    const [text,setText] = useState("");
    const [amount,setAmount] = useState(0);

    const {addTransaction} = useContext(GlobalContext);

    const onSubmit = (e) =>
    {
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text,
            amount: +amount,
        };

addTransaction(newTransaction);

    }
    

    return (
        <>
        <h1>Add now Transaction</h1>
        <form onSubmit={onSubmit}>
            <div name="form-control">
                <label htmlFor="text">Label</label>
                <input type="text" placeholder="Enter Label..." onChange={(e) => {setText(e.target.value)}}>

                </input>
            </div>
            <div name="form-control">
                <label htmlfor="amount">(<b>-</b>/<b>+</b>)Amount &nbsp; &nbsp; [-expense, +income]</label>
                <input type="number" placeholder="Enter the Amount..." onChange={(e) => {setAmount(e.target.value)}}></input>
            </div>
            <button className="btn">Add Transaction</button>
        </form>
        </>
    )
}

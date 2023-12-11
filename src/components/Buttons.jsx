import { useDispatch } from "react-redux";
import { increment, decrement, incrementNumber } from "../slices/counterSlice";
import { useState } from "react";

const Buttons = () => {

    const [number, setNumber] = useState(0);
    const dispatch = useDispatch();

    return (
        <>
            <div>
                <button onClick={() => dispatch(decrement())}>-</button>
                <button onClick={() => dispatch(increment())}>+</button>
            </div>
            <div>
                <input type="number" value={number} onChange={(e) => {
                    setNumber(e.target.value);
                }} />
                <button onClick={() => dispatch(incrementNumber(number))}>Ajouter</button>
            </div>
        </>
    )
}

export default Buttons;
import { useSelector, useDispatch } from "react-redux";
import {
    increment,
    decrement,
    changeByAmount,
    AsyncChangeByValue,
} from "./features/counter/counterSlice";

const App = () => {
    const dispatch = useDispatch();
    const { value } = useSelector((state) => state.counter);
    const OnIncrement = () => {
        dispatch(increment());
    };

    const OnDecrement = () => {
        dispatch(decrement());
    };

    const ChangeByValue = () => {
        // dispatch(changeByAmount(10));
        dispatch(AsyncChangeByValue(10));
    };

    return (
        <div className="container mt-5 alert d-flex">
            <button onClick={OnIncrement} className="w-25 btn btn-primary">
                +
            </button>
            <h1 className="w-25 text-center">{value}</h1>
            <button onClick={OnDecrement} className="w-25 btn btn-danger">
                -
            </button>
            <button onClick={ChangeByValue} className="w-25 btn btn-info">
                Change By Value
            </button>
        </div>
    );
};

export default App;

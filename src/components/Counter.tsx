import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, setIncrementAmount, incrementByAmount } from "../app/features/counter/counterSlice";

const Counter = () => {
  const count = useSelector((state: any) => state.counter.value);
  const incrementAmount = useSelector((state: any) => state.counter.incrementAmount);
  const dispatch = useDispatch();

  return (
    <div className="card">
      <span>Count: {count}</span>
      <br /><br />
      <span> Increment Amount: </span>
      <input
        type="number"
        value={incrementAmount}
        onChange={e => {
            const intValue = Math.floor(Number(e.target.value));
            dispatch(setIncrementAmount(intValue))
          }
        }
        style={{ width: "60px", marginRight: "8px" }}
      />
      <br /><br />
      <button onClick={() => dispatch(increment())}>
        Increment
      </button>
      
      <button onClick={() => dispatch(decrement())}>
        Decrement
      </button>

      <button onClick={() => dispatch(incrementByAmount(incrementAmount))}>
        Increment by {incrementAmount}
      </button>
    </div>
  );
}

export default Counter;
// This code defines a Counter component that uses Redux to manage its state.
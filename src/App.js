import React from 'react'
import { useSelector } from 'react-redux';
import { incCount,decCount ,reset,mult,div} from './actions/action';
import { useDispatch } from 'react-redux';
function App() {
  const data = useSelector((state) => state.changeCount);
 
  const mydata = useSelector((state) => state.mulNumber);
  const dispatch = useDispatch();
  return (
    <div>
      <div class = "FirstContainer">
        <h1>counter App</h1>
        <h2>count : {data}</h2>
        <button onClick={() => dispatch(incCount())}>+</button>
        <button onClick={() => dispatch(decCount())}>-</button>
        <button onClick={() => dispatch(reset())}>reset</button>
      </div>
      <div class = "secondContainer">
        <h1>counter App</h1>
        <h2>count : {mydata}</h2>
        <button onClick={() => dispatch(div())}>/</button>
        <button onClick={() => dispatch(mult(5))}>*</button>
      </div>
    </div>
  );
}

export default App;

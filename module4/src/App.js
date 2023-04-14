import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import {incNumber,decNumber} from './Actions/index'

function App() {
  const myState=useSelector((state)=>state.changeTheNumber)
  let dispatch=useDispatch();
  return (
    <>
    <div style={{textAlign:"center"}}>
      <h2>Increment/Decrement Counter</h2>
      <h4>Using React and Redux</h4>
      <div>
        <a title='decrement' onClick={()=>dispatch(decNumber(5))}><span> - </span></a>
        <input name='quantity' type='text' value={myState}/>
        <a title='increment' onClick={()=>{dispatch(incNumber(10))}}><span> + </span></a>
      </div>
    </div>
    </>
  );
}

export default App;

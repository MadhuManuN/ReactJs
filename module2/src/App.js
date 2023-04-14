import logo from './logo.svg';
import './App.css';
import UseStateHook from './ReactHooks/UseStateHook';
// import Employee from './DefaultProps/Employee';
import Employee from './PropTypes/Employee';
import ParentComp from './ReactHook_UseContext/ParentComp';
import Timer from './ReactHook_useEffect/Timer';
import CounterCalc from './ReactHook_useEffect/CounterCalc';
import TextAreaUseState from './ReactHooks/TextAreaUseState';
import AddDeleteItem from './ReactHooks/AddDeleteItem';
// import ToDoList_Task_4 from './ToDoList_Task_4';
import Parent from './Parent';
import ToDoList_Task_4 from './ToDoList_Task_4/ToDoList_Task_4';
import UseRef_NoRerender from './ReactHook_UseRef/UseRef_NoRerender';
import UseRef_AccessDOM from './ReactHook_UseRef/UseRef_AccessDOM';
import UseRef_TackleState from './ReactHook_UseRef/UseRef_TackleState';
import UseReducerTodo from './ReactHooks_UseReducer/UseReducerTodo';
import ReducerCounter from './ReactHooks_UseReducer/ReducerCounter';
import ReducerCounter_2 from './ReactHooks_UseReducer/ReducerCounter_2';
import ReducerDataFetching from './ReactHooks_UseReducer/ReducerDataFetching';
import ParentComponet from './ReactHooks_useCallBack/ParentComponet';
// import ParentComp from './PropContextAPI/PropsDrilling/ParentComp';
// import ParentComp from './PropsDrilling/ParentComp';

function App() {
  return (
    <div className='App'>
     {/* <UseStateHook/> */}
    {/* <Employee/> */}
    {/* <Employee/> */}
    {/* <ParentComp/> */}
    {/* <Timer/> */}
    {/* <CounterCalc/> */}
    {/* <TextAreaUseState/> */}
    {/* <AddDeleteItem/> */}
    <ToDoList_Task_4/>
    {/* <Parent/> */}
    {/* <UseRef_NoRerender/> */}
    {/* <UseRef_AccessDOM/> */}
    {/* <UseRef_TackleState/> */}
    {/* <UseReducerTodo/> */}
    {/* <ReducerCounter/> */}

    {/* <ReducerCounter_2/> */}
    {/* <ReducerDataFetching/> */}
    {/* <ParentComponet/> */}
    </div>
  );
}

export default App;

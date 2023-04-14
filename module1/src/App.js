import logo from './logo.svg';
import './App.css';
import Employee from './Employee';
import ReactProps from './ReactProps';
import ReactEvents from './ReactEvents';
import ReactConditionals from './ReactConditionals';
import ReactLists from './ReactLists';
import ReactForms from './ReactForms';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Routing/Layout';
import Home from './Routing/Home';
import Blogs from './Routing/Blogs';
import Contact from './Routing/Contact';
import NoPage from './Routing/NoPage';
import IncrementTodoList from './ReactRoute/IncrementTodoList';
import InlineStyleEx from './ReactStyling/InlineStyleEx';
import JsObjectStyle from './ReactStyling/JsObjectStyle';
import StyleSheetEx from './ReactStyling/StyleSheetEx';
import CssModuleStyle from './ReactStyling/CssModuleStyle';
import SassStyle from './ReactStyling/SassStyle';


function App() {
  return (
    <div className="App">
      <h1>First Module</h1>
      {/* <Employee ename="madhu" age="27" company="ZKTECO"/> */}
      {/* <ReactProps/> */}
      {/* <ReactEvents/> */}
      {/* <ReactConditionals isEventsOrProps={false}/> */}
      {/* <ReactLists/> */}
      {/* <ReactForms/> */}
      {/* <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="blogs" element={<Blogs/>}/>
          <Route path="contact" element={<Contact/>}/>
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
      </BrowserRouter> */}
      {/* <IncrementTodoList/> */}
      {/* <InlineStyleEx/>
      <hr/>
      <JsObjectStyle/>
      <hr/>
      <StyleSheetEx/>
      <hr/>
      <CssModuleStyle/> */}
      
      <SassStyle/>
    </div>
  );
}

export default App;

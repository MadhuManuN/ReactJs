// import '../src/Components/products.css'
import AddProducts from './Components/AddProducts';
import Authoriser from './Components/Authoriser';
import Home from './Components/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ProductDetails from './Components/ProductDetails';
import Admin from './Components/Admin';
import UpdateProduct from './Components/UpdateProduct';
import Cart from './Components/Cart';



function App() {

  return (
    <Router>
      <div className="App">
        <Switch>

          <Route exact path="/">
            <Authoriser />
          </Route>
          <Route path="/user">
            <Home />
          </Route>
          <Route path="/admin">
            <Admin/>
          </Route>
          <Route path="/ProductDetails:id">
            <ProductDetails/>
          </Route>
          <Route path="/addnewproduct">
          <AddProducts/>
          </Route>
          <Route path="/updateproduct:id">
          <UpdateProduct/>
          </Route>
          <Route path="/cartProducts">
          <Cart/>
          </Route>


        </Switch>
      </div>
    </Router>
  );
}

export default App;

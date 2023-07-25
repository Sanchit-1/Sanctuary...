import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import Home from './pages/Home'
import Login from './pages/Login';
import ProductList from './pages/ProductList';
import Register from "./pages/Register"
import Cart from './pages/cart';
import Product from './pages/Product';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Success from './pages/Success';
import { useSelector } from 'react-redux';

const App=()=>{
  
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/products/:category">
          <ProductList/>
        </Route>
        <Route path="/product/:id">
          <Product />
        </Route>
        <Route path="/Cart">
          <Cart/>
        </Route>
        <Route path="/Success">
          <Success/>
        </Route>
        <Route path="/Login">
          <Login/>
        </Route>
        <Route path="/Register">
          <Register/>
        </Route>
      </Switch>
    </Router>
  )
};

export default App;

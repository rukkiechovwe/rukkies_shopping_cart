import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router-dom";
import ProductsPage from "./pages/products_page";
import CartPage from "./pages/cart_page";
import { CartProvider } from "./context/cart_context";

function App() {
  return (
    <div className="App">
      <CartProvider>
        <Switch>
          <Route path="/" exact component={ProductsPage}></Route>
          <Route path="/cart" component={CartPage}></Route>
        </Switch>
      </CartProvider>
    </div>
  );
}

export default App;

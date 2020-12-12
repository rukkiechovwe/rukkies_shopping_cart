import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router-dom";
import ProductsPage from "./pages/products_page";
import CartPage from "./pages/cart_page";
import { CartProvider } from "./context/cart_context";
import { ProductProvider } from "./context/products_context";
import UserLogin from "./components/user_login";

function App() {
  return (
    <div className="App">
      <ProductProvider>
        <CartProvider>
          <Switch>
            <Route path="/" exact component={ProductsPage}></Route>
            <Route path="/cart" component={CartPage}></Route>
            <Route path="/login" component={UserLogin}></Route>
          </Switch>
        </CartProvider>
      </ProductProvider>
    </div>
  );
}

export default App;

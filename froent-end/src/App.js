import { BrowserRouter, Route, Switch } from "react-router-dom";
import ProductList from "./components/ProductList";
import AddProduct from "./components/AddProduct";
import EditProduct from "./components/EditProduct";
import 'bulma/css/bulma.min.css';
 
function App() {
  return (
    <BrowserRouter>
    <div className="container">
      <div className="columns">
        <div className="column is-half is-offset-one-quarter">
          <Switch>
            <Route exact path="/">
              <ProductList />
            </Route>
            <Route exact path="/add">
              <AddProduct />
            </Route>
            <Route path="/edit/:id">
              <EditProduct />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
    </BrowserRouter>
  );
}
 
export default App;
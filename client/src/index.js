import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import Register from "./Pages/Register.page";
import AddBook from "./Pages/AddBook.page";
import Fiction from "./Pages/Fiction.page";
import Nonfiction from "./Pages/Nonfiction.page";
import AllGenres from "./Pages/AllGenres.page";
import BaseLayout from "./Layout/BaseLayout.layout";
import Edit from "./Pages/Edit.page";
import Cart from "./Pages/Cart.page";
import Login from "./Pages/Login.page";
import HomeNoAuth from "./Pages/HomeNoAuth.page";
import Signout from "./Pages/Signout.page";
import { setAuthenticationHeader } from "./utils/Auth";
//import requireAuth from "./components/requireAuth";

import cartReducer from "./store/reducers/cart";
import loginReducer from "./store/reducers/login";
import booksReducer from "./store/reducers/books";
import counterReducer from "./store/reducers/counter";

const rootReducer = combineReducers({
  cartRed: cartReducer,
  loginRed: loginReducer,
  booksRed: booksReducer,
  counterRed: counterReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// create a global store
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

const token = localStorage.getItem("jsonwebtoken");
setAuthenticationHeader(token);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <BaseLayout>
          <Switch>
            <Route exact path="/" component={HomeNoAuth} />
            {/* <Route exact path="/AddBook" component={requireAuth(AddBook)} />
            <Route exact path="/Edit/:id" component={requireAuth(Edit)} /> */}
            <Route exact path="/AddBook" component={AddBook} />
            <Route exact path="/Edit/:id" component={Edit} />
            <Route exact path="/Register" component={Register} />
            <Route exact path="/Fiction" component={Fiction} />
            <Route exact path="/Nonfiction" component={Nonfiction} />
            <Route exact path="/AllGenres" component={AllGenres} />
            {/* <Route exact path="/Cart" component={requireAuth(Cart)} /> */}
            <Route exact path="/Cart" component={Cart} />
            <Route exact path="/Login" component={Login} />
            <Route exact path="/Home" component={HomeNoAuth} />
            <Route exact path="/Signout" component={Signout} />
          </Switch>
        </BaseLayout>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

/* <Route path="/" component={Login} exact />
<Route path="/my-books" component={requireAuth(MyBooks)} />
<Route path="/admin" component={requireAuth(Admin)} /> */

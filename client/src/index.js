// import "./index.css";
// import App from "./App";
// import * as serviceWorker from './serviceWorker';
// import registerServiceWorker from "./registerServiceWorker";
// import { MovieList } from "./components/MovieList";
// import { MovieDetails } from "./components/MovieDetails";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import { createStore } from "redux";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
// import reducer from "./store/reducer";

// import HomeNoAuth from "./Pages/HomeNoAuth.page";
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

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <BaseLayout>
        <Switch>
          <Route exact path="/" component={HomeNoAuth} />
          <Route exact path="/AddBook" component={AddBook} />
          <Route exact path="/Edit/:id" component={Edit} />
          <Route exact path="/Register" component={Register} />
          <Route exact path="/Fiction" component={Fiction} />
          <Route exact path="/Nonfiction" component={Nonfiction} />
          <Route exact path="/AllGenres" component={AllGenres} />
          <Route exact path="/Cart" component={Cart} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/Home" component={HomeNoAuth} />
          <Route exact path="/Signout" component={Signout} />
        </Switch>
      </BaseLayout>
    </BrowserRouter>
  </Provider>,

  document.getElementById("root")
);

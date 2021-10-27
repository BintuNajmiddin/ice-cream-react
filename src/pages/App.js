import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import '../App.css';
import Home from './Home'
import Header from '../сomponents/Header';
import AddICeCream from './AddIceCream';
import NotFound from "./NotFound";

import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
     <Router>
    <div className="wrapper">
      <Header/>
        <Switch>
          <Route path="/AddICeCream">
            <AddICeCream />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
           <NotFound/>
          </Route>
        </Switch>
    </div>
    <ToastContainer/>
    </Router>
  );
}

export default App;

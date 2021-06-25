  
import React from "react";
import "./App.css";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/Navbar";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import AddContact from "./components/AddContact";


function App() {
  return (
    <div className="App">
      <ToastContainer />
      {/* <DateTimePicker /> */}
      <Navbar />
      <Switch>
        <Route exact path="/" component={() => <Home />}></Route>
        <Route path="/add">
          <AddContact />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
import React, {Component} from "react";
import logo from "./logo.svg";
import "./App.css";

//custom components
import Carousel from "./components/Carousel";
import MainImage from "./components/MainImage";
import Details from "./components/Details";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="container">
          <div className="row">
            <div className="col-md-5 col-md-offset-1">
              <MainImage />
              <Carousel />
            </div>
            <div className="col-md-4 col-md-offset-1">
              <Details />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

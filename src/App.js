import React, {Component} from "react";
import logo from "./logo.svg";
import "./App.css";

//custom components
import Carousel from "./components/Carousel";
import MainImage from "./components/MainImage";

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
            <div className="col-md-6">
              <MainImage />
              <Carousel style={{marginTop: "20px"}} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

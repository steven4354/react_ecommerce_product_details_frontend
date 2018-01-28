import React, {Component} from "react";
import logo from "./logo.svg";
import "./App.css";

//custom components
import Carousel from "./components/Carousel";
import MainImage from "./components/MainImage";
import Details from "./components/Details";
import Modal from "react-modal";
import ModalCarousel from "./components/ModalCarousel";

//for the modal
const customStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(255, 255, 255, 0.75)"
  },
  content: {
    position: "absolute",
    top: "100px",
    left: "200px",
    right: "200px",
    bottom: "100px",
    border: "1px solid #ccc",
    background: "#fff",
    overflow: "auto",
    WebkitOverflowScrolling: "touch",
    borderRadius: "4px",
    outline: "none",
    padding: "20px"
  }
};

class App extends Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    // this.subtitle.style.color = "#f00";
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    return (
      <div className="App">
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <ModalCarousel />
        </Modal>
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
              <div
                onClick={() => {
                  this.openModal();
                }}
              >
                <MainImage />
              </div>
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

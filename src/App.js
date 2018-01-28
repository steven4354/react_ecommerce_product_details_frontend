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
    top: "200px",
    left: "300px",
    right: "300px",
    bottom: "200px",
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
      modalIsOpen: false,
      groups: [],
      fetched: false,
      modalImageIndex: 0,
      modalImage: ""
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount() {
    const proxyurl = "https://frozen-tor-97732.herokuapp.com/";
    const url =
      "https://www.westelm.com/services/catalog/v4/category/shop/new/all-new/index.json"; // site that doesn’t send Access-Control-*
    console.log(proxyurl + url);
    fetch(proxyurl + url)
      .then(response => {
        console.log("response nonjson =>", response);
        return response.json();
      })
      .then(contents => {
        console.log("contents =>", contents);
        this.setState({
          groups: contents.groups,
          fetched: true,
          modalImage: contents.groups[0].images[this.state.modalImageIndex].href
        });
      })
      .catch(e => {
        console.log("fetch error", e);
      });
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
          <ModalCarousel
            fetched={this.state.fetched}
            groups={this.state.groups}
            modalImageIndex={this.state.modalImageIndex}
            modalImage={this.state.modalImage}
          />
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
              <Carousel
                fetched={this.state.fetched}
                groups={this.state.groups}
                modalImageIndex={this.state.modalImageIndex}
                modalImage={this.state.modalImage}
              />
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

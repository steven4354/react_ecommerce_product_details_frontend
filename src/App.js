import React, {Component} from "react";
import logo from "./logo.svg";
import "./App.css";

//custom components
import Carousel from "./components/Carousel";
import MainImage from "./components/MainImage";
import Details from "./components/Details";
import Modal from "react-modal";
import ModalCarousel from "./components/ModalCarousel";

//create a function that closes modal on shouldComponentUpdate, when window is small
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
    top: "20%",
    left: "300px",
    right: "300px",
    bottom: "20%",
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
      groupIndex: 0,
      fetched: false,
      modalImageIndex: 0,
      modalImage: ""
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.switchLeft = this.switchLeft.bind(this);
    this.switchRight = this.switchRight.bind(this);
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
          modalImage:
            contents.groups[this.state.groupIndex].images[
              this.state.modalImageIndex
            ].href
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

  //changes the carousel picture in the modal
  switchRight(e) {
    if (
      this.state.modalImageIndex <=
      this.state.groups[this.state.groupIndex].images.length - 2
    ) {
      let idx = this.state.modalImageIndex + 1;
      console.log("switchRight called idx => ", idx);

      this.setState({
        modalImageIndex: idx,
        modalImage: this.state.groups[this.state.groupIndex].images[idx].href
      });
    }
  }

  switchLeft(e) {
    if (this.state.modalImageIndex > 0) {
      console.log("switchLeft called");
      let idx = this.state.modalImageIndex - 1;
      this.setState({
        modalImageIndex: idx,
        modalImage: this.state.groups[this.state.groupIndex].images[idx].href
      });
    }
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
          id="fadeshow1"
        >
          <ModalCarousel
            switchRight={this.switchRight}
            switchLeft={this.switchLeft}
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
            <div className="col-sm-5 col-sm-offset-1">
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
            <div className="col-sm-4 col-sm-offset-1">
              <Details
                fetched={this.state.fetched}
                groups={this.state.groups}
                modalImageIndex={this.state.modalImageIndex}
                modalImage={this.state.modalImage}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

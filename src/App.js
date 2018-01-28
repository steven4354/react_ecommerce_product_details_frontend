import React, {Component} from "react";
import logo from "./wslogo.png";
import "./App.css";

//custom components
import Carousel from "./components/Carousel";
import MainImage from "./components/MainImage";
import Details from "./components/Details";
import Modal from "react-modal";
import ModalCarousel from "./components/ModalCarousel";

//
const customStyles = {
  overlay: {
    position: "fixed",
    display: "flex",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(255, 255, 255, 0.75)",
    minWidth: "500px",
    minHeight: "500px"
  },
  content: {
    top: "20%",
    left: "300px",
    right: "300px",
    bottom: "40vh",
    textAlign: "center",
    border: "1px solid #ccc",
    background: "#fff",
    overflow: "auto",
    WebkitOverflowScrolling: "touch",
    borderRadius: "4px",
    outline: "none",
    padding: "20px",
    minWidth: "500px",
    minHeight: "500px"
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
    this.changeProduct = this.changeProduct.bind(this);
  }

  componentDidMount() {
    const proxyurl = "https://frozen-tor-97732.herokuapp.com/";
    const url =
      "https://www.westelm.com/services/catalog/v4/category/shop/new/all-new/index.json"; // site that doesn’t send Access-Control-*
    fetch(proxyurl + url)
      .then(response => {
        return response.json();
      })
      .then(contents => {
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
        console.log("fetch error =>", e);
      });
  }

  changeProduct() {
    let idx = this.state.groupIndex + 1;
    if (idx <= this.state.groups.length - 2) {
      this.setState({
        groupIndex: idx,
        modalImage: this.state.groups[idx].images[0].href,
        modalImageIndex: 0
      });
    }
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    //for modal checks
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
      this.setState({
        modalImageIndex: idx,
        modalImage: this.state.groups[this.state.groupIndex].images[idx].href
      });
    }
  }

  switchLeft(e) {
    if (this.state.modalImageIndex > 0) {
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
          ariaHideApp={false}
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
          <img height="120px" src={logo} alt="logo" />
        </header>
        <p
          className="App-intro"
          style={{
            fontFamily: "Times New Roman",
            fontWeight: "bold",
            color: "#337AB7",
            marginTop: "5px"
          }}
        >
          Produce Details Page <br />(click on main image to display modal)
        </p>
        <div className="container">
          <div className="row">
            <div className="col-sm-5 col-sm-offset-1">
              <div
                onClick={() => {
                  this.openModal();
                }}
              >
                <MainImage
                  fetched={this.state.fetched}
                  groups={this.state.groups}
                  groupIndex={this.state.groupIndex}
                  modalImageIndex={this.state.modalImageIndex}
                  modalImage={this.state.modalImage}
                />
              </div>
              <Carousel
                fetched={this.state.fetched}
                groups={this.state.groups}
                groupIndex={this.state.groupIndex}
                modalImageIndex={this.state.modalImageIndex}
                modalImage={this.state.modalImage}
              />
            </div>
            <div className="col-sm-4 col-sm-offset-1">
              <Details
                fetched={this.state.fetched}
                groups={this.state.groups}
                groupIndex={this.state.groupIndex}
                modalImageIndex={this.state.modalImageIndex}
                modalImage={this.state.modalImage}
              />
              <button
                className="btn-lg btn-primary"
                style={{marginTop: "50px", borderRadius: "0"}}
                onClick={this.changeProduct}
              >
                Go to Next Product
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

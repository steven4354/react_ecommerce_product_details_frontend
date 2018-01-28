import React, {Component} from "react";

//immporting custom css
import "./ModalCarousel.css";

class ModalCarousel extends Component {
  constructor(props) {
    super();
  }

  render() {
    let settings = {
      infinite: false,
      speed: 500,
      arrows: false,
      slidesToShow: 1,
      centerMode: true
    };

    return (
      <div>
        {this.props.fetched ? (
          <div className="row">
            <div
              className="col-md-2"
              style={{textAlign: "left", marginTop: "25vh"}}
            >
              <button id="fadeshow1" onClick={this.props.switchLeft}>
                {"<"}
              </button>
            </div>
            <div className="col-md-8">
              <img
                style={{
                  display: "block",
                  margin: "auto",
                  marginTop: "5vh"
                }}
                src={this.props.modalImage}
              />
            </div>
            <div
              className="col-md-2"
              style={{textAlign: "right", marginTop: "25vh"}}
            >
              <button id="fadeshow1" onClick={this.props.switchRight}>
                {">"}
              </button>
            </div>
          </div>
        ) : (
          <div>Loading</div>
        )}
      </div>
    );
  }
}

export default ModalCarousel;

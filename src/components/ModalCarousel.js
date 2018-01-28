import React, {Component} from "react";

//immporting custom css
import "./ModalCarousel.css";

class ModalCarousel extends Component {
  constructor(props) {
    super();
  }

  switchRight() {}

  switchLeft() {}

  render() {
    let settings = {
      infinite: false,
      speed: 500,
      arrows: false,
      slidesToShow: 1,
      centerMode: true
    };

    if (this.props.fetched) {
      console.log("modal image =>", this.props.groups[0].images.href);
    }

    return (
      <div style={{}}>
        {this.props.fetched ? (
          <div className="row">
            <div
              className="col-md-2"
              style={{textAlign: "left", marginTop: "300px"}}
            >
              <button id="fadeshow1">{"<"}</button>
            </div>
            <div className="col-md-8">
              <img
                style={{
                  display: "block",
                  marginLeft: "auto",
                  marginRight: "auto",
                  marginTop: "100px"
                }}
                src={this.props.groups[0].images[0].href}
              />
            </div>
            <div
              className="col-md-2"
              style={{textAlign: "right", marginTop: "300px"}}
            >
              <button id="fadeshow1">{">"}</button>
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

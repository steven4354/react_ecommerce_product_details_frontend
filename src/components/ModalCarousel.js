import React, {Component} from "react";

//immporting custom css
import "./ModalCarousel.css";

class ModalCarousel extends Component {
  constructor() {
    super();
    this.state = {
      groups: [],
      fetched: false
    };
  }

  componentDidMount() {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url =
      "https://www.westelm.com/services/catalog/v4/category/shop/new/all-new/index.json"; // site that doesn’t send Access-Control-*
    fetch(proxyurl + url) // https://cors-anywhere.herokuapp.com/https://example.com
      .then(response => response.json())
      .then(contents => {
        this.setState({
          groups: contents.groups,
          fetched: true
        });
        console.log(contents);
      })
      .catch(() =>
        console.log("Can’t access " + url + " response. Blocked by browser?")
      );
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

    if (this.state.fetched) {
      console.log("modal image =>", this.state.groups[0].images.href);
    }

    return (
      <div style={{}}>
        {this.state.fetched ? (
          <div className="row">
            <div className="col-md-2">
              <button id="fadeshow1">{"<"}</button>
            </div>
            <div className="col-md-8">
              <img
                style={{
                  display: "block",
                  marginLeft: "auto",
                  marginRight: "auto",
                  marginTop: "20%"
                }}
                src={this.state.groups[0].images[0].href}
              />
            </div>
            <div className="col-md-2" style={{textAlign: "right"}}>
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

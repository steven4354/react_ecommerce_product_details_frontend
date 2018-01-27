import React, {Component} from "react";
import Slider from "react-slick";

class Carousel extends Component {
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

  render() {
    let settings = {
      infinite: false,
      speed: 500,
      arrows: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      variableWidth: true
    };

    console.log(this.state.groups);

    return (
      <div style={{marginTop: "10px"}}>
        <Slider {...settings}>
          {!this.state.fetched ? (
            <div>Loading</div>
          ) : (
            this.state.groups[0].images.map(obj => {
              return (
                <div width="100px" style={{textAlign: "center"}}>
                  <img height="100px" width="100px" src={obj.href} />
                </div>
              );
            })
          )}
        </Slider>
      </div>
    );
  }
}

export default Carousel;

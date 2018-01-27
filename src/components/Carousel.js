import React, {Component} from "react";
import Slider from "react-slick";

class Carousel extends Component {
  constructor() {
    super();
    this.state = {
      groups: []
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
          groups: contents.groups
        });
        console.log(contents);
      })
      .catch(() =>
        console.log("Can’t access " + url + " response. Blocked by browser?")
      );
  }

  render() {
    let settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true
    };

    return (
      <div>
        <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
        <nextArrow style={{color: "black"}} />
      </div>
    );
  }
}

export default Carousel;

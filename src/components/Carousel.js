import React, {Component} from "react";
import Slider from "react-slick";

class Carousel extends Component {
  constructor(props) {
    super();
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

    console.log(this.props.groups);

    return (
      <div style={{marginTop: "10px"}}>
        <Slider {...settings}>
          {!this.props.fetched ? (
            <div>Loading</div>
          ) : (
            this.props.groups[0].images.map(obj => {
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

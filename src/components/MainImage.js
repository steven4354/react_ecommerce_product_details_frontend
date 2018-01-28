import React, {Component} from "react";

class MainImage extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div style={{marginTop: "30px"}}>
        {this.props.fetched ? (
          <img src={this.props.groups[this.props.groupIndex].hero.href} />
        ) : (
          <div>Loading</div>
        )}
      </div>
    );
  }
}

export default MainImage;

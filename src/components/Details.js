import React, {Component} from "react";

class Details extends Component {
  constructor(props) {
    super();
  }

  render() {
    return !this.props.fetched ? (
      <div> Loading </div>
    ) : (
      <div>
        <h1
          style={{
            fontSize: "20px",
            fontFamily: "Times New Roman",
            textAlign: "left"
          }}
        >
          {this.props.groups[0].name}
        </h1>
        {this.props.groups[0].priceRange.type == "special" ? (
          <ul
            style={{
              textAlign: "left"
            }}
          >
            <li
              style={{
                fontSize: "15px",
                color: "red",
                fontStyle: "italic",
                display: "inline-block",
                padding: "0px",
                border: "0px"
              }}
            >
              Special Offer
            </li>
          </ul>
        ) : (
          <div />
        )}
        {this.props.groups[0].priceRange.regular ? (
          <div
            style={{
              fontSize: "15px",
              fontWeight: "bold",
              textAlign: "left"
            }}
          >
            Suggested Price ${this.props.groups[0].priceRange.regular.high}
          </div>
        ) : (
          <div />
        )}
        {this.props.groups[0].priceRange.regular ? (
          <div
            style={{
              fontSize: "15px",
              fontWeight: "bold",
              textAlign: "left",
              color: "red"
            }}
          >
            Sale ${this.props.groups[0].priceRange.selling.high}
          </div>
        ) : (
          <div
            style={{
              textAlign: "left",
              fontColor: "black"
            }}
          >
            Price ${this.props.groups[0].priceRange.selling.high}
          </div>
        )}
      </div>
    );
  }
}

export default Details;

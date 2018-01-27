import React, {Component} from "react";

class Details extends Component {
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
    return !this.state.fetched ? (
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
          {this.state.groups[0].name}
        </h1>
        {this.state.groups[0].priceRange.type == "special" ? (
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
        {this.state.groups[0].priceRange.regular ? (
          <div
            style={{
              fontSize: "15px",
              fontWeight: "bold",
              textAlign: "left"
            }}
          >
            Suggested Price ${this.state.groups[0].priceRange.regular.high}
          </div>
        ) : (
          <div />
        )}
        {this.state.groups[0].priceRange.regular ? (
          <div
            style={{
              fontSize: "15px",
              fontWeight: "bold",
              textAlign: "left",
              color: "red"
            }}
          >
            Sale ${this.state.groups[0].priceRange.selling.high}
          </div>
        ) : (
          <div
            style={{
              textAlign: "left",
              fontColor: "black"
            }}
          >
            Price ${this.state.groups[0].priceRange.selling.high}
          </div>
        )}
      </div>
    );
  }
}

export default Details;

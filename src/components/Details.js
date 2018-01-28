import React, {Component} from "react";

class Details extends Component {
  constructor(props) {
    super();
  }

  render() {
    //api call switch from price to priceRange
    var priceName;
    if (this.props.fetched && this.props.groups[this.props.groupIndex].price) {
      priceName = "price";
    } else {
      priceName = "priceRange";
    }

    return (
      <div>
        {!this.props.fetched ? (
          <div>Loading</div>
        ) : (
          <div>
            <h1
              style={{
                fontSize: "20px",
                fontFamily: "Times New Roman",
                textAlign: "left"
              }}
            >
              {this.props.groups[this.props.groupIndex].name}
            </h1>
            {this.props.groups[this.props.groupIndex][priceName].type ==
            "special" ? (
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
            {this.props.groups[this.props.groupIndex][priceName].regular ? (
              <div
                style={{
                  fontSize: "15px",
                  fontWeight: "bold",
                  textAlign: "left"
                }}
              >
                Suggested Price ${
                  this.props.groups[this.props.groupIndex][priceName].regular
                    .high
                }
              </div>
            ) : (
              <div />
            )}
            {this.props.groups[this.props.groupIndex][priceName].regular ? (
              <div
                style={{
                  fontSize: "15px",
                  fontWeight: "bold",
                  textAlign: "left",
                  color: "red"
                }}
              >
                Sale ${
                  this.props.groups[this.props.groupIndex][priceName].selling
                    .high
                }
              </div>
            ) : (
              <div
                style={{
                  textAlign: "left",
                  fontColor: "black"
                }}
              >
                Price ${
                  this.props.groups[this.props.groupIndex][priceName].selling
                    .high
                }
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
}

export default Details;

//  (
//   <div> Loading </div>
// ) : (
//
// );

import React, { Component } from "react";
// import Data from "../T_Shirts.json";

class T_Shirts extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="T_shirts_flexbox">
        {/* <p>T-Shirts</p> */}

        <img src={this.props.postDetail.photo} />
        <p>
          {this.props.postDetail.price} {this.props.postDetail.currency}
        </p>
        <button>Do košíku</button>
      </div>
    );
  }
}

export default T_Shirts;

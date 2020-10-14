import React, { Component } from "react";
class Basket extends Component {
  constructor(props) {
    super(props);
    this.state = {
      basket: [
        {
          id: 1,
          photo:
            "https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg",
          price: "849",
          currency: "Czk",
          amount: "1",
        },
      ],
    };
  }
  render() {
    return (
      <div>
        <p>Basket</p>
        <div>
          {this.state.basket.map((basketitem) => {
            return (
              <div>
                <img src={basketitem.photo}></img>
                <p>
                  {basketitem.price} {basketitem.currency}
                </p>
                <p>{basketitem.amount}</p>
              </div>
            );
          })}
          <button>Koupit</button>
        </div>
      </div>
    );
  }
}

export default Basket;

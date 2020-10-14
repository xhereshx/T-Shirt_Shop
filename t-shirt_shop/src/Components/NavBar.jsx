import React, { Component } from "react";
import "../App.scss";
import { Link } from "react-router-dom";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="nav_bar">
        <h1 className="nav_bar_header">Kovid Trička</h1>

        <div className="nav_bar_links">
          <Link className="nav_bar_products" to="/">
            Produkty
          </Link>
          <Link className="nav_bar_about_as " to="/o_nás">
            O Nás
          </Link>
          <Link className="nav_bar_basket" to="/košík">
            Košík
          </Link>
        </div>
      </div>
    );
  }
}

export default NavBar;

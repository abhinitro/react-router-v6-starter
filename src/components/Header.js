import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);

    this.move = this.move.bind(this);
  }

  move(e, url) {
    console.log(this.props);
    this.props.navigate(url);
  }

  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <a href="#news">News</a>
          </li>
          <li>
            <a onClick={(e) => this.move(e, "/contact")}>Contact</a>
          </li>
          <li>
            <Link to="/admin/about">About</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Header;

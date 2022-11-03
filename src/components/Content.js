import React, { Component } from "react";
import Footer from "./Footer";

class Content extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    this.state = {
      name: "Abhilash",
      bool: false,
      state: [],
    };
  }

  changeMethod(e) {
    e.preventDefault();
    let obj = {};
    obj[e.target.name] = e.target.value;
    this.setState(obj);
  }

  checkClick(e) {
    let bool = this.state.bool;
    if (this.state.name) this.setState({ bool: !bool });
  }

  render() {
    return (
      <div>
        {this.state.bool && <h1>{this.state.name}</h1>}

        <input
          type="text"
          value={this.state.name}
          name="name"
          onChange={(e) => this.changeMethod(e)}
        ></input>
        {!this.state.name && <span>* this field is required</span>}

        <button onClick={(e) => this.checkClick(e)}>
          {this.state.bool && this.state.name ? "hide name" : "See Name"}
        </button>
      </div>
    );
  }
}

export default Content;

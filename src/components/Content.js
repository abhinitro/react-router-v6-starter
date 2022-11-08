import React, { Component, PureComponent } from "react";
import { Container, Row, Col } from "reactstrap";
import SimpleReactValidator from "simple-react-validator";
import FormDataContext from "../context/FormData";
import withNavigate from "../Hoc/NavHoc";
import About from "../pages/About";
import Blog from "./Blog";

/****
 * PureComponent --- pure component
 * Hoc - high order component
 * hooks
 *
 */
class Content extends PureComponent {
  //Pure Component rerenders when state or props value be changed

  /***
   * Benefits
   * Performance increase
   * View Purpose mostly
   *
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      bool: false,
      state: [],
      input: [{ name: "" }],
      see: false,
    };

    this.validator = new SimpleReactValidator();
  }

  changeMethod(e) {
    e.preventDefault();
    let obj = {};
    obj[e.target.name] = e.target.value;
    this.props.getForm(obj);
    this.setState(obj);
  }

  checkClick(e) {
    e.preventDefault();
    let bool = this.state.bool;

    if (this.validator.allValid()) {
      if (this.state.name) this.setState({ bool: true, see: true });
      this.props.navigate("/about");
    } else {
      this.validator.showMessages();
      // rerender to show messages for the first time
      // you can use the autoForceUpdate option to do this automatically`
      this.forceUpdate();
    }
  }

  render() {
    return (
      <div>
        {!this.state.see ? (
          <Container>
            {this.state.bool && <h1>{this.state.name}</h1>}

            <Row>
              <Col md={2} sm={2}>
                cxvxcv
              </Col>
            </Row>
            <input
              type="text"
              value={this.state.name}
              name="name"
              onChange={(e) => this.changeMethod(e)}
            ></input>
            {this.validator.message("name", this.state.name, "required")}

            {!this.state.name && <span>* this field is required</span>}

            <button onClick={(e) => this.checkClick(e)}>
              {this.state.bool && this.state.name ? "hide name" : "See Name"}
            </button>
          </Container>
        ) : (
          <Blog />
        )}
      </div>
    );
  }
}

export default withNavigate(Content);

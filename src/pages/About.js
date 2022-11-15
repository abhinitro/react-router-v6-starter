import React, { Component } from "react";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "reactstrap";
import Content from "../components/Content";
import AuthContext from "../context/AuthContext";

import FormDataContext from "../context/FormData";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: "1",
    };
    this.myRef = React.createRef();
    this.currentContent = React.createRef();
  }

  toggle = (id) => {
    console.log();
    this.myRef.current.style.backgroundColor = "red";
    console.log(this.currentContent.current.click());
    if (this.state.open == id) {
      this.setState({ open: "" });
    } else {
      this.setState({ open: id });
    }
  };
  render() {
    const { open } = this.state;
    return (
      <div>
        <h1
          ref={this.myRef}
          id="myTitle"
          onClick={() => {
            alert("I ma clicked");
          }}
        >
          dsfsfd
        </h1>
        <Content divRef={this.currentContent} />
        <div>
          <FormDataContext.Consumer>
            {(item) => {
              return (
                <div>
                  <AuthContext.Consumer>
                    {(isAuth) => {
                      console.log("sxcszcx", item, isAuth);
                      return (
                        <Accordion open={open} toggle={this.toggle}>
                          <AccordionItem>
                            <AccordionHeader targetId="1">
                              Accordion Item 1
                            </AccordionHeader>
                            <AccordionBody accordionId="1">
                              <strong>
                                This is the first item&#39;s accordion body.
                              </strong>
                              You can modify any of this with custom CSS or
                              overriding our default variables. It&#39;s also
                              worth noting that just about any HTML can go
                              within the <code>.accordion-body</code>, though
                              the transition does limit overflow.
                            </AccordionBody>
                          </AccordionItem>
                          <AccordionItem>
                            <AccordionHeader targetId="2">
                              Accordion Item 2
                            </AccordionHeader>
                            <AccordionBody accordionId="2">
                              <strong>
                                This is the second item&#39;s accordion body.
                              </strong>
                              You can modify any of this with custom CSS or
                              overriding our default variables. It&#39;s also
                              worth noting that just about any HTML can go
                              within the <code>.accordion-body</code>, though
                              the transition does limit overflow.
                            </AccordionBody>
                          </AccordionItem>
                          <AccordionItem>
                            <AccordionHeader targetId="3">
                              Accordion Item 3
                            </AccordionHeader>
                            <AccordionBody accordionId="3">
                              <strong>
                                This is the third item&#39;s accordion body.
                              </strong>
                              You can modify any of this with custom CSS or
                              overriding our default variables. It&#39;s also
                              worth noting that just about any HTML can go
                              within the <code>.accordion-body</code>, though
                              the transition does limit overflow.
                            </AccordionBody>
                          </AccordionItem>
                        </Accordion>
                      );
                    }}
                  </AuthContext.Consumer>
                </div>
              );
            }}
          </FormDataContext.Consumer>
        </div>
      </div>
    );
  }
}

export default About;

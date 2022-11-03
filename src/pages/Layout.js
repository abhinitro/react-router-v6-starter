import React, { Component } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import withNavigate from "../Hoc/NavHoc";

class Layout extends Component {

    constructor(props){
        super(props);
    }
  render() {
    return (
      <div>
        <Header {...this.props}/>
        <Outlet {...this.props}/>

        <Footer  {...this.props} />
      </div>
    );
  }
}


//Hoc -High order component
export default withNavigate(Layout);

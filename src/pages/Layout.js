import React, { Component } from "react";

import { Outlet } from "react-router-dom";
import withNavigate from "../Hoc/NavHoc";

class Layout extends Component {
  render() {
    return (
      <div>
       <div>Header</div>
        <Outlet />

        <div>Footer</div>
      </div>
    );
  }
}

//Hoc -High order component
export default withNavigate(Layout);

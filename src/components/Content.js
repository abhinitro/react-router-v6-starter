import React, { PureComponent } from "react";

import axios from './../services/axios'


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
   * Functional
   * React
   * Redux
   * Redux middleware
   * Flux --- new tech
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    this.state = {
      arr: [],
    };

  }

  componentDidMount() {

    console.log("axios",axios);
    //sideEffects
    axios.get("/employees").then(response=>{

      console.log(response.data);

    }).catch(error=>{


    }) 
  }

  render() {
    return (
      <div>
        {this.state.arr.map((item, index) => {
          return (
            <div key={index}>
              <label>Name</label>:{item.name}
            </div>
          );
        })}
      </div>
    );
  }
}

export default Content;

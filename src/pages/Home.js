import React, { Component } from "react";

class Home extends Component {
  /****
   *
   * 1-Mounting ---- constructor getDerivedStateToProps render componentDIdMount
   * 2-Updation ---getDerivedStateToProps componentDIDUpdate,shoudlComponentupdate
   * 3-Unmounting---COmponentWillUnMount
   *
   *
   *
   *
   *
   */

  constructor(props) {
    super(props);
    this.state = {};

    console.log("First call");
  }
 // mounting Phase
  componentDidMount() {
    console.log("Third Call provide sideEffects =---- ready");
  }


  //Updation
  componentDidUpdate(prevProps,prevState){

      console.log("Update Fourth Call");

  }

//   shouldComponentUpdate(prevProps,prevState){

//     //you can control rerending by logcal

//     return true;



//   }


//UnMounting

 componentWillUnmount(){

    console.log("I am call lassst")
 }



  render() {
    console.log("Second call");
    return <div>Home</div>;
  }
}

export default Home;

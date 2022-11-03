import React, { Component } from 'react';

class Footer extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props);
   }

   componentWillUnmount(){

      console.log("-i am removed from data");

   }
    render() {
        return (
            <div>
                Footer {this.props.name}
            </div>
        );
    }
}

export default Footer;

import React, { Component } from 'react';
import withNavigate from '../Hoc/NavHoc';

class Contact extends Component {

    render() {
       return (
            <div>
                Contact {this.props.params.id}
            </div>
        );
    }
}

export default withNavigate(Contact);

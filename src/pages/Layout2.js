import React, { Component } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import withNavigate from '../Hoc/NavHoc';

class Layout2 extends Component {

    constructor(props){

        super(props);
    }

    render() {
        return (
            <div>
                <Header {...this.props}></Header>
                <Outlet/>
            </div>
        );
    }
}

export default withNavigate(Layout2);

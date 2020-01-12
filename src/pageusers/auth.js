import React, { Component } from 'react';
import {Route} from "react-router-dom";

import MenuBar from './auth/Layout/MenuBar';
import Header from './auth/Layout/Header';
import Footer from './auth/Layout/Footer';
import Content from './auth/Layout/Content';

// import Auth from './auth/auth';

export default class auth extends Component {
render(){
    return(
        <BrowserRouter>
            <Header></Header>
                <MenuBar></MenuBar>
                    <Route exact path="/" component={Content}/>
            <Footer></Footer>
        </BrowserRouter>
    )
}
}
import React, {Component} from 'react';
// import { Link } from "react-router-dom";
import Logout from '../../auth/Logout';

export default class Header extends Component {

    render(){
        // const { fName, lName } = this.state
        // console.log(this.state.Fname);
        // console.log(this.componentDidMount.fName);
        return(
            <div className>
                <header className="main-header">
                    {/* Logo */}
                    <a href="/" className="logo">
                    {/* mini logo for sidebar mini 50x50 pixels */}
                    <span className="logo-mini"><b>A</b>LT</span>
                    {/* logo for regular state and mobile devices */}
                    <span className="logo-lg"><b>นักศึกษา</b></span>
                    </a>
                    {/* Header Navbar: style can be found in header.less */}
                    <nav className="navbar navbar-static-top">
                    {/* Sidebar toggle button*/}
                    <a href="fake_url" className="sidebar-toggle" data-toggle="push-menu" role="button">
                        <span className="sr-only">Toggle navigation</span>
                    </a>
                    {/* Navbar Right Menu */}
                    <div className="navbar-custom-menu">
                        <ul className="nav navbar-nav">
                        {/* User Account: style can be found in dropdown.less */}
                        <Logout></Logout>
                        {/* Control Sidebar Toggle Button */}
                        {/* <li>
                            <a href="fake_url" data-toggle="control-sidebar"><i className="fa fa-gears" /></a>
                        </li> */}
                        </ul>
                    </div>
                    </nav>
                </header>
            </div>
        )
    
    }
}








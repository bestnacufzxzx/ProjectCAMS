import React, {Component} from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import Logout from '../../auth/Logout';
export default class Header extends Component {
    state = {
        lecturerID:[],
        fName : '',
        lName : ''
    }

    handleChange = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
        console.log(this.state)
    }

    componentWillMount () {
        // localStorage.setItem("user_id", '4');
        let lecturerID = localStorage.getItem("lecturerID");
        console.log(lecturerID);
        axios.get('http://localhost/cams_server/api/admin_showuser/getBeforelecturerID?lecturerID='+lecturerID)
            .then(response => {
            const result = response.data.response;
            result.forEach(element => {
                if(element.lecturerID === lecturerID){
                     this.setState({ 
                        lecturerID : element.lecturerID,
                        firstName : element.firstName,
                        lastName :element.lastName,
                    })
                    console.log(this.state.firstName )
                }
            });
    
            })
            .catch(error => {
            });
    
    }

    render(){
        return(
            <div className>
                <header className="main-header">
                    <a href="/" className="logo">
                    <span className="logo-mini"><b>A</b>LT</span>
                    <span className="logo-lg"><b>อาจารย์ผู้ประสานรายวิชา</b></span>
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








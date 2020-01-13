import React, {Component} from 'react';
import { Link } from "react-router-dom";

export default class Logout extends Component {

    state = {
        name : '',
    }

    componentDidMount = () =>{
        this.setState({
            name:localStorage.getItem("name"),
        })
    }

    RefreshPage = () => { 
        window.location.href = 'http://localhost:3000/'; 
    }

    logout = () => {
        localStorage.clear()
        this.RefreshPage();
    }

    render(){
        return(
            <li className="dropdown user user-menu">
                <a href="fake_url" className="dropdown-toggle" data-toggle="dropdown">
                    <i className="fa fa-gears"></i><span className="hidden-xs"> {this.state.name}</span>
                </a>
                <ul className="dropdown-menu">
                    {/* <li className="user-header">
                        <img src="/dist/img/user2-160x160.jpg" className="img-circle" alt="User" />
                        <p>
                        Alexander Pierce - Web Developer
                        <small>Member since Nov. 2012</small>
                        </p>
                    </li> */}
                    <li className="user-footer">
                        <div className="pull-left">
                        <Link to="/student/Profile" >
                            <button type="button" className="btn btn-default btn-flat" data-toggle="modal" data-target="#modal-default">ข้อมูลส่วนตัว</button>
                        </Link>
                        </div>
                        <div className="pull-right">
                            <button className="btn btn-default btn-flat" onClick={this.logout}>ออกจากระบบ</button>
                        </div>
                    </li>
                </ul>
            </li>
        )
    }

}
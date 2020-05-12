import React, {Component} from 'react';
import { Link } from "react-router-dom";

export default class Logout extends Component {

    state = {
        name : '',
        role: localStorage.getItem('role'),
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
        let role = this.state.role;
        console.log(role);
        if(role == 1 ){
            return(
              <li className="dropdown user user-menu">
                  <a href="fake_url" className="dropdown-toggle" data-toggle="dropdown">
                      <i className="fa fa-gears"></i><span className="hidden-xs"> {this.state.name}</span>
                  </a>
                  <ul className="dropdown-menu">
                      <li className="user-footer">
                          <div className="pull-left">
                              <Link to="/admin/Profile" >
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
      }else if(role == 4 || role == 5 || role == 6 ){
          return(
            <li className="dropdown user user-menu">
                <a href="fake_url" className="dropdown-toggle" data-toggle="dropdown">
                    <i className="fa fa-gears"></i><span className="hidden-xs"> {this.state.name}</span>
                </a>
                <ul className="dropdown-menu">
                    <li className="user-footer">
                        <div className="pull-left">
                            <Link to="/lecturer/Profile" >
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
    }else if(role == 7){
        return(
            <li className="dropdown user user-menu">
                <a href="fake_url" className="dropdown-toggle" data-toggle="dropdown">
                    <i className="fa fa-gears"></i><span className="hidden-xs"> {this.state.name}</span>
                </a>
                <ul className="dropdown-menu">
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
}
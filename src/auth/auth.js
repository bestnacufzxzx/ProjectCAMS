import React, { Component } from 'react';
import service_uri from '../components/variable/service_uri';
import axios from 'axios';
const initialState = {
    usernameError: "",
    passwordError: "",
}

export default class Auth extends Component {

    state = {
        username: '',
        password: '',
        initialState : initialState
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }
    validate = () =>{
        let  usernameError = "";
        let  passwordError = "";

        if (!this.state.username) {
            usernameError = "กรุณากรอกชื่อผู้ใช้งาน";
        }

        if (!this.state.password){
            passwordError = "กรุณากรอกรหัสผ่าน"
        }

        if(usernameError || passwordError){
            this.setState({ usernameError, passwordError });
            return false;
        }
        return true;

    }

    RefreshPage = () => { 
        window.location.href = ''; 
    }
    

    handleSubmit = () => {
        const isValid = this.validate();
        axios.post(service_uri+'Auth/login', {
            username: this.state.username,
            password: this.state.password
        })
        .then(res => {
            let data = res.data
            console.log(data)

            
            if(data.status){
                localStorage.setItem('token', data.token);
                localStorage.setItem('user_id', data.id);
                localStorage.setItem('name', data.name);
                localStorage.setItem('role', data.role);
                this.RefreshPage();

            }            
            if(this.state.username && this.state.password){
                alert(data.message);
            }
            if (isValid) {
                this.setState(initialState);
            }

        }, 3000)
    }

    render() {
        return (
            <div className="content hold-transition login-page">
                <div className="login-box">
                    <div className="login-logo">
                        <a href="../../index2.html"><b>เข้าสู่ระบบ</b></a>
                    </div>
                    <div className="login-box-body">
                        <p className="login-box-msg">ระบบลงทะเบียนเข้าเรียน</p>

                        <form onSubmit={this.handleSubmit} className="loginForm">
                        <div className="form-group has-feedback">
                            <input type="text" class="form-control form-control-lg" placeholder="ชื่อผู้ใช้งาน" name="username" id="username" value={this.state.username} onChange={this.handleChange} required="" className="form-control"/>
                            <span className="glyphicon glyphicon-user form-control-feedback"></span>
                            <div style={{color: "red"}}>{this.state.usernameError}</div>
                        </div>
                        <div className="form-group has-feedback">
                            <input type="password" class="form-control form-control-lg" placeholder="รหัสผ่าน" name="password" id="password" value={this.state.password} onChange={this.handleChange} required="" autocomplete="new-password" className="form-control"/>
                            <span className="glyphicon glyphicon-lock form-control-feedback"></span>
                            <div style={{color: "red"}}>{this.state.passwordError}</div>
                        </div>
                        <div className="row">
                            <div className="col-xs-12">
                                <button type="button" class="btn btn-primary btn-block btn-flat" onClick={ this.handleSubmit } >เข้าสู่ระบบ</button>
                            </div>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

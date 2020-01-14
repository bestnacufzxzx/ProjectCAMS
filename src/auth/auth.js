import React, { Component } from 'react';
// import service_uri from '../components/variable/service_uri';
import axios from 'axios';
import baseurl from '../auth/Baseurl';
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
        axios.post(baseurl+'api/Auth/login', {
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
                localStorage.setItem('username', this.state.username);

                if(data.role == 3 || data.role == 4 ||  data.role == 5 ||  data.role == 6){
                    let user_id = data.id

                    axios.get(baseurl+'api/loginusername/get_username_student_login?user_id='+user_id)
                    .then(response => {
                    const result = response.data.response;
                    result.forEach(element => {
                        if(element.user_id === user_id){
                            this.setState({ 
                                user_id : element.user_id,
                                lecturerID : element.lecturerID,
                              
                            })
                            console.log(this.state.lecturerID )
                            localStorage.setItem('lecturerID', this.state.lecturerID);
                            alert(data.message);
                            this.RefreshPage();

                        }
                    });
            
                    })
                    .catch(error => {
                    });
                }else if(data.role == 7){
                    this.RefreshPage();

                }else{
                    this.RefreshPage();
                }

            }

            if(this.state.username && this.state.password){
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

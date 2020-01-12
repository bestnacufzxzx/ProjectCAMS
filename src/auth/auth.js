import React, { Component } from 'react';
import service_uri from '../components/variable/service_uri';
import axios from 'axios';
// import Form from 'Form.css';
// import { FormErrors } from '../components/Formlogin/FormErrors';

const initialState = {
    // username: '',
    // password: '',
    // formErrors: {username: '', password: ''},
    // usernameValid: false,
    // passwordValid: false,
    // formValid: false
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

    // alertdata = () => { 
    //     alert("เข้าสู่ระบบ");
    //     this.RefreshPage();
    // }

    // validateField(fieldName, value) {
    //     let fieldValidationErrors = this.state.formErrors;
    //     let emailValid = this.state.emailValid;
    //     let passwordValid = this.state.passwordValid;
    
    //     switch(fieldName) {
    //       case 'email':
    //         emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
    //         fieldValidationErrors.email = emailValid ? '' : ' is invalid';
    //         break;
    //       case 'password':
    //         passwordValid = value.length >= 6;
    //         fieldValidationErrors.password = passwordValid ? '': ' is too short';
    //         break;
    //       default:
    //         break;
    //     }
    //     this.setState({formErrors: fieldValidationErrors,
    //                     emailValid: emailValid,
    //                     passwordValid: passwordValid
    //                   }, this.validateForm);
    //   }

    //   validateForm() {
    //     this.setState({formValid: this.state.emailValid && this.state.passwordValid});
    //   }
    
    //   errorClass(error) {
    //     return(error.length === 0 ? '' : 'has-error');
    //   }

    // RefreshPage = () =>{
    //     window.location.href = 'http://localhost:3000'; 
    // } 

    // value = () =>{
    //     this.state.password
    // }
    // value = () =>{
    //     this.state.username
    // }


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
                
               
                // this.alertdata();
                alert(data.message);

                // this.RefreshPage();

            }            
            if(this.state.username && this.state.password){
                alert(data.message);
            }
            if (isValid) {
                // console.log(this.state);
                this.setState(initialState);
            }

        }, 3000)
    }

    render() {
        // console.log(this.errors.password);
        return (
            
            <div className="content hold-transition login-page">
                <div className="login-box">
                    <div className="login-logo">
                        <a href="../../index2.html"><b>เข้าสู่ระบบ</b></a>
                    </div>
                    <div className="panel panel-default">
                        {/* <FormErrors formErrors={this.state.formErrors} /> */}
                    </div>
                    {/* <!-- /.login-logo --> */}
                    <div className="login-box-body">
                        <p className="login-box-msg">ระบบลงทะเบียนเข้าเรียน</p>

                        <form onSubmit={this.handleSubmit} className="loginForm">
                        <div className="form-group has-feedback">
                            {/* <TextInput type="email" className="form-control" placeholder="Email"/> */}
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
                            <div className="col-xs-8">
                            <div className="checkbox icheck">
                                <label>
                                {/* <TextInput type="checkbox"/> Remember Me */}
                                </label>
                            </div>
                            </div>
                            {/* <!-- /.col --> */}
                            <div className="col-xs-4">
                                <button type="button" class="btn btn-outline-success float-right" id="btnLogin" onClick={ this.handleSubmit } >เข้าสู่ระบบ</button>
                                {/* <button type="submit" className="btn btn-primary btn-block btn-flat">Sign In</button> */}
                            </div>
                            {/* <!-- /.col --> */}
                        </div>
                        </form>
                        {/* <div className="panel panel-default">
                            <FormErrors formErrors={this.state.formErrors} />
                        </div> */}
                    </div>
                    {/* <!-- /.login-box-body --> */}
                </div>
                {/* <!-- /.login-box --> */}
        </div>

        )
    }
}

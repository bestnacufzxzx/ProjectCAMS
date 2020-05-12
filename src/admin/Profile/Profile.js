import React, { Component } from 'react'
import TextInput from '../../components/TextInput';
import axios from 'axios';
import baseurl from '../../auth/Baseurl';
import { Link } from "react-router-dom";

const initialState = {
    prefixError: "",
    firstNameError: "",
    lastNameError: "",
    emailError: ""
}

export default class Profile extends Component {
    state = {
        data: [],
        initialState : initialState
    }
    componentDidMount(){
        let user_id = localStorage.getItem('user_id');
        // console.log(username);
        axios.get(baseurl+'api/profile/getprofilebyadmin?user_id='+user_id)
        .then(response => {
            const result = response.data.response;
            result.forEach(element => {
                if(element.user_id === user_id){
                        this.setState({ 
                        user_id : element.user_id,
                        prefix : element.prefix,
                        firstName : element.firstName,
                        lastName : element.lastName,
                        email : element.email,
                        phone : element.phone,
                        username : element.username
                    })
                }
            });

        })
        .catch(error => {
        });
        
    }

    onChangeHandle = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({[name]: value});
    } 

    validate = () =>{
        let  prefixError = "";
        let  firstNameError = "";
        let  lastNameError =  "";
        let  emailError =  "";
        // let chackemail = "";
        // chackemail = new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g).test(this.state.email);

        console.log(this.state.chackemail)
        if (!this.state.prefix) {
            prefixError = "กรุณาคำนำหน้าชื่อ";
        }
        if (!this.state.firstName ) {
            firstNameError = "กรุณากรอกชื่อจริง";
        }
        if (!this.state.lastName ) {
            lastNameError = "กรุณากรอกนามสกุลจริง";
        }
        if (!this.state.email ) {
            emailError = "กรุณากรอกอีเมล์";
        }
        // if(chackemail == false){
        //     emailError = "กรุณากรอกอีเมล์ให้อยู่ในรูปแบบ test@gmail.com";
        // }else{
        //     this.setState({chackemail : chackemail})
        // }
        
        if(prefixError || firstNameError || lastNameError || emailError){
            this.setState({ prefixError });
            this.setState({ firstNameError });
            this.setState({ lastNameError });
            this.setState({ emailError });
            console.log(this.state.chackemail,this.state.email,this.state.emailError)

            return false;
        }
        return true;

    }

    profileupdate = (event) => {
        console.log(this.state.chackemail)
        event.preventDefault();
        const isValid = this.validate();
        if( this.state.prefix != "" && this.state.firstName != "" && this.state.lastName != "" &&  this.state.email != "" ){
            axios.post(baseurl+'api/Profile/updateprofilebystudent/', {
                user_id: this.state.user_id,
                prefix : this.state.prefix,
                firstName : this.state.firstName,
                lastName : this.state.lastName,
                email : this.state.email,
                phone : this.state.phone,
                username : this.state.username,
                password : this.state.password
            })
            .then(res => {
            alert("บันทึกสำเร็จ")
                this.RefreshPage();
            })
            .catch(error => {
                console.log("====>",error.status);
            });
        }else if (isValid) {
            this.setState(initialState);
        }

    }


    render() {
        return (
            <div className="content-wrapper">
                <div className="content body">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="box box-primary">
                                <div className="box-body">
                                    <form onSubmit={this.profileupdate}>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div class="col-md-2">
                                                    <div class="form-group input-group-sm">
                                                        <label>คำนำหน้า</label><span class="text-danger"> *</span>
                                                        <input type="text" class="form-control form-control-lg" placeholder="กรอกคำนำหน้า" name="prefix" id="prefix" value={this.state.prefix} onChange={this.onChangeHandle} required="" className="form-control"/>
                                                        {/* <TextInput value={this.state.prefix} inputname="prefix" classes="form-control" placeholder="กรอกคำนำหน้า" change={this.onChangeHandle} /> */}
                                                        <div style={{color: "red"}}>{this.state.prefixError}</div>
                                                    </div>
                                                </div>
                                                <div class="col-md-5">
                                                    <div class="form-group input-group-sm">
                                                        <label>ชื่อ</label><span class="text-danger"> *</span>
                                                        <input type="text" class="form-control form-control-lg" placeholder="กรอกชื่อจริง" name="firstName" id="firstName" value={this.state.firstName} onChange={this.onChangeHandle} required="" className="form-control"/>
                                                        <div style={{color: "red"}}>{this.state.firstNameError}</div>
                                                    </div>
                                                </div>
                                                <div class="col-md-5">
                                                    <div class="form-group input-group-sm">
                                                        <label>นามสกุล</label><span class="text-danger"> *</span>
                                                        <input type="text" class="form-control form-control-lg" placeholder="กรอกนามสกุล" name="lastName" id="lastName" value={this.state.lastName} onChange={this.onChangeHandle} required="" className="form-control"/>
                                                        <div style={{color: "red"}}>{this.state.lastNameError}</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div class="col-md-7">
                                                    <div class="form-group input-group-sm">
                                                        <label>อีเมล์</label><span class="text-danger"> *</span>
                                                        <TextInput value={this.state.email} inputname="email" classes="form-control" placeholder="กรอกอีเมล์" change={this.onChangeHandle} />
                                                        <div style={{color: "red"}}>{this.state.emailError}</div>
                                                    </div>
                                                </div>
                                                <div class="col-md-5">
                                                    <div class="form-group input-group-sm">
                                                        <label>เบอร์โทร</label>
                                                        <input type="number" class="form-control form-control-lg" placeholder="กรอกเบอร์โทร" name="phone" id="phone" value={this.state.phone} onChange={this.onChangeHandle} required="" className="form-control" maxlength="10"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div class="col-md-7">
                                                    <div class="form-group input-group-sm">
                                                        <label>ชื่อผู้ใช้งาน</label>
                                                        <TextInput value={this.state.username} inputname="username" classes="form-control" placeholder="ชื่อผู้ใช้งาน" change={this.onChangeHandle} />
                                                    </div>
                                                </div>
                                                <div class="col-md-5">
                                                    <div class="form-group input-group-sm">
                                                        <label>รหัสผ่าน</label>
                                                        <TextInput value={this.state.password} inputname="password" classes="form-control" placeholder="รหัสผ่าน" change={this.onChangeHandle} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <รูปทำไง> */}
                                    </form>
                                    <div class="modal-footer">
                                        <Link to="/admin/ShowCourse" >
                                            <button type="button" class="btn btn-danger pull-left"> กลับ </button>
                                        </Link>
                                        <button type="submit" class="btn btn-success" onClick={this.profileupdate}> บันทึก</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
     
        )
    }
}


import React, { Component } from 'react'
// import TextInput from '../../components/TextInput';
import Breadcrumb from '../../components/Breadcrumb';
import { Link } from "react-router-dom";
import axios from 'axios';
import baseurl from '../../auth/Baseurl';

export default class Profile extends Component {
    
    state = {
        lecturers:[],
        // firstName: '',
        // lastName: '',
        // email: '',
        // phoneNumber: '',
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
        // this.setState({user_id});
        // const  lecturerID  = this.props.match.params.lecturerID;
        console.log(lecturerID );
        axios.get(baseurl+'api/admin_showuser/getBeforelecturerID?lecturerID='+lecturerID)
            .then(response => {
            const result = response.data.response;
            result.forEach(element => {
                if(element.lecturerID === lecturerID){
                     this.setState({ 
                        lecturerID : element.lecturerID,
                        prefix : element.prefix,
                        firstName : element.firstName,
                        lastName :element.lastName,
                        email :element.email,
                        phoneNumber :element.phoneNumber,
                    })
                    console.log(this.state.firstName )
                }
            });
    
            })
            .catch(error => {
            });
    
    }

    handleSubmit = (event) => {
        let lecturerID = localStorage.getItem("lecturerID");
        event.preventDefault();
        axios.post(baseurl+'api/admin_showuser/post_updatelecturer/', {
            lecturerID: lecturerID,
            prefix: this.state.prefix,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            phoneNumber: this.state.phoneNumber,
        })
        .then(res => {
        alert("บันทึกสำเร็จ")
            this.RefreshPage();
        })
        .catch(error => {
            console.log("====>",error.status);
            alert("กรุณากรอกข้อมูลให้ครบ")
        });
    }

    
    RefreshPage = () => { 
        window.location.href = 'http://localhost:3000/lecturer/Profile'; 
    }

    componentDidMount(){
        const script = document.createElement("script");
        script.src = '../js/Showimportteacher/content.js';
        script.async = true;
        document.body.appendChild(script);
    }


    render() {
        return (
   
             <div className="content-wrapper">
                <Breadcrumb header="แก้ไขประวัติส่วนตัว" subheader="" arrow={
                    [
                        // {"icon":"", "title":"อาจารย์", "link":"#", "active":"active"}
                    ]
                } />

                
                <div className="content body">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="box box-primary">
                                <div className="box-body">
                                    <br />
                                    <form onSubmit={this.handleSubmit}>
                                        <div className="row">
                                            <div className="col-sm-12">
                                                <div class="col-md-4">
                                                    <div class="form-group input-group-sm">
                                                        <label>คำนำหน้าชื่อ</label>
                                                        <input type="text" class="form-control" name="prefix" id="prefix" value={this.state.prefix} onChange={this.handleChange}/>
                                                    </div>
                                                </div>
                                                <div class="col-md-4">
                                                    <div class="form-group input-group-sm">
                                                        <label>ชื่อ</label>
                                                        <input type="text" class="form-control" name="firstName" id="firstName" value={this.state.firstName} onChange={this.handleChange}/>
                                                    </div>
                                                </div>
                                                <div class="col-md-4">
                                                    <div class="form-group input-group-sm">
                                                        <label>นามสกุล</label>
                                                        <input type="text" class="form-control" name="lastName" id="lastName" value={this.state.lastName} onChange={this.handleChange}/>
                                                    </div>
                                                </div>
                                                <div class="col-md-4">
                                                    <div class="form-group input-group-sm">
                                                        <label>อิเมล์</label>
                                                        <input type="text" class="form-control" name="email" id="email" value={this.state.email} onChange={this.handleChange}/>
                                                    </div>
                                                </div>
                                                <div class="col-md-4">
                                                    <div class="form-group input-group-sm">
                                                        <label>เบอร์โทร</label>
                                                        <input type="number" class="form-control" name="phoneNumber" id="phoneNumber" value={this.state.phoneNumber} onChange={this.handleChange}/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="box-footer clearfix">
                                            <input type="hidden" name="" value=""/>
                                            <button type="submit" className="pull-right btn btn-success" onClick={ this.handleChange }>
                                                <i className="fa fa-arrow-circle-right"></i> บันทึก
                                            </button>
                                            <Link to="/admin/ShowImportteacher"><button type="button" className="pull-right btn btn-danger"><i className="fa fa-arrow-circle-left"></i>  กลับ </button> </Link>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


     
        )
    }
}
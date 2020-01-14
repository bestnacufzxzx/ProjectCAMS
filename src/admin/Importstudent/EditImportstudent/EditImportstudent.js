import React, { Component } from 'react'
import Breadcrumb from '../../../components/Breadcrumb';
import { Link } from "react-router-dom";
import axios from 'axios';
import baseurl from '../../../auth/Baseurl';

export default class EditImportstudent extends Component {

    state = {
        students:[],
    }

    
    handleChange = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
        console.log(this.state)
    }

    componentWillMount () {
        const  studentID  = this.props.match.params.studentID;
        console.log(studentID );
        axios.get(baseurl+'api/admin_showuser/getBeforestudentID?studentID='+studentID)
            .then(response => {
            const result = response.data.response;
            result.forEach(element => {
                if(element.studentID === studentID){
                     this.setState({ 
                        studentID : element.studentID,
                        prefix : element.prefix,
                        firstName : element.firstName,
                        lastName :element.lastName,
                        email :element.email,
                        phone :element.phone,
                    })
                }
            });
    
            })
            .catch(error => {
            });
    
    }

    handleSubmit = (event) => {
        event.preventDefault();
        axios.post(baseurl+'api/admin_showuser/post_updatestudent/', {
            studentID: this.state.studentID,
            prefix: this.state.prefix,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            phone: this.state.phone,
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
        window.location.href = 'http://localhost:3000/admin/Showimportstudent'; 
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
                <Breadcrumb header="แสดงรายชื่อนักศึกษา" subheader="" arrow={
                    [
                        {"icon":"", "title":"นักศึกษา", "link":"#", "active":"active"}
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
                                                        <label>คำนำหน้า</label>
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
                                                        <label>รหัสนัศึกษา</label>
                                                        <input type="number" class="form-control" name="studentID" id="studentID" value={this.state.studentID} onChange={this.handleChange}/>
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
                                                        <input type="number" class="form-control" name="phone" id="phone" value={this.state.phone} onChange={this.handleChange}/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="box-footer clearfix">
                                            <input type="hidden" name="" value=""/>
                                            <button type="submit" className="pull-right btn btn-success" onClick={ this.handleChange }>
                                                <i className="fa fa-arrow-circle-right"></i> บันทึก
                                            </button>
                                            <Link to="/admin/Showimportstudent"><button type="button" className="pull-right btn btn-danger"><i className="fa fa-arrow-circle-left"></i>  กลับ </button> </Link>
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
import React, { Component } from 'react'
import Breadcrumb from '../../components/Breadcrumb';
import { Link } from "react-router-dom";
import axios from 'axios';
import service_uri from '../../components/variable/service_uri';
const initialState = {
    lecturerIDError: "",
    roleIDError: "",
}
export default class Createteaching extends Component {

          
state = {
    Allourses:[],
    courseCode:'',
    courseName:'',
    Allstudent:[],
    courseID: '',
    All_lecturers:[],
    lecturers:'',
    lecturerID:'',
    firstName:'',
    lastName:'',
    roleID:'',
    initialState : initialState

}

handleChange = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
    console.log(this.state)
}

RefreshPage = () => { 
    window.location.href = 'http://localhost:3000/admin/Showteaching/'+this.state.courseID; 
}

componentDidMount(){
    const  courseID  = this.props.match.params.courseID;
    this.setState({courseID});
    // this.getAllCourse();
    this.getAlllecturer();
}

validate = () =>{
    let  lecturerIDError = "";
    let  roleIDError = "";

    if (!this.state.lecturerID) {
        lecturerIDError = "กรุณากรอกชื่อผู้ใช้งาน";
    }

    if (!this.state.roleID){
        roleIDError = "กรุณากรอกรหัสผ่าน"
    }

    if(lecturerIDError || roleIDError){
        this.setState({ lecturerIDError, roleIDError });
        return false;
    }
    return true;

}

getAlllecturer = () => {
    axios.get(service_uri+'Admin_teaching/get_all_lecturer')
    .then(res => {
        this.setState({ All_lecturers: res.data });
    })
    .catch(error => {
        console.log("====>",error.status);
    });
}
handleSubmit = (event) =>{
    event.preventDefault();
    const isValid = this.validate();
    
    if(this.state.lecturerID != "" && this.state.roleID != ""){
        axios.post(service_uri+'admin_teaching/update_status_teaching', {

            lecturerID : this.state.lecturerID,
            courseID: this.state.courseID,
            roleID: this.state.roleID,
    
        }).then(res => {
            alert("บันทึกสำเร็จ")
            this.RefreshPage();
        }).catch(error => {
            alert("ไม่สามารถสร้างประเภทอาจารย์กับรายวิชาซ้ำได้")
            console.log("====>",error.status);
        });
    }else if (isValid) {
        this.setState(initialState);
    }
}

    render() {
        // console.log(this.state.lecturerID, this.state.courseID, this.state.roleID)
        return (
   
             <div className="content-wrapper">
                  <Breadcrumb header="กำหนดสถานะผู้สอนในรายวิชาอาจารย์" subheader="" arrow={
                    [
                        // {"icon":"", "title":"กำหนดการเรียนการสอน", "link":"#", "active":"active"}
                    ]
                } />

                <div className="content body">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="box box-primary">
                                <div className="box-body">
                                    <br />
                                    <form onSubmit={this.handleSubmit}>
                                    <div className="row">
                                        <div class="col-md-6">
                                            <div class="form-group input-group-sm">
                                                <label for="lecturers" type="text" class="col-form-label">ชื่ออาจารย์</label>
                                                <select name="lecturerID" class="form-control" onChange={this.handleChange} value={this.state.lecturerID}>
                                                    <option value="">เลือกอาจารย์</option>
                                                { this.state.All_lecturers.map((all_lecturer,i) => (
                                                    <option value={all_lecturer.lecturerID}>{all_lecturer.firstName+' '+all_lecturer.lastName}</option>
                                                )) }
                                                </select>
                                                <div style={{color: "red"}}>{this.state.lecturerIDError}</div>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group input-group-sm">
                                                <label for="teaching" type="text" class="col-form-label">ประเภทอาจารย์  </label>
                                                <select name="roleID" class="form-control" onChange={this.handleChange} value={this.state.roleID}>
                                                    <option class="active" value="">ประเภทอาจารย์</option>
                                                    <option value="3">อาจารย์ผู้สอน</option>
                                                    <option value="4">อาจารย์ผู้ประสานรายวิชา</option>
                                                    <option value="5">อาจารย์ผู้ประสานรายวิชาและอาจารย์ผู้สอน</option>
                                                </select>
                                                <div style={{color: "red"}}>{this.state.roleIDError}</div>
                                            </div>
                                        </div>
                                    </div>
                                        <div className="box-footer clearfix">
                                            <input type="hidden" name="" value=""/>
                                            <button type="submit" className="pull-right btn btn-success" onClick={ this.handleChange }>
                                                <i className="fa fa-arrow-circle-right"></i> บันทึก
                                            </button>
                                            <Link to={'/admin/Showteaching/'+this.state.courseID}><button type="button" className="pull-right btn btn-danger"><i className="fa fa-arrow-circle-left"></i>  กลับ </button> </Link>
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


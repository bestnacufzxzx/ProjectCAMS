import React, { Component } from 'react'
import axios from 'axios';
import service_uri from '../../../components/variable/service_uri';
import { Link } from "react-router-dom";
import Breadcrumb from '../../../components/Breadcrumb';


export default class CreateCourse extends Component {

       
state = {
    Allourses:[],
    courseCode:'',
    courseName:'',
    Allstudent:[],
    courseID: ''
}

handleChange = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
    console.log(this.state)
}

RefreshPage = () => { 
    window.location.href = 'http://localhost:3000/lecturer/Course'; 
}

componentDidMount(){
    this.getAllCourse();
}

getAllCourse = () => {
    axios.get(service_uri+'lecturers/getAllourse')
    .then(res => {
        this.setState({ Allourses: res.data });
    })
    .catch(error => {
        console.log("====>",error.status);
    });
}
handleSubmit = (event) =>{
    event.preventDefault();
    let lecturerID = localStorage.getItem("lecturerID");
    axios.post(service_uri+'lecturers/createcouresbylecturer', {

        lecturerID : lecturerID,
        courseID: this.state.courseID,
        })
        .then(res => {
    
        alert("บันทึกสำเร็จ")
        this.RefreshPage();
        })
        .catch(error => {
        console.log("====>",error.status);
        });
}

    render() {
        return (
   
             <div className="content-wrapper">
                  <Breadcrumb header="สร้างรายวิชาเรียน" subheader="" arrow={
                    [
                        // {"icon":"", "title":"กำหนดการเรียนการสอน", "link":"#", "active":"active"}
                    ]
                } />
                <div className="content body">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="box box-primary">
                                <div className="box-body">
                                    <br />
                                    <form onSubmit={this.handleSubmit}>
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <div class="form-group input-group-sm">
                                                <label for="courseCode" type="text" class="col-form-label">รหัสวิชา - ชื่อวิชา
                                                </label>
                                                <select name="courseID" class="form-control" onChange={this.handleChange}>
                                                    <option>เลือกรายวิชา</option>
                                                { this.state.Allourses.map((allourse,i) => (
                                                    <option value={allourse.courseID}>{allourse.courseCode+' '+allourse.courseName}</option>
                                                )) }
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="box-footer clearfix">
                                        <input type="hidden" name="" value=""/>
                                        <button type="submit" className="pull-right btn btn-success" onClick={ this.handleChange }>
                                            <i className="fa fa-arrow-circle-right"></i> บันทึก
                                        </button>
                                        <Link to="/lecturer/Course"><button type="button" className="pull-right btn btn-danger"><i className="fa fa-arrow-circle-left"></i>  กลับ </button> </Link>
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


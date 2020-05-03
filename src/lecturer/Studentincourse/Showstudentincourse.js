import React, { Component } from 'react'
import Breadcrumb from '../../components/Breadcrumb';
import { Link } from "react-router-dom";
// import Modaleditcourse from './EditCourse/Modaleditcourse';
import axios from 'axios';
// import service_uri from '../../components/variable/service_uri';
import baseurl from '../../auth/Baseurl';


export default class Setstudentincourse extends Component {

    state = {
        courses : [],
    }

    createcourseID(courseID,courseCode,courseName){
        let namecourse = courseCode+" "+courseName;
        return(
            <Link to={'/lecturer/Createstudentincourse/'+courseID+"/"+namecourse}>
                <button type="button" className="btn btn-info"> <i class="fa fa-plus" aria-hidden="true"> สร้างนักศึกษาในรายวิชา </i> </button>&nbsp;
            </Link> 
        )
    }

    componentDidMount(){

        let lecturerID = localStorage.getItem("lecturerID");
        let roleID = localStorage.getItem("role");
        console.log("lecturerID"+lecturerID);
        // axios.get(baseurl+'api/lecturers/getCourseByteaching?lecturerID='+lecturerID+"&roleID="+roleID)
        axios.get(baseurl+'api/lecturers/getCourseByteachingNoRole?lecturerID='+lecturerID)
        .then(res => {
        this.setState({ courses: res.data });
        })
        .catch(error => {
        console.log("====>",error.status);
        });
    }
   

    render() {
        return (
             <div className="content-wrapper">
                <Breadcrumb header="กำหนดนักศึกษาในรายวิชา" subheader="" arrow={
                    [
                        // {"icon":"", "title":"กำหนดนักศึกษาในรายวิชา", "link":"#", "active":"active"}
                    ]
                } />
                <div className="content body">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="box box-primary">
                                <div className="box-body">
                                    <br />
                                    <div className="row">
                                        <div className="col-sm-12 table-responsive">
                                        <table id="example2" className="table table-bordered table-hover dataTable" role="grid" aria-describedby="example2_info">
                                                <thead>
                                                    <tr>
                                                        <th className="col-sm-1" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending">ลำดับ</th>
                                                        <th className="col-sm-8" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending">รายชื่อวิชา</th>
                                                        <th className="col-sm-3" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" >การจัดการ</th>
                                                    </tr>
                                                </thead>
                                                <tbody >
                                                { this.state.courses.map((course, i) => (
                                                        <tr role="row">
                                                            <td>{i+1}</td>
                                                            <td>{course.courseCode} {course.courseName}</td>
                                                            <td className="text-center">
                                                                {this.createcourseID(course.courseID, course.courseCode, course.courseName)}
                                                                {/*  {this.renderdelete(course.teachingID)} */}
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
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
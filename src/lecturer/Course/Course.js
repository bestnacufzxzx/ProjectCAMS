import React, { Component } from 'react'
import Breadcrumb from '../../components/Breadcrumb';
import { Link } from "react-router-dom";
// import Modaleditcourse from './EditCourse/Modaleditcourse';
import Modalecreatecourse from './CreateCourse/Modalecreatecourse';
import axios from 'axios';
import service_uri from '../../components/variable/service_uri';
import baseurl from '../../auth/Baseurl';


export default class Course extends Component {

    state = {
        courses : [],
        // sum : null
    }
    rendercourseID(course){
        let courseID = (course.courseID);
        return(
            <Link to={'/lecturer/Teachs/'+courseID}>
                <button type="button" className="btn btn-success"> <i class="fa fa-eye" aria-hidden="true"> </i> </button>&nbsp;
            </Link> 
        )
    }

    renderdelete(course){
        return(
            <button type="button" className="btn btn-danger" onClick={() => this.handleRemove(course)}><i class="fa fa-trash" aria-hidden="true"></i> </button>
        )
    }
    RefreshPage=()=> { 
        window.location.href = 'http://localhost:3000/lecturer/Course'; 
    }
    handleRemove = (course) => {
        let teachingID = course.teachingID;
        let courseID = course.courseID;
        console.log(teachingID+"asdasd  "+courseID);
        const url = service_uri +'lecturers/get_delete?teachingID='+teachingID+"&courseID="+courseID;
        axios.get(url)
            .then(res => {
                alert("บันทึกสำเร็จ")
            this.RefreshPage();
            })
                .catch(error => {
                console.log("====>",error.status);
                alert("มีนักศึกษาลงทะเบียนในรายวิชา")
            });
    } 

    componentDidMount(){

        let lecturerID = localStorage.getItem("lecturerID");
        console.log("lecturerID"+lecturerID);
        axios.get(baseurl+'api/lecturers/getCourseByteaching?lecturerID='+lecturerID)
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
                <Breadcrumb header="กำหนดการเรียนการสอน" subheader="" arrow={
                    [
                        {"icon":"", "title":"กำหนดการเรียนการสอน", "link":"#", "active":"active"}
                    ]
                } />
                <div className="content body">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="box theader-search-sky">
                                <div class="box-header">                   
                                    <div className="row">
                                        <form action="" method="POST" id="">
                                            <div className="col-md-2 form-group"></div>
                                            <div className="col-md-3 form-group">
         
                                            </div>
                                            <div className="col-md-3 form-group">
                                                {/* <input type="text" className="form-control" name="searchText" value="" placeholder="ค้นหา"/> */}
                                            </div>
                                            <div className="col-md-2 form-group">
                                                {/* <button type="submit" className="btn btn-block btn-info pull-right"><i class="fa fa-search" aria-hidden="true"></i> ค้นหา</button>  */}
                                            </div>
                                        </form>
                                        <div className="col-md-2">
                                            {/* <Link to="/lecturer/CreateCourse">
                                                <button type="button" className="btn btn-block btn-info pull-right"><i class="fa fa-plus" aria-hidden="true"></i> สร้าง</button>
                                            </Link> */}
                                            <Modalecreatecourse />
                                         </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="box box-primary">
                                <div className="box-body">
                                    <br />
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <table id="example2" className="table table-bordered table-hover dataTable" role="grid" aria-describedby="example2_info">
                                                <thead>
                                                    <tr>
                                                        <th className="col-sm-1" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending">ลำดับ</th>
                                                        <th className="col-sm-2" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending">รหัสวิชา</th>
                                                        <th className="col-sm-2" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending">ชื่อวิชา</th>
                                                        <th className="col-sm-2" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" >การจัดการ</th>
                                                    </tr>
                                                </thead>
                                                <tbody >
                                                { this.state.courses.map((course, i) => (
                                                        <tr role="row">
                                                            <td>{i+1}</td>
                                                            {/* <td>{history}</td> */}
                                                            <td>{course.courseCode}</td>
                                                            <td>{course.courseName}</td>
                                                            {/* <td>{course.lastName}</td> */}
                                                            <td className="text-center">
                                                                {this.rendercourseID(course)}
                                                                {/* {this.rendereditcourse(course)} */}
                                                                {this.renderdelete(course)}
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
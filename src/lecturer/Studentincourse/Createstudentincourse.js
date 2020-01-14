import React, { Component } from 'react'
import Breadcrumb from '../../components/Breadcrumb';
import { Link } from "react-router-dom";
// import Modaleditcourse from './EditCourse/Modaleditcourse';
import axios from 'axios';
import service_uri from '../../components/variable/service_uri';
import baseurl from '../../auth/Baseurl';



export default class Createstudentincourse extends Component {

    state = {
        courses : [],
    }

    deletestudentincourseID(studentsregeterID){
        return(
            <button type="button" className="btn btn-danger" onClick={() => this.handleRemove(studentsregeterID)}><i class="fa fa-trash" aria-hidden="true"></i> </button>
        )
    }

    handleRemove = (studentsregeterID) => {

        const url = service_uri +'admin_showcourse/get_delete_studentsregeter?studentsregeterID='+studentsregeterID;
        axios.get(url)
            .then(res => {
                console.log(res);
            })
            alert("ลบสำเร็จ")
            this.RefreshPage();
    } 

    createcourseID(courseID){
        this.setState(courseID);
        console.log(this.state.courseID);
        return(
            <Link to={'/lecturer/Teachs/'+courseID}>
                <button type="button" className="btn btn-info"> <i class="fa fa-plus" aria-hidden="true"> สร้างนักศึกษาในรายวิชา </i> </button>&nbsp;
            </Link> 
        )
    }

    componentDidMount(){
        let lecturerID = localStorage.getItem("lecturerID");
        const  courseID  = this.props.match.params.courseID;
        this.setState({courseID});
        console.log("lecturerID"+lecturerID+"courseID"+this.state.courseID);
        axios.get(baseurl+'api/lecturers/get_studentByCourses?lecturerID='+lecturerID+"&courseID="+courseID)
        .then(res => {
        this.setState({ courses: res.data });
        })
        .catch(error => {
        console.log("====>",error.status);
        });
    }
    RefreshPage = () => { 
        window.location.href = 'http://localhost:3000/lecturer/Createstudentincourse/'+this.state.courseID; 
    }

    render() {
        return (
             <div className="content-wrapper">
                <Breadcrumb header="สร้างนักศึกษาในรายวิชา "subheader="" arrow={
                    [
                        // {"icon":"", "title":"สร้างนักศึกษาในรายวิชา", "link":"#", "active":"active"}
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
                                            <Link to={'/lecturer/Createstudent/'+this.state.courseID}>
                                                <button type="button" className="btn btn-block btn-info pull-right"><i class="fa fa-plus" aria-hidden="true"></i> สร้าง</button>
                                            </Link>
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
                                                        <th className="col-sm-8" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending">ชื่อ-นาสกุล นักศึกษา</th>
                                                        <th className="col-sm-3" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" >การจัดการ</th>
                                                    </tr>
                                                </thead>
                                                <tbody >
                                                { this.state.courses.map((course, i) => (
                                                        <tr role="row">
                                                            <td>{i+1}</td>
                                                            <td>{course.prefix} {course.firstName} {course.lastName}</td>
                                                            <td className="text-center">
                                                                {this.deletestudentincourseID(course.studentsregeterID)}
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
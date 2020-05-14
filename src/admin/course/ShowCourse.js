import React, { Component } from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import { Link } from "react-router-dom";
import axios from 'axios';
import service_uri from '../../components/variable/service_uri';
import baseurl from '../../auth/Baseurl';

const initialState = {
    courseCodeError: "",
    courseNameError: "",
}
export default class ShowCourse extends Component {
    state = {
        courses: []
    }

    onChangeHandle = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({[name]: value});
    } 

    renderviewteaching(course){
        let courseID = course.courseID;
        return(
            <Link to={'Showteaching/'+courseID}>
                &nbsp; <button type="button" className="btn btn-success"> <i class="fa fa-eye" aria-hidden="true"> </i> </button>&nbsp;
            </Link>
        )
    }

    renderdelete(courseID){
        return(
            <button type="button" className="btn btn-danger" onClick={() => this.handleRemove(courseID)}><i class="fa fa-trash" aria-hidden="true"></i> </button>
        )
    }

    renderedit(course){
        return(
            <button type="button"className="btn btn-success" data-toggle="modal" data-target="#exampleModal" onClick={((e) => this.onclick_modal(e,course))}><i class="fa fa-edit" aria-hidden="true"> </i></button>
        );
    }

    handleRemove = (courseID) => {

        const url = service_uri +'admin_showcourse/get_delete_courseid?courseID='+courseID;
        axios.get(url)
            .then(res => {
                console.log(res);
            })
            alert("ลบสำเร็จ")
            this.RefreshPage();
    } 

    onclick_modal = (e,courseID) => {
        axios.get(baseurl+'api/admin_showcourse/get_id_getcourses?courseID='+courseID)
        .then(res => {
            const result = res.data;
            result.forEach(element => {
                if(element.courseID === courseID){
                        this.setState({ 
                        courseID : element.courseID,
                        courseCode : element.courseCode,
                        courseName : element.courseName,
                    })
                }
            });

        })
        .catch(error => {
        });
    }
    validate = () =>{
        let  courseCodeError = "";
        let  courseNameError = "";

        if (!this.state.courseCode) {
            courseCodeError = "กรุณากรอกรหัสวิชา";
        }
        if (!this.state.courseName ) {
            courseNameError = "กรุณากรอกชื่อรายวิชา";
        }
        if(courseCodeError || courseNameError){
            this.setState({ courseCodeError });
            this.setState({ courseNameError });
            return false;
        }
        return true;

    }

    handleeditcourse = (event) => {
        console.log(this.state.chackemail)
        event.preventDefault();
        const isValid = this.validate();
        if( this.state.courseCode != "" && this.state.courseName){
            axios.post(baseurl+'api/admin_showcourse/get_id_getcourses_update/', {
                courseID: this.state.courseID,
                courseCode : this.state.courseCode,
                courseName : this.state.courseName,
            })
            .then(res => {
                alert("บันทึกสำเร็จ")
                // this.RefreshPage();
            })
            .catch(error => {
                alert("รหัสวิชาซ้ำ")
                console.log("====>",error.status);
            });
        }else if (isValid) {
            this.setState(initialState);
        }

    }

    RefreshPage=()=> { 
        window.location.href = 'http://localhost:3000/admin/ShowCourse'; 
    }

    componentDidMount(){
        const script = document.createElement("script");
        script.src = '../js/ShowCourse/content.js';
        script.async = true;
        document.body.appendChild(script);

        axios.get(baseurl+'api/Admin_showcourse/get_all_courses')
        .then(response => {
          this.setState({ courses: response.data });
        })
        .catch(error => {
          console.log("====>",error.status);
        });
    }

    render(){
        return(
            <div className="content-wrapper">
                <Breadcrumb header="จัดการรายวิชา" subheader="" arrow={
                    [
                        // {"icon":"fa fa-dashboard", "title":"นำเข้ารายวิชา", "link":"#", "active":"active"}
                    ]
                } />
                <div className="content body">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="box theader-search-sky">
                                <div class="box-header">
                                    <div className="row">
                                        <div className="col-md-10">
                                        </div>
                                        <div className="col-md-2">
                                            <Link to="/admin/course/ImportCourse">
                                                <button type="button" className="btn btn-block btn-info"><i className="fa fa-plus" aria-hidden="true"></i> นำเข้าข้อมูล</button>
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
                                                    <tr role="row">
                                                        <th className="" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending">ลำดับ.</th>
                                                        <th className="sorting_asc" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending">รหัสวิชา</th>
                                                        <th className="sorting" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-label="CourseName: activate to sort column ascending">ชื่อรายวิชา</th>
                                                        <th className="" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-label="CSS grade: activate to sort column ascending">การจัดการ</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    { this.state.courses.map((course, i) => (
                                                        <tr role="row">
                                                            <td>{i+1}</td>
                                                            <td className="sorting_1">{course.courseCode}</td>
                                                            <td>{course.courseName}</td>
                                                            {/* <td>{course.courseCredits}</td> */}
                                                            {/* <td>1.7</td> */}
                                                            <td> 
                                                                {this.renderviewteaching(course)}
                                                                {this.renderdelete(course.courseID)}&nbsp;
                                                                {this.renderedit(course.courseID)}
                                                                {/* <Link to={'/admin/course/Updatacourse/'+course.courseID} ><button type="button" className="btn btn-warning" onClick={this.updateCourse} ><i className="fa fa-edit"></i></button></Link> <button type="button" className="btn btn-danger"><i className="fa fa-trash"></i></button> */}
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
                <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                            <h4 class="modal-title" id="exampleModalLabel">แก้ไขสถานะนักศึกษา</h4>
                        </div>
                        <form onSubmit={this.handleeditcourse}>
                            <div class="modal-body">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div class="col-md-4">
                                            <label>รหัสวิชา</label><span class="text-danger"> *</span>
                                            <div class="form-group">
                                                <input type="text" class="form-control form-control-lg" placeholder="รหัสวิชา" name="courseCode" id="courseCode" value={this.state.courseCode} onChange={this.onChangeHandle} required="" className="form-control"/>
                                                <div style={{color: "red"}}>{this.state.courseCodeError}</div>
                                            </div>
                                        </div>
                                        <div class="col-md-8">
                                            <label>ชื่อรายวิชา</label><span class="text-danger"> *</span>
                                            <div class="form-group">
                                                <input type="text" class="form-control form-control-lg" placeholder="ชื่อรายวิชา" name="courseName" id="courseName" value={this.state.courseName} onChange={this.onChangeHandle} required="" className="form-control"/>
                                                <div style={{color: "red"}}>{this.state.courseNameError}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer">                                
                                {/* <button type="submit" className="pull-right btn btn-success" onClick={ this.handleChange }>
                                     บันทึก
                                </button> */}
                                <button type="submit" class="btn btn-success">บันทึก</button>
                                <button type="button" class="btn btn-default" data-dismiss="modal">ยกเลิก</button>
                            </div>
                        </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
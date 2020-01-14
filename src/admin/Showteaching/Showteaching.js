import React, { Component } from 'react'
import Breadcrumb from '../../components/Breadcrumb';
// import { Link } from "react-router-dom";
// import Button from '../../components/Button';
import axios from 'axios';
// import service_uri from '../../components/variable/service_uri';
import baseurl from '../../auth/Baseurl';

export default class Showteaching extends Component {

    state = {
        teachings:[]
    }
    
    componentDidMount(){
        const script = document.createElement("script");
        script.src = '../js/Showimportteacher/content.js';
        script.async = true;
        document.body.appendChild(script);

        axios.get(baseurl+'api/Admin_teaching/get_teaching')
        .then(response => {
          this.setState({ teachings: response.data });
        })
        .catch(error => {
          console.log("====>",error.status);
        });

    };


    render() {
        return (
   
             <div className="content-wrapper">
                <Breadcrumb header="จัดการอาจารย์ผู้สอนในรายวิชา" subheader="" arrow={
                    [
                        {"icon":"", "title":"อาจารย์", "link":"#", "active":"active"}
                    ]
                } />

                
                <div className="content body">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="box box-primary table-responsive">
                                <div className="box-body">
                                    <br />
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <table id="example2" className="table table-bordered table-hover dataTable" role="grid" aria-describedby="example2_info">
                                                <thead>
                                                    <tr   >
                                                        <th className="col-sm-1" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending">ลำดับ</th>
                                                        <th className="col-sm-2" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending">ชื่อรายวิชา</th>
                                                        <th className="col-sm-2" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending">อาจารย์ผู้สอน</th>
                                                        <th className="col-sm-2" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending">ประเภทผู้สอน</th>
                                                        <th className="col-sm-3" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending">อาคารเรียนและห้องเรียน</th>
                                                        <th className="col-sm-2" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-label="CSS grade: activate to sort column ascending">การจัดการ</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    { this.state.teachings.map((teaching, i) => (
                                                        <tr role="row">
                                                            <td>{i+1}</td>
                                                            {/* <td></td> */}
                                                            <td className="sorting_1"> {teaching.courseCode} {teaching.courseName} </td>
                                                            <td>อาจารย์ {teaching.firstName} {teaching.lastName}</td>
                                                            <td>{teaching.roleID}</td>
                                                            <td>{teaching.buildingName} {teaching.roomname}</td>

                                                            <td> 
                                                                {/* {this.renderedit(teaching)}
                                                                {this.renderdelete(teaching.lecturerID)} */}
                                                                {/* <Link to={'/admin/course/Updatacourse/'+course.courseID} ><button type="button" className="btn btn-warning" onClick={this.updateCourse} ><i className="fa fa-edit"></i></button></Link> <button type="button" className="btn btn-danger"><i className="fa fa-trash"></i></button> */}
                                                            </td>
                                                        </tr>
                                                    ))
                                                    }
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
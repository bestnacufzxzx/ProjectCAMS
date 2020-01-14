import React, { Component } from 'react'
import Breadcrumb from '../../components/Breadcrumb';
import { Link } from "react-router-dom";
import baseurl from '../../auth/Baseurl';

import axios from 'axios';
import service_uri from '../../components/variable/service_uri';

export default class Showimportteacher extends Component {
    state = {
        lecturers:[]
    }


    renderdelete(lecturerid){
        return(
            <button type="button" className="btn btn-danger" onClick={() => this.handleRemove(lecturerid)}><i class="fa fa-trash" aria-hidden="true"></i> </button>
        )
    }

    handleRemove = (user_id) => {
        const url = service_uri +'admin_showuser/get_delete_lecturerid?user_id='+user_id;
        axios.get(url)
            .then(res => {
                console.log(res);
            })
            alert("ลบสำเร็จ")
            this.RefreshPage();
    } 

    RefreshPage=()=> { 
        window.location.href = 'http://localhost:3000/admin/ShowImportteacher'; 
    }

    renderedit(lecturers){
        let lecturerID = lecturers.lecturerID;
        return(
            <Link to={'EditImportteacher/'+lecturerID}>
               &nbsp; <button type="button" className="btn btn-success"> <i class="fa fa-edit" aria-hidden="true"> </i> </button>&nbsp;
            </Link>
        )
    }


    componentDidMount(){
        const script = document.createElement("script");
        script.src = '../js/Showimportteacher/content.js';
        script.async = true;
        document.body.appendChild(script);

        axios.get(baseurl+'api/admin_showuser/showusername_teacher')
        .then(response => {
          this.setState({ lecturers: response.data });
        })
        .catch(error => {
          console.log("====>",error.status);
        });

    };

    render() {
        return (
   
             <div className="content-wrapper">
                <Breadcrumb header="แสดงรายชื่ออาจารย์" subheader="" arrow={
                    [
                        {"icon":"", "title":"อาจารย์", "link":"#", "active":"active"}
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
                                            <Link to="/admin/Createimportteacher">
                                                <button type="button" className="btn btn-block btn-info"><i className="fa fa-plus" aria-hidden="true"></i> นำเข้าข้อมูลอาจารย์</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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
                                                        <th className="col-sm-2" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending">ชื่อ</th>
                                                        <th className="col-sm-2" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending">อีเมล์</th>
                                                        <th className="col-sm-2" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending">เบอร์โทร</th>
                                                        <th className="col-sm-2" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-label="CSS grade: activate to sort column ascending">การจัดการ</th>
                                                    </tr>
                                                </thead>

                                                <tbody>
                                                    { this.state.lecturers.map((lecturers, i) => (
                                                        <tr role="row">
                                                            <td>{i+1}</td>
                                                            {/* <td></td> */}
                                                            <td className="sorting_1"> {lecturers.prefix} {lecturers.firstName} {lecturers.lastName}</td>
                                                            <td>{lecturers.email}</td>
                                                            <td>{lecturers.phoneNumber}</td>
                                                            <td> 
                                                                {this.renderedit(lecturers)}
                                                                {this.renderdelete(lecturers.user_id)}
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
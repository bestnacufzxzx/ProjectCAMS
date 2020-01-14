import React, { Component } from 'react'
import Breadcrumb from '../../components/Breadcrumb';
import { Link } from "react-router-dom";
import axios from 'axios';
import service_uri from '../../components/variable/service_uri';
import baseurl from '../../auth/Baseurl';


export default class Showimportstudent extends Component {

    state = {
        students:[]
    }

    renderdelete(studentID){
        // console.log(studentid)
        return(
            <button type="button" className="btn btn-danger" onClick={() => this.handleRemove(studentID)}><i class="fa fa-trash" aria-hidden="true"></i> </button>
        )
    }

    handleRemove = (studentID) => {
        console.log(studentID)
        const url = service_uri +'admin_showuser/get_delete_studentid?studentID='+studentID;
        axios.get(url)
            .then(res => {
                console.log(res);
            })
            alert("ลบสำเร็จ")
            this.RefreshPage();
    } 

    RefreshPage=()=> { 
        window.location.href = 'http://localhost:3000/admin/Showimportstudent'; 
    }

    renderedit(students){
        let studentID = students.studentID;
        return(
            <Link to={'EditImportstudent/'+studentID}>
               &nbsp; <button type="button" className="btn btn-success"> <i class="fa fa-edit" aria-hidden="true"> </i> </button>&nbsp;
            </Link>
        )
    }


    componentDidMount(){
        const script = document.createElement("script");
        script.src = '../js/Showimportteacher/content.js';
        script.async = true;
        document.body.appendChild(script);

        axios.get(baseurl+'api/admin_showuser/showusername_student')
        .then(response => {
          this.setState({ students: response.data });
        })
        .catch(error => {
          console.log("====>",error.status);
        });

    };


    render() {
        return (
   
             <div className="content-wrapper">
                <Breadcrumb header="แสดงรายนักศึกษา" subheader="" arrow={
                    [
                        {"icon":"", "title":"นักศึกษา", "link":"#", "active":"active"}
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
                                            <Link to="/admin/Createimportstudent">
                                                <button type="button" className="btn btn-block btn-info"><i className="fa fa-plus" aria-hidden="true"></i> นำเข้าข้อมูลนักศึกษา</button>
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
                                                        <th className="col-sm-2" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending">รหัสนักศึกษา</th>
                                                        <th className="col-sm-2" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending">ชื่อ - นามสกุล</th>
                                                        <th className="col-sm-2" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending">อีเมล์</th>
                                                        <th className="col-sm-2" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending">เบอร์โทร</th>
                                                        <th className="col-sm-2" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-label="CSS grade: activate to sort column ascending">การจัดการ</th>
                                                    </tr>
                                                </thead>
                                                <tbody>

                                                { this.state.students.map((student, i) => (
                                                    <tr role="row">
                                                    <td>{i+1}</td>
                                                    <td className="sorting_1">{student.studentID}</td>
                                                    <td> {student.prefix} {student.firstName }  {student.lastName}</td>
                                                    <td>{student.email}</td>
                                                    <td>{student.phone}</td>
                                                    <td> 
                                                        {this.renderedit(student)}
                                                        {this.renderdelete(student.studentID)}
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
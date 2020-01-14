import React, { Component } from 'react'
import Breadcrumb from '../../components/Breadcrumb';
import { Link } from "react-router-dom";
// import Button from '../../components/Button';
import axios from 'axios';
import service_uri from '../../components/variable/service_uri';
import baseurl from '../../auth/Baseurl';

export default class Showteaching extends Component {

    state = {
        teachings:[]
    }
    
    chackrole(roleID){
        if(roleID == 3){
            return(
                "อาจารย์ผู้สอน"
            ) 
        }else if(roleID == 4){
            return(
                "อาจารย์ผู้ประสานรายวิชา"
            )
        }else if(roleID == 5){
            return(
                "อาจารย์ผู้ประสานรายวิชาและอาจารย์ผู้สอน"
            )
        }
    }

    renderdelete(teachingID){
        console.log(teachingID)
        return(
            <button type="button" className="btn btn-danger" onClick={() => this.handleRemove(teachingID)}><i class="fa fa-trash" aria-hidden="true"></i> </button>
        )
    }


    handleRemove = (teachingID) => {
        const url = service_uri +'admin_showcourse/delete?teachingID='+teachingID;
        axios.get(url)
            .then(res => {
                console.log(res);
            })
            alert("ลบสำเร็จ")
            this.RefreshPage();
    } 

    RefreshPage=()=> { 
        window.location.href = 'http://localhost:3000/admin/Showteaching/'+this.state.courseID; 
    }

    componentDidMount(){

        const script = document.createElement("script");
        script.src = '../js/Showimportteacher/content.js';
        script.async = true;
        document.body.appendChild(script);

        const  courseID  = this.props.match.params.courseID;
        this.setState({courseID});
        console.log(courseID)
        axios.get(baseurl+'api/Admin_teaching/get_teaching?courseID='+courseID)
        .then(res => {
        this.setState({ teachings: res.data });
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
                    <div class="row">
                        <div class="col-md-12">
                            <div class="box theader-search-sky">
                                <div class="box-header">
                                    <div className="row">
                                        <div className="col-md-10">
                                            {/* <div className="input-group">
                                                <input type="text" className="form-control" />
                                                <span className="input-group-addon"><i className="fa fa-search" aria-hidden="true"></i></span>
                                            </div> */}
                                        </div>
                                        <div className="col-md-2">
                                            <Link to={'/admin/Createteaching/'+this.state.courseID}>
                                                <button type="button" className="btn btn-block btn-info"><i className="fa fa-plus" aria-hidden="true"></i> สร้างผู้สอนตามรายวิชา</button>
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
                                                        <th className="col-sm-2" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending">ชื่อรายวิชา</th>
                                                        <th className="col-sm-2" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending">อาจารย์ผู้สอน</th>
                                                        <th className="col-sm-2" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending">ประเภทผู้สอน</th>
                                                        <th className="col-sm-2" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-label="CSS grade: activate to sort column ascending">การจัดการ</th>
                                                    </tr>
                                                </thead>
                                                <tbody >
                                                { this.state.teachings.map((teaching, i) => (
                                                        <tr role="row">
                                                            <td>{i+1}</td>
                                                            {/* <td>{history}</td> */}
                                                            <td>{teaching.courseCode}</td>
                                                            <td> อาจารย์ {teaching.firstName} {teaching.lastName}</td>
                                                            <td>{this.chackrole(teaching.roleID)}</td>
                                                            <td className="text-center">
                                                                {/* {this.rendereditcourse(teaching)} */}
                                                                {this.renderdelete(teaching.teachingID)}
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
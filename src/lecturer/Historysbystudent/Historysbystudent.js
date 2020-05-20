import React, { Component } from 'react'
import Breadcrumb from '../../components/Breadcrumb'
import axios from 'axios';
import { Link } from "react-router-dom";
import baseurl from '../../auth/Baseurl';

export default class Historysbystudent extends Component {
  
    state = {
        historys : [],
        course:'',
        courseCode:''
    }
    
    renderhistoryid(student){
        let studentID = student.studentID;
        let courseID = student.courseID;
        return(
            <Link to={'/lecturer/Viewhistorystudent/'+studentID+"/"+courseID}>
                <button type="button" className="btn btn-success"> <i class="fa fa-eye" aria-hidden="true"> </i> </button>
            </Link> 
        )
    }
    
    
    componentDidMount(){
        const script = document.createElement("script");
        script.src = '../../../../js/ShowCourse/content.js';
        script.async = true;
        document.body.appendChild(script);

        const  HistorysbystudentcourseID = this.props.match.params.HistorysbystudentcourseID;
        const  courseCode = this.props.match.params.courseCode;
        const  courseName = this.props.match.params.courseName;
        let courseID = HistorysbystudentcourseID;
        this.setState({HistorysbystudentcourseID});
        this.setState({courseCode});
        this.setState({courseName});
        
        this.setState({ courses : courseCode +" "+courseName})
        // console.log(this.state.courses)
        axios.get(baseurl+'api/lecturers/gethistorytimetreatment?courseID='+courseID)
        .then(res => {
            this.setState({ historys: res.data });
        })
        .catch(error => {
            console.log("====>",error.status);
        });
    }

    render() {
        return (
             <div className="content-wrapper">
                <Breadcrumb header="ประวัตินักศึกษา"  subheader="" arrow={
                    [
                        // {"icon":"", "title":"รายวิชาที่สอน", "link":"#", "active":"active"}
                    ]
                } />
                <div className="content body">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="box theader-search-sky">
                                <div class="box-header">
                                    <div className="row">
                                        <div className="col-md-10">
                                                <label> 
                                                    <h4>รายวิชา {this.state.courses}</h4>
                                                </label>
                                                <h4>รายวิชา {this.state.HistorysbystudentcourseID}</h4>
                                                    <h4>รายวิชา {this.state.courseCode}</h4>
                                                    <h4>รายวิชา {this.state.courseName}</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3">
                        </div>
                        <div className="col-md-3">
                        </div>
                        <div className="col-md-2">
                        </div>
                        <div className="col-md-2">
                            <Link to={'Historysbystudent/'+this.state.HistorysbystudentcourseID+"/"+this.state.courseCode+"/"+this.state.courseName}>
                                <button type="button" className="btn btn-block btn-warning btn-sm">ดูประวัติการเข้าเรียนแบบรายบุคคน</button>
                            </Link>
                        </div>
                        <div className="col-md-2">
                            <Link to={'Hitstoryoverview/'+this.state.HistorysbystudentcourseID+"/"+this.state.courseCode+"/"+this.state.courseName}>
                                <button type="button" className="btn btn-block btn-warning btn-sm">ดูประวัติการเข้าเรียนผลรวม</button>
                            </Link>
                        </div>
                    </div>
                    <br/>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="box box-primary">
                                <div className="box-body">
                                    <table id="example2" className="table table-bordered table-hover dataTable" role="grid" aria-describedby="example2_info">
                                        <thead>
                                            <tr>
                                                <th className="col-sm-1" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending">ลำดับ</th>
                                                <th className="col-sm-2" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending">รหัสศึกษา</th>
                                                <th className="col-sm-2" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending">ชื่อ - นามสกุล</th>
                                                <th className="col-sm-2" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-label="CSS grade: activate to sort column ascending">การจัดการ</th>    
                                            </tr>
                                        </thead>
                                        <tbody>
                                            { this.state.historys.map((history, i) => (
                                                    <tr role="row">
                                                        <td>{i+1}</td>
                                                        {/* <td>{history}</td> */}
                                                        <td>{history.studentID}</td>
                                                        <td>{history.firstName + " " + history.lastName}</td>
                                                        {/* <td>{history.lastName}</td> */}
                                                        <td className="text-center">
                                                        {this.renderhistoryid(history)}
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
     
        )
    }
}


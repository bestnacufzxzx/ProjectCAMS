import React, { Component } from 'react'
import Breadcrumb from '../../components/Breadcrumb'
import axios from 'axios';
import { Link } from "react-router-dom";
import baseurl from '../../auth/Baseurl';

export default class Hitstoryoverview extends Component {
               
    state = {
        // historys : [],
        schedule: [],
        student: [],
        rating: [],
        check: [],
        course:'',
        courseCode:''
    }

    checktype =(status)=>{
        if(status == 1){
            return  (<td><span> / </span></td>)
        }else if(status == 2){
            return (<td  className="bg-warning"><span> / </span></td>);
        }else if (status == null){
            return (<td  className="bg-danger"><span> - </span></td>);
        }
    }
    export_file = () => {
        // const  courseID = this.props.match.params.courseID;
        window.open(baseurl+'ReportfileTe/export/'+this.state.HistorysbystudentcourseID, '_blank');
        // window.open(baseurl+'Reportfile/export/'+courseID+'/'+studentID, '_blank');
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
            this.setState({ schedule: res.data.schedule, student: res.data.student, rating: res.data.rating, check: res.data.check});
            console.log(res.data);
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
                        <div className="col-md-3">
                            {/* <div id="example_html">
                                <label>th-th</label>
                                <input id="datepicker" class="input-medium" type="text" data-provide="datepicker" data-date-language="th-th"/>
                            </div> */}
                        </div>
                        <div className="col-md-3">
                            <button type="button" className="btn btn-block btn-info" onClick={this.export_file}><i className="fa fa-table" aria-hidden="true"></i> ออกรายงานประวัติการเข้าเรียน</button>
                        </div>
                    </div>
                    <br/>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="box box-primary table-responsive">
                                <div className="box-body">
                                    <table id="example9" className="table table-bordered table-hover dataTable" role="grid" aria-describedby="example2_info">
                                        <thead>
                                            <tr>
                                                <th tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending">ลำดับ</th>
                                                <th tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending">รหัสประจำตัว</th>
                                                <th width="15%" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending">ชื่อ-สกุล</th>
                                                <th tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending">สถิติ</th>
                                                { this.state.schedule.map((v, i) => (
                                                    <th tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-label="CSS grade: activate to sort column ascending" title={"คาบที่"+(i+1)+" วันที่ "+(v.startdate)+" เวลา "+(v.starttime)+" - "+(v.endtime)+" น"}>ค {i+1}</th>
                                                )) }    
                                            </tr>
                                        </thead>
                                        <tbody>
                                            { 
                                                this.state.student.map((v, i)=>(
                                                    <tr>
                                                        <td>{i+1}</td>
                                                        <td>{v.studentID}</td>
                                                        <td>{v.prefix} {v.firstName} {v.lastName}</td>
                                                        <td>
                                                            <span class="badge badge-success">{this.state.rating[v.studentID].percentattendclass+'%'}</span> 
                                                            <span class="badge badge-warning">{this.state.rating[v.studentID].percentLateClass+'%'}</span> 
                                                            <span class="badge badge-danger">{this.state.rating[v.studentID].percentMissClass+'%'}</span> 
                                                        </td>
                                                        {
                                                            this.state.check[v.studentID].map((sub, i)=>(
                                                                <>{this.checktype(sub.status)}</>
                                                            ))
                                                        }
                                                    </tr>
                                                ))
                                            }
                                            {/* <tr role="row">
                                                <td>1</td>
                                                <td>59142901</td>
                                                <td>นายพัฒนะศักดิ์ พิเศษศิลป์ </td>
                                                <td>
                                                    <span class="badge badge-success">25%</span> 
                                                    <span class="badge badge-warning">20%</span> 
                                                    <span class="badge badge-danger">10%</span> 
                                                </td>
                                                <td><span> / </span></td>
                                                <td className="bg-warning"><span> / </span></td>
                                                <td><span> / </span></td>
                                                <td  className="bg-danger"><span> - </span></td>
                                                <td><span> / </span></td>
                                                <td><span> / </span></td>
                                                <td><span> / </span></td>
                                                <td><span> / </span></td>
                                                <td><span> / </span></td>
                                                <td className="bg-danger"><span> - </span></td>
                                                <td><span> / </span></td>
                                                <td><span> / </span></td>
                                                <td className="bg-danger"><span> - </span></td>
                                                <td><span> / </span></td>
                                                <td><span> / </span></td>
                                                <td><span> / </span></td>
                                                <td><span> / </span></td>
                                                <td><span> / </span></td>
                                                <td><span> / </span></td>
                                                <td><span> / </span></td>
                                                <td><span> / </span></td>
                                                <td className="bg-danger"><span> - </span></td>
                                            </tr> */}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
                <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel">
                <div class="modal-dialog" role="document">
                        <div class="modal-content">
                        {/* <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                            <h4 class="modal-title" id="exampleModalLabel">แก้ไขสถานะนักศึกษา</h4>
                        </div> */}
                        <span class="badge badge-success">{this.state.percent} % </span> 
                        <span class="badge badge-warning">{this.state.LateClass} %</span> 
                        <span class="badge badge-danger">{this.state.MissClass} %</span> 

                        </div>
                    </div>
                </div>
            </div>
     
        )
    }
}


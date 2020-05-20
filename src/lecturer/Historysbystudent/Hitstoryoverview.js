import React, { Component } from 'react'
import Breadcrumb from '../../components/Breadcrumb'
import axios from 'axios';
import { Link } from "react-router-dom";
import baseurl from '../../auth/Baseurl';

export default class Hitstoryoverview extends Component {
               
    state = {
        historys : [],
        course:'',
        courseCode:''
    }
    
    // renderhistoryid(student){
    //     let studentID = student.studentID;
    //     let courseID = student.courseID;
    //     return(
    //         <Link to={'/lecturer/Viewhistorystudent/'+studentID+"/"+courseID}>
    //             <button type="button" className="btn btn-success"> <i class="fa fa-eye" aria-hidden="true"> </i> </button>
    //         </Link> 
    //     )
    // }

    history_porsen =(studentID)=>{
        // return (<button data-toggle="modal" data-target="#exampleModal" onClick={((e) => this.getporsen(e,studentID))} class="btn btn-primary"></button>)
        return (
       
            <button data-toggle="modal" data-target="#exampleModal" 
            onClick={((e) => this.getporsen(e,studentID))} 
            class="btn btn-primary" type="button" data-toggle="collapse" 
            data-target="#collapseExample" aria-expanded="false" 
            aria-controls="collapseExample"></button>

        )
    }

    getporsen =(event,studentID)=>{
        console.log(studentID);
        const  courseID = this.props.match.params.HistorysbystudentcourseID;
        // axios.post(baseurl+'api/lecturers/percent_check_name', { courseID: courseID,user_ID:studentID} )

        axios.get(baseurl+'api/lecturers/percent_check_name?courseID='+courseID+"&studentID="+studentID)
        .then(res => {
            let percent = (res.data.percent) 
            let LateClass = (res.data.percentLateClass) 
            let MissClass = (res.data.percentMissClass) 
            let remainMissClass = (res.data.remainMissClass) 
            let remain = (res.data.remain) 
    
            let total = (res.data.total) 
            this.setState({percent})
            this.setState({remainMissClass})
            this.setState({remain})
            this.setState({LateClass})
            this.setState({MissClass})
            this.setState({total})
        })
        .catch(error => {
        console.log("====>",error.status);
        });
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
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3">
                            <div class="collapse" id="collapseExample">
                                <div class="well">
                                    <span class="badge badge-success">{this.state.percent} % </span> 
                                    <span class="badge badge-warning">{this.state.LateClass} %</span> 
                                    <span class="badge badge-danger">{this.state.MissClass} %</span> 
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                        </div>
                        <div className="col-md-2">
                        </div>
                        {/* <div className="col-md-2">
                            <Link to={'Historysbystudent/'+this.state.HistorysbystudentcourseID+"/"+this.state.courseCode+"/"+this.state.courseName}>
                                <button type="button" className="btn btn-block btn-warning btn-sm">ดูประวัติการเข้าเรียนแบบรายบุคคน</button>
                            </Link>
                        </div>
                        <div className="col-md-2">
                            <Link to={'Hitstoryoverview/'+this.state.HistorysbystudentcourseID+"/"+this.state.courseCode+"/"+this.state.courseName}>
                                <button type="button" className="btn btn-block btn-warning btn-sm">ดูประวัติการเข้าเรียนผลรวม</button>
                            </Link>
                        </div> */}
                    </div>
                    <br/>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="box box-primary table-responsive">
                                <div className="box-body">
                                    <table className="table table-bordered table-hover dataTable" role="grid" aria-describedby="example2_info">
                                        <thead>
                                            <tr>
                                                <th tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending">ลำดับ</th>
                                                <th tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending">รหัสประจำตัว</th>
                                                <th width="15%" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending">ชื่อ-สกุล</th>
                                                <th tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending">สถิติ</th>
                                                <th tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-label="CSS grade: activate to sort column ascending" title="คาบที่ 1 วันที่ 10-05-2562 เวลา 10:50 - 13:50 น">1</th>    
                                                <th tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-label="CSS grade: activate to sort column ascending">2</th>    
                                                <th tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-label="CSS grade: activate to sort column ascending">3</th>    
                                                <th tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-label="CSS grade: activate to sort column ascending">4</th>    
                                                <th tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-label="CSS grade: activate to sort column ascending">5</th>    
                                                <th tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-label="CSS grade: activate to sort column ascending">6</th>    
                                                <th tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-label="CSS grade: activate to sort column ascending">7</th>    
                                                <th tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-label="CSS grade: activate to sort column ascending">8</th>    
                                                <th tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-label="CSS grade: activate to sort column ascending">9</th>    
                                                <th tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-label="CSS grade: activate to sort column ascending">10</th>    
                                                <th tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-label="CSS grade: activate to sort column ascending">11</th>    
                                                <th tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-label="CSS grade: activate to sort column ascending">12</th>    
                                                <th tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-label="CSS grade: activate to sort column ascending">13</th>    
                                                <th tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-label="CSS grade: activate to sort column ascending">14</th>    
                                                <th tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-label="CSS grade: activate to sort column ascending">15</th>    
                                                <th tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-label="CSS grade: activate to sort column ascending">16</th>    
                                                <th tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-label="CSS grade: activate to sort column ascending">17</th>    
                                                <th tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-label="CSS grade: activate to sort column ascending">18</th>    
                                                <th tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-label="CSS grade: activate to sort column ascending">19</th>    
                                                <th tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-label="CSS grade: activate to sort column ascending">20</th>    
                                                <th tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-label="CSS grade: activate to sort column ascending">21</th>    
                                                <th tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-label="CSS grade: activate to sort column ascending">22</th>    
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {/* { this.state.historys.map((history, i) => (
                                                <tr role="row">
                                                    <td>{i+1}</td>
                                                    <td>{history.studentID}</td>
                                                    <td>{history.firstName + " " + history.lastName}</td>
                                                    <td>{this.history_porsen(history.studentID)}</td>
                                                </tr>
                                            ))} */}
                                            <tr role="row">
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
                                            </tr>
                                            <tr role="row">
                                                <td>1</td>
                                                <td>59142901</td>
                                                <td>นายอารีฟีน กุลดี </td>
                                                <td>
                                                    <span class="badge badge-success">10%</span> 
                                                    <span class="badge badge-warning">30%</span> 
                                                    <span class="badge badge-danger">60%</span> 
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
                                            </tr>
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


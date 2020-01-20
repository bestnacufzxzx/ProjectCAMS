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
        const  HistorysbystudentcourseID = this.props.match.params.HistorysbystudentcourseID;
        const  courseCode = this.props.match.params.courseCode;
        const  courseName = this.props.match.params.courseName;
        let courseID = HistorysbystudentcourseID;
        this.setState({ courses : courseCode +" "+courseName})
        
        axios.get(baseurl+'api/lecturers/gethistorytimetreatment?courseID='+courseID)
        .then(res => {
        this.setState({ historys: res.data });
        })
        .catch(error => {
        console.log("====>",error.status);
        });


        // let lecturerID = localStorage.getItem("lecturerID");
        // console.log(lecturerID);
        // axios.get(baseurl+'api/lecturers/getCourseByteaching?lecturerID='+lecturerID)
        // .then(res => {
        // let courseCode = (res.data.courseCode) 
        // let courseName = (res.data.courseName) 
        // this.setState({courseCode})
        // this.setState({courseName})
        // console.log(this.state.courseCode)

        // })

        // .catch(error => {
        // console.log("====>",error.status);
        // });
        // let lecturerID = localStorage.getItem("lecturerID");
        // console.log(lecturerID);
        // axios.get(baseurl+'api/lecturers/getCourseByteaching?lecturerID='+lecturerID)
        // .then(res => {
        // let courseCode = (res.data.courseCode) 
        // let courseName = (res.data.courseName) 
        // this.setState({courseCode})
        // this.setState({courseName})
        // })
        // .catch(error => {
        // console.log("====>",error.status);
        // });

        // let lecturerID = localStorage.getItem("lecturerID");
        // axios.get(baseurl+'api/lecturers/getCourseByteaching?lecturerID='+lecturerID)
        // .then(res => {
        //     let courseCode = (res.data.result.result) 
        //     this.setState({courseCode})
        // })
        // .catch(error => {
        // console.log("====>",error.status);
        // });
                // const script = document.createElement("script");
                // script.src = '../js/Showimportteacher/content.js';
                // script.async = true;
                // document.body.appendChild(script);
        }

    render() {
        console.log(this.state.courses)

        // console.log(this.state.courseCode)
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
                        <div className="col-md-12">
                            <div className="box box-primary">
                                <div className="box-body">
                                    {/* <br />
                                    <div className="row">
                                        <div className="col-sm-12"> */}
                                            <table id="example1" class="table table-bordered table-striped" role="grid" >
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
                                        {/* </div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
     
        )
    }
}


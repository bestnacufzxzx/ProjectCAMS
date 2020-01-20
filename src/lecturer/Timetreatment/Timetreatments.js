import React, { Component } from 'react'
import Breadcrumb from '../../components/Breadcrumb';
import axios from 'axios';
import { Link } from "react-router-dom";
// import Historysbystudent from '../Historysbystudent/Historysbystudent';
import baseurl from '../../auth/Baseurl';

export default class Timetreatments extends Component {


    state = {
        historys : [],
        course:''
    }
    

    renderhistoryid(HistorysbystudentcourseID , courseCode , courseName){
        // let lecturerID = localStorage.getItem("lecturerID");
        return(
            <Link to={'Historysbystudent/'+HistorysbystudentcourseID + "/" + courseCode + "/" + courseName}>
                <button type="button" className="btn btn-success"> <i class="fa fa-eye" aria-hidden="true"> </i> </button>
            </Link> 
        )
    }
    
    
    componentDidMount(){
        // let course = localStorage.getItem("courseID");

        // this.setState({
        //     Course:course
        // })

        let lecturerID = localStorage.getItem("lecturerID");
        console.log(lecturerID);
        axios.get(baseurl+'api/lecturers/getCourseByteaching?lecturerID='+lecturerID)
        .then(res => {
        this.setState({ historys: res.data });
        })
        .catch(error => {
        console.log("====>",error.status);
        });
    
                // const script = document.createElement("script");
                // script.src = '../js/Showimportteacher/content.js';
                // script.async = true;
                // document.body.appendChild(script);
        }

    render() {
        console.log(this.state.Course)
        return (
   
             <div className="content-wrapper">
                <Breadcrumb header="ประวัติรายวิชาที่สอน" subheader="" arrow={
                    [
                        // {"icon":"", "title":"รายวิชาที่สอน", "link":"#", "active":"active"}
                    ]
                } />
                <div className="content body">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="box box-primary">
                                <div className="box-body">
                                    <table id="example1" class="table table-bordered table-striped" role="grid" >
                                        <thead>
                                            <tr>
                                                <th className="col-sm-1" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending">ลำดับ</th>
                                                <th className="col-sm-2" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending">รหัสวิชา</th>
                                                <th className="col-sm-2" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending">รายวิชา</th>
                                                <th className="col-sm-2" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-label="CSS grade: activate to sort column ascending">การจัดการ</th>    
                                            </tr>
                                        </thead>
                                        <tbody>
                                            { this.state.historys.map((history, i) => (
                                                    <tr role="row">
                                                        <td>{i+1}</td>
                                                        {/* <td>{history}</td> */}
                                                        <td>{history.courseCode}</td>
                                                        <td>{history.courseName}</td>
                                                        {/* <td>{history.lastName}</td> */}
                                                        <td className="text-center">
                                                        {this.renderhistoryid(history.courseID , history.courseCode, history.courseName)}
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


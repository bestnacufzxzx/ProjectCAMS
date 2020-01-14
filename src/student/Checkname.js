import React, { Component } from 'react'
import Breadcrumb from '../components/Breadcrumb';
import axios from 'axios';
import { Link } from "react-router-dom";
import baseurl from '../auth/Baseurl';

export default class Checkname extends Component {
    state = {
        courses: [],
    }
  
    renderUserButton(course){
        if(course == null){
                return (
                    <button type="button" className="btn btn-block btn-danger btn-sm" > ไม่มีเรียนในวันนี้ </button>
                );
        }else{
            let d1 = new Date();
            let d2 = new Date(course.startdate+' '+course.starttime);
            let classID = (course.classID);
            localStorage.setItem("classID", classID);
            let d3 = new Date(course.startdate+' '+course.endtime);
            console.log("ปัจจุบัน",d1);
            console.log("เริ่ม",d2);
            console.log("สิ้นสุด",d3);

            if ( d1.getTime() >= d2.getTime() && d1.getTime() <= d3.getTime() ) {
                return (
                    <Link to={'/student/Cameras/'+classID}>
                        <button type="button" className="btn btn-block btn-primary btn-sm" ><i class="fa fa-map-marker" aria-hidden="true"></i> บันทึกเวลาเรียน</button>
                    </Link>
                );
            }else{
                return (
                    <button type="button" className="btn btn-block btn-danger btn-sm"> หมดเวลาบันทึกเข้าเรียน</button>
                );
            }
        }

       
      }
    
    componentDidMount(){
        const { courseID } = this.props.match.params;
        console.log(courseID);

        axios.get(baseurl+'api/Checknamestudent/getbycourse?courseID='+courseID)
        .then(res => {
        this.setState({ courses: res.data });
        })
        .catch(error => {
        console.log("====>",error.status);
        });
    
            const script = document.createElement("script");
            script.src = '../js/Showimportteacher/content.js';
            script.async = true;
            document.body.appendChild(script);
        }

    render() {
        return (
   
             <div className="content-wrapper">
                <Breadcrumb header="บันทึกเวลาเรียนรายคาบ" subheader="" arrow={
                    [
                        // {"icon":"", "title":"ประวัติการเข้าเรียน", "link":"#", "active":"active"}
                    ]
                } />
                <div className="content body">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="box box-primary">
                                <div className="box-body table-responsive">
                                    {/* <br />
                                    <div className="row">
                                        <div className="col-sm-12"> */}
                                            <table id="example1" class="table table-bordered table-striped" role="grid" >
                                                <thead>
                                                    <tr>
                                                        {/* <th className="col-sm-1" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending">รหัสวิชา</th> */}
                                                        <th className="col-sm-1" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending">ลำดับ</th>
                                                        <th className="col-sm-2" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending">วันที่เรียน</th>
                                                        <th className="col-sm-2" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending">เริ่มเวลาเรียน</th>
                                                        <th className="col-sm-2" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending">สิ้นสุดเวลาเรียน</th>
                                                        <th className="col-sm-2" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-label="CSS grade: activate to sort column ascending">บันทึกเวลาเข้าเรียน</th>    
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    { this.state.courses.map((course, i) => (
                                                            // this.renderUserButton(course),
                                                            <tr role="row">
                                                                {/* <td>{course.courseCode}</td>
                                                                <td>{course.courseName}</td> */}
                                                                <td>{i + 1}</td>
                                                                <td>{course.startdate}</td>
                                                                <td>{course.starttime}</td>
                                                                <td>{course.endtime}</td>
                                                                <td>{this.renderUserButton(course)}</td>
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


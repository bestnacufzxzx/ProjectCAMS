import React, { Component } from 'react'
import Breadcrumb from '../components/Breadcrumb';
import axios from 'axios';
import { Link } from "react-router-dom";
import baseurl from '../auth/Baseurl';

export default class Checkname extends Component {
    state = {
        courses: [],
        classID: null,
        picture: null, 
        studentID: null, 
        latitude: null, 
        longitude: null 
    }

    chackstatus(course){
        // let d1 = new Date();
        // let d2 = new Date(course.startdate+' '+course.starttime);
        // let classID = (course.classID);
        // localStorage.setItem("classID", classID);
        // let d3 = new Date(course.startdate+' '+course.endtime);
        // console.log("ปัจจุบัน",d1);
        // console.log("เริ่ม",d2);
        // console.log("สิ้นสุด",d3);
        // if( d1.getTime() >= d2.getTime() && d1.getTime() <= d3.getTime() ) {

        // }else{
        //     // let user_ID = localStorage.getItem("username");
        //     // console.log(user_ID);
        //     // axios.post(baseurl+'api/Checknamestudent/postCheckname', { classID: this.state.classID, picture:this.state.picture, studentID:this.state.user_ID, latitude:this.state.latitude, longitude:this.state.longitude }  )
        //     // .then(res => {
        //     //     this.setState({ statusgets: res.data });
        //     // })
        // }
    }

    convertdate =(dt)=>{
        let date = (`${
            (dt.getMonth()+1).toString().padStart(2, '0')}-${
            dt.getDate().toString().padStart(2, '0')}-${
            dt.getFullYear().toString().padStart(4, '0')} ${
            dt.getHours().toString().padStart(2, '0')}:${
            dt.getMinutes().toString().padStart(2, '0')}:${
            dt.getSeconds().toString().padStart(2, '0')}`
        );
        return (date) ;
    }

    converts = (dt) =>{
        let test = (`${
                    (dt.getMonth()+1).toString().padStart(2, '0')}-${
                    dt.getDate().toString().padStart(2, '0')}-${
                    dt.getFullYear().toString().padStart(4, '0')} ${
                    dt.getHours().toString().padStart(2, '0')}:${
                    dt.getMinutes().toString().padStart(2, '0')}:${
                    dt.getSeconds().toString().padStart(2, '0')}`
        );
        return (test);
    }
  
    renderUserButton(course){
        let course_ID = course.courseID
            let classID = (course.classID);
            localStorage.setItem("classID", classID);

            let d1 = new Date();
            let d2 = new Date(course.startdate+' '+course.starttime);
            let d3 = new Date(course.startdate+' '+course.endtime);
            // console.log("ปัจจุบัน",d1);
            let dd1 = this.convertdate(d1);
            let dd2 = this.convertdate(d2);
            let dd3 = this.convertdate(d3);
            console.log(this.convertdate(d1),"ปัจจุบัน")
            // console.log("เริ่ม",d2);
            console.log(this.converts(d2),"เริ่ม");
            // console.log("สิ้นสุด",d3);
            console.log(this.converts(d3),"สิ้นสุด");
            console.log(course.status ,"status");

            if(course.status  != null){
                return (
                    <button type="button" className="btn btn-block btn-success btn-sm" ><i class="fa fa-map-marker" aria-hidden="true"></i> บันทึกแล้ว</button>
                );                  
            }
            if(dd1 >= dd2 && dd1 <= dd3){
                return (
                    <Link to={'/student/Cameras/'+classID+"/"+course_ID+"/"+this.state.studentID}>
                        <button type="button" className="btn btn-block btn-warning btn-sm" ><i class="fa fa-map-marker" aria-hidden="true"></i> บันทึกเวลาเรียน</button>
                    </Link>
                );
            }else if(dd1 <= dd2 && dd1 <= dd3){
                return (
                    <button type="button" className="btn btn-block btn-secondary btn-sm" > ยังไม่ถึงเวลาเรียน </button>
                );
            }else if(dd1 >= dd3){
                return (
                    <button type="button" className="btn btn-block btn-danger btn-sm"> หมดเวลาบันทึกเข้าเรียน</button>
                );              
            }
      }
    
    componentDidMount(){
        const { courseID } = this.props.match.params;
        const { studentID } = this.props.match.params;
        this.setState({studentID});
        axios.get(baseurl+'api/Checknamestudent/getbycourse?courseID='+courseID+"&studentID="+studentID)
        .then(res => {
        this.setState({ courses: res.data });
        })
        .catch(error => {
        console.log("====>",error.status);
        });
    
            const script = document.createElement("script");
            script.src = '../../../js/ShowCourse/content.js';
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
                                            <table id="example8" class="table table-bordered table-striped" role="grid" >
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
                                                                {/* <td>{this.renderUserButton(course)} {this.chackstatus(course)}</td> */}
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


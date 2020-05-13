import React, { Component } from 'react'
import Breadcrumb from '../../components/Breadcrumb';
import { Link } from "react-router-dom";
// import Modaleditcourse from './EditCourse/Modaleditcourse';
import axios from 'axios';
import service_uri from '../../components/variable/service_uri';
import baseurl from '../../auth/Baseurl';



export default class Createstudentincourse extends Component {

    state = {
        courses : [],
        sutdentByCourses:[],
        firstName : '',
        lastName : '',
        studentID: '',
        courseID:'',
    }

    handleChange = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
    
    }

    deletestudentincourseID(studentsregeterID){
        return(
            <button type="button" className="btn btn-danger" onClick={() => this.handleRemove(studentsregeterID)}><i class="fa fa-trash" aria-hidden="true"></i> </button>
        )
    }

    handleRemove = (studentsregeterID) => {

        const url = service_uri +'admin_showcourse/get_delete_studentsregeter?studentsregeterID='+studentsregeterID;
        axios.get(url)
            .then(res => {
                alert("ลบสำเร็จ")
                this.RefreshPage();
            })
            .catch(res => {
                console.log("====>",res.status);
                alert("ไม่สามารถลบได้เนื่องจากรายชื่อนี้ได้ลงทะเบียนเข้าเรียนแล้ว")
            });
    } 

    createcourseID(courseID){
        this.setState(courseID);
        console.log(this.state.courseID);
        return(
            <Link to={'/lecturer/Teachs/'+courseID}>
                <button type="button" className="btn btn-info"> <i class="fa fa-plus" aria-hidden="true"> สร้างนักศึกษาในรายวิชา </i> </button>&nbsp;
            </Link> 
        )
    }

    onclick_modal = (event, courseID,namecourse) => {
        // this.setState({his: his});
        console.log(courseID,namecourse);
    }

    componentDidMount(){
        let lecturerID = localStorage.getItem("lecturerID");
        let  courseID  = this.props.match.params.courseID;
        const  namecourse = this.props.match.params.namecourse;
        this.setState({namecourse})
        this.setState({courseID})
        console.log(courseID);
        console.log("lecturerID"+lecturerID+"courseID"+courseID);
        axios.get(baseurl+'api/lecturers/get_studentByCourses?courseID='+courseID)
        .then(res => {
        this.setState({ courses: res.data });
        })
        .catch(error => {
        console.log("====>",error.status);
        });

        this.getAllCourse(courseID);
    }
    getAllCourse = (courseID) => {  
        axios.get(service_uri+'lecturers/get_all_sutdentByCourses?courseID='+courseID)
        .then(res => {
            this.setState({ sutdentByCourses: res.data });
        })
        .catch(error => {
            console.log("====>",error.status);
        });
    }

    // groupdataarry = () => {
    //     datastudent =>{
    //         let students = {
    //             students: this.state.studentID,
    //             courses: this.state.courseID,
    //         }
    //         const file = [];
    //         datastudent.map((v) => {  //(v,i)
    //             let temp  = {...students};
    //             temp.students = v[0];
    //             temp.courses = v[1];
    //             if (temp.fname){
    //                 file.push(temp);
    //             }
    //         });
    //         this.setState({
    //             file: file
    //         });
    //     }
    // }

    handleSubmit = (event) =>{
   
        console.log(this.state.studentID +" ---- "+ this.state.courseID)
        event.preventDefault();

        console.log(this.state.studentID)
    
        if(this.state.studentID != ""){
            axios.post(service_uri+'lecturers/insert_studentByCourses', {
                studentID : this.state.studentID,
                courseID: this.state.courseID,
                })
                .then(res => {
                alert("บันทึกสำเร็จ")
                // this.RefreshPage();
                })
                .catch(error => {
                console.log("====>",error.status);
                alert("รายชื่อซ้ำไม่สามารถเพิ่มได้")
        
            });
        }else{
            alert("กรุณาเลือกรายชื่อนักศึกษา")
        }
    }
    
    RefreshPage = () => { 
        window.location.href = 'http://localhost:3000/lecturer/Createstudentincourse/'+this.state.courseID+"/"+this.state.namecourse; 
    }

    render() {
        return (
             <div className="content-wrapper">
                <Breadcrumb header="สร้างนักศึกษาในรายวิชา "subheader="" arrow={
                    [
                        {"icon":"", "title":"สร้างนักศึกษาในรายวิชา", "link":"#", "active":"active"}
                    ]
                } />
                <div className="content body">
                <div class="row">
                        <div class="col-md-12">
                            <div class="box theader-search-sky">
                                <div class="box-header">                   
                                    <div className="row">
                                        <form action="" method="POST" id="">
                                            <div className="col-md-4 form-group">
                                                <label>
                                                    <h4>รายวิชา : {this.state.namecourse}</h4>
                                                </label>
                                            </div>
                                            <div className="col-md-2 form-group">
         
                                            </div>
                                            <div className="col-md-2 form-group">
                                                {/* <input type="text" className="form-control" name="searchText" value="" placeholder="ค้นหา"/> */}
                                            </div>
                                            <div className="col-md-2 form-group">
                                                {/* <button type="submit" className="btn btn-block btn-info pull-right"><i class="fa fa-search" aria-hidden="true"></i> ค้นหา</button>  */}
                                            </div>
                                        </form>
                                        <div className="col-md-2">
                                                <button type="button"className="btn btn-block btn-info pull-right" data-toggle="modal" data-target="#exampleModal" onClick={((e) => this.onclick_modal(e,this.state.courseID,this.state.namecourse))}><i class="fa fa-plus" aria-hidden="true"></i> สร้าง</button>

                                            {/* <Link to={'/lecturer/Createstudent/'+this.state.courseID+"/"+this.state.namecourse}>
                                                <button type="button" className="btn btn-block btn-info pull-right"><i class="fa fa-plus" aria-hidden="true"></i> สร้าง</button>
                                            </Link> */}
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
                                                        <th className="col-sm-8" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending">ชื่อ-นาสกุล นักศึกษา</th>
                                                        <th className="col-sm-3" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" >การจัดการ</th>
                                                    </tr>
                                                </thead>
                                                <tbody >
                                                { this.state.courses.map((course, i) => (
                                                        <tr role="row">
                                                            <td>{i+1}</td>
                                                            <td>{course.prefix} {course.firstName} {course.lastName}</td>
                                                            <td className="text-center">
                                                                {this.deletestudentincourseID(course.studentsregeterID)}
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
                 <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                            <h4 class="modal-title" id="exampleModalLabel">แก้ไขสถานะนักศึกษา</h4>
                        </div>
                        <form onSubmit={this.handleSubmit}>
                            <div class="modal-body">
                                <div>
                                    <div class="form-group">
                                        <label for="lecturers" type="text" class="col-form-label">รายชื่อนักศึกษา (เลือกนักศึกษา)</label>
                                        <select name="studentID" class="form-control multiple"  onChange={this.handleChange} multiple>
                                            {/* <option value="">เลือกนักศึกษา</option> */}
                                        { this.state.sutdentByCourses.map((sutdentByCourse,i) => (
                                            <option value={sutdentByCourse.studentID}>{sutdentByCourse.firstName+' '+sutdentByCourse.lastName +' '+sutdentByCourse.studentID}</option>
                                        )) }
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer">                                
                                {/* <button type="submit" className="pull-right btn btn-success" onClick={ this.handleChange }>
                                     บันทึก
                                </button> */}
                                <button type="submit" class="btn btn-success" onClick={ this.handleChange }>บันทึก</button>
                                <button type="submit" class="btn btn-default" data-dismiss="modal">ยกเลิก</button>
                                {/* <button type="submit" class="btn btn-default" data-dismiss="modal">ยกเลิก</button> */}
                            </div>
                        </form>
                        </div>
                    </div>
                </div>
            </div>
     
        )
    }
}
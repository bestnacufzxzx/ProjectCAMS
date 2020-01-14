import React, { Component } from 'react'
import { Link } from "react-router-dom";
import axios from 'axios';
import Breadcrumb from '../../components/Breadcrumb';
// import ModalCreateTeachCourse from './CreateTeachCourse/ModalCreateTeachCourse';
import service_uri from '../../components/variable/service_uri';
import baseurl from '../../auth/Baseurl';


export default class Teachs extends Component {

    state = {
        teachs : [],
        sum : null
    }

    // editteachcourse(teach){
    //     let classID = teach.classID;
    //     return(
    //         <Link to={'/lecturer/EditTeachCourse/'+classID}>
    //             <button type="button" className="btn btn-success"> <i class="fa fa-eye" aria-hidden="true"> </i> </button>&nbsp;
    //         </Link>
    //     )
    // }

    renderdelete(classID){
        return(
            <button type="button" className="btn btn-danger" onClick={() => this.handleRemove(classID)}><i class="fa fa-trash" aria-hidden="true"></i> </button>
        )
    }
    componentWillMount = () => {
        // localStorage.setItem("lecturerID", '2');
 
        this.setState({courseID: this.props.match.params.courseID})
        // console.log(this.state.classID)
    }

    renderstartdate(startdate){
        // let d1 = new Date(startdate);
        // let Da = d1.getDate();
        // let Mon = d1.getMonth();
        // let Year = d1.getFullYear();
        // let startdate = (Year + "-" + Mon + "-" + Da);
        return(
            startdate
        )
    }
    //   renderUserName = (teach) => {
    //     const firstName = (teach.firstName);
    //     const lastName = (teach.lastName);
    //     const courseID = (teach.courseID);
    //     localStorage.setItem("firstName", firstName);
    //     localStorage.setItem("lastName", lastName);
    //     localStorage.setItem("courseID", courseID);
    //     // console.log(firstName,lastName);
    //     console.log(this.courseID)
    //   }

    handleRemove = (classID) => { 

        console.log(classID);
        const url = service_uri +'lecturers/get_delete_classid?classID='+classID;
        axios.get(url)
            .then(res => {
                console.log(res);
            })
            alert("ลบสำเร็จ")
            this.RefreshPage();
    } 
    RefreshPage=()=> { 
        window.location.href = 'http://localhost:3000/lecturer/Teachs/'+this.state.courseID; 
    }
      
    componentDidMount(){

        // let lecturerID = localStorage.getItem("lecturerID");
        // console.log(courseID);
        axios.get(baseurl+'api/lecturers/getlecturersbyCourse?courseID='+this.state.courseID)
        .then(res => {
        this.setState({ teachs: res.data });
        })
        .catch(error => {
        console.log("====>",error.status);
        });

        // const script = document.createElement("script");
        // script.src = '../js/Showimportteacher/content.js';
        // script.async = true;
        // document.body.appendChild(script);

    }

    // chackdatesum = (teach) => {
    //     const sum = 0;
    //     this.setState({
    //         Sum:sum
    //     })
    //     let d1 = new Date();
    //     let d2 = new Date(teach.startdate);
    //     // let d3 = (teach.starttime);
    //     // let d4 = (teach.endtime);

    //     if(d1.getTime() >= d2.getTime()){
    //         this.state.Sum += 1
    //     }
    //     // this.setState({
    //     //     sums:sum
    //     // });
    //     //   console.log(d1,d2,d3,d4)
    //       console.log(this.state.Sum)

    //   }

    render() {
        console.log(this.state.teachs)
        console.log(this.state.courseID)
        // console.log(this.state.Sum)
        return (
             <div className="content-wrapper">
                <Breadcrumb header="กำหนดการเรียนการสอน" subheader="" arrow={
                    [
                        {"icon":"", "title":"กำหนดการเรียนการสอน", "link":"#", "active":"active"}
                    ]
                } />
                <div className="content body">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="box theader-search-sky">
                                <div class="box-header">                   
                                    <div className="row">
                                        <form action="" method="POST" id="">
                                            <div className="col-md-2 form-group"></div>
                                            <div className="col-md-3 form-group">
         
                                            </div>
                                            <div className="col-md-3 form-group">
                                                {/* <input type="text" className="form-control" name="searchText" value="" placeholder="ค้นหา"/> */}
                                            </div>
                                            <div className="col-md-2 form-group">
                                                {/* <button type="submit" className="btn btn-block btn-info pull-right"><i class="fa fa-search" aria-hidden="true"></i> ค้นหา</button>  */}
                                            </div>
                                        </form>
                                        <div className="col-md-2">
                                            {/* <ModalCreateTeachCourse/> */}
                                                <Link to={'/lecturer/CreateTeachCourse/'+this.state.courseID}>
                                                    <button type="button" className="btn btn-block btn-info pull-right"> <i class="fa fa-plus" aria-hidden="true" ></i> สร้าง</button>
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
                                                    <tr   >
                                                        <th className="col-sm-1" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending">ลำดับ</th>
                                                        <th className="col-sm-3" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending">ห้องเรียน</th>
                                                        <th className="col-sm-3" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending">รหัสวิชา</th>
                                                        <th className="col-sm-1" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending">วันที่</th>
                                                        <th className="col-sm-2" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending">เวลาเข้าเรียน - เวลาเลิกเรียน</th>
                                                        <th className="col-sm-1" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending">ครั้งที่สอน</th>
                                                        <th className="col-sm-2" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" >การจัดการ</th>
                                                    </tr>
                                                </thead>
                                                <tbody >
                                                    { this.state.teachs.map((teach, i) => (
                                                        <tr role="row">
                                                            <td>{i+1}</td>
                                                            <td>{teach.buildingName} {teach.roomname}</td>
                                                            <td>{teach.courseName}</td>
                                                            <td>{this.renderstartdate(teach.startdate)}</td>
                                                            <td>{teach.starttime +' - '+ teach.endtime} น.</td>
                                                            <td>{1+i} </td>
                                                            <td>  
                                                                {/* {this.editteachcourse(teach)} */}
                                                                {this.renderdelete(teach.classID)}
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
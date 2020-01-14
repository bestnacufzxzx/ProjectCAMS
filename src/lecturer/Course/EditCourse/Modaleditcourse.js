
import React, { Component } from 'react'
import axios from 'axios';
import service_uri from '../../../components/variable/service_uri';
import baseurl from '../auth/Baseurl';

export default class Modaleditcourse extends Component {

    
state = {
    Allourses:[],
    courseCode:'',
    courseName:'',
    Allstudent:[],
    firstName : '',
    lastName : '',
    courseID: ''
    // startdate:'',
    // starttime:'',
    // endtime:''
}

handleChange = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
    // console.log(nam)
    // console.log(val)
    console.log(this.state)
}

// RefreshPage = () => { 
//     window.location.href = 'http://localhost:3000/lecturer/Course'; 
// }

componentDidMount(){
    this.getAllCourse();
}

getAllCourse = () => {
    axios.get(service_uri+'lecturers/getAllourse')
    .then(res => {
        this.setState({ Allourses: res.data });
    })
    .catch(error => {
        console.log("====>",error.status);
    });
}

// componentWillMount () {
//     const { teachingID } = this.props.match.params;
//     axios.get(service_uri+'lecturers/getAllourse'+teachingID)
//         .then(res => {
//         const result = res.data.response;
//         result.forEach(element => {
//             if(element.teachingID === teachingID){
//                 this.setState({ 
//                     teachingID: this.state.teachingID,
//                     courseID: this.state.courseID,
//                     lecturerID: this.state.activities_name,
//                 })
//             }
//         });

//         })
//         .catch(error => {
//         });
// }


handleSubmit = (event) => {
    event.preventDefault();
    axios.post(baseurl+'api/lecturers/post_updatecourses/', {
        teachingID: this.state.teachingID,
        courseID: this.state.courseID,
        lecturerID: this.state.activities_name,
    })
    .then(res => {
        console.log(res.data);
    })
    this.RefreshPage();
}

       render() {
        return (
   
             <div>
                <button type="button" className="btn btn-info" data-toggle="modal" data-target="#myModal" ><i class="fa fa-plus" aria-hidden="true" ></i> </button>
                <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                <h4 class="modal-title" id="myModalLabel">กำหนดการสอน</h4>
                            </div>
                            <form onSubmit={this.handleSubmit}>
                            <div class="modal-body">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="col-md-12">
                                            <div class="form-group input-group-sm">
                                                <label for="courseCode" type="text" class="col-form-label">รหัสวิชา - ชื่อวิชา
                                                {/* <select value={this.state.value} onChange={this.handleChange}>
                                                    <option value={}>Grapefruit</option>
                                                </select> */}
                                                </label>
                                                <select name="courseID" class="form-control" onChange={this.handleChange}>
                                                    <option>เลือกรายวิชา</option>
                                                { this.state.Allourses.map((allourse,i) => (
                                                    <option value={allourse.courseID}>{allourse.courseCode+' '+allourse.courseName} onChange={this.handleChange}</option>
                                                )) }
                                                </select>
                                                {/* <input type="text" class="form-control" name="courseCode" id="courseCode" value={this.state.courseCode} onChange={this.handleChange}/> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-default" data-dismiss="modal">ยกเลิก</button>
                                <button type="sumbit" class="btn btn-primary" onClick={ this.handleChange }>บันทึก</button>
                            </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
     
        )
    }
}





import React, { Component } from 'react'
// import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


export default class ModalCreateTeachCourse extends Component {       
state = {
    startDate: '',
    startTime: '',
    endTime:'',
    Allourses:[],
    courseCode:'',
    startdate:'',
    // starttime:'',
    // endtime:''
}

handleChange =  (date)  => {
    // let nam = event.target.name;
    // let val = event.target.value;
    // this.setState({[nam]: val});
    this.setState({startDate:date});
    this.setState({startTime:date});
    this.setState({endTime: date});
   
    // console.log(nam)
    console.log(this.state.date)   
    
}

// RefreshPage = () => { 
//     window.location.href = 'http://localhost:3000/lecturer/Timetreatment'; 
// }
// componentDidMount(){
//     axios.get('http://localhost/cams_server/api/lecturers/getAllourse')
//         .then(res => {
//         this.setState({ Allourses: res.data });
//         })
//         .catch(error => {
//         console.log("====>",error.status);
//         });
// }

// handleSubmit = (event) => {
//     event.preventDefault();
//     axios.post('http://localhost/cams_server/api/cams_server/', {
//         courseCode: this.state.courseCode,
//         startdate: this.state.startdate,
//         starttime : this.state.starttime,
//         endtime : this.state.endtime
//     })
//     .then(res => {
//         console.log(res.data);
//     })
//     this.RefreshPage();
// }

       render() {
        return (
   
             <div>
                 {/* <!-- Button trigger modal --> */}
                 {/* <button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">แก้ไขกำหนดการเรียนการสอน</button> */}
                 <button type="button" className="btn btn-block btn-info pull-right" data-toggle="modal" data-target="#myModal" ><i class="fa fa-plus" aria-hidden="true" ></i> สร้าง</button>

                {/* <!-- Modal --> */}
                <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                            <h4 class="modal-title" id="myModalLabel">กำหนดการสอน</h4>
                        </div>
                        <div class="modal-body">
                            <div className="row">
                                <div className="col-sm-12">
                                    <div class="col-md-12">
                                        <div class="form-group input-group-sm">
                                            <label for="courseCode" type="text" class="col-form-label">ห้องที่สอน
                                                <select value={this.state.value} onChange={this.handleChange}>
                                                    <option value={this.state.value}>Grapefruit</option>
                                                </select>
                                            </label>
                                            <input type="text" class="form-control" name="courseCode" id="courseCode" value={this.state.courseCode} onChange={this.handleChange}/>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group input-group-sm">
                                            <label for="startdate" type="text" class="col-form-label">วันที่สอน :  </label>
                                            <DatePicker
                                                selected={this.state.startDate}
                                                showPopperArrow={false}
                                                onChange={this.handleChange}
                                          />
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group input-group-sm">
                                            <label for="starttime"  class="col-form-label"> เวลาเข้าเรียน :  </label>                                           
                                            <DatePicker
                                                selected={this.state.startTime}
                                                onChange={this.handleChange}
                                                showTimeSelect
                                                showTimeSelectOnly
                                                timeIntervals={15}
                                                timeCaption="Time"
                                                dateFormat="h:mm aa"
                                            />
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group input-group-sm">
                                            <label for="endtime" type="text" class="col-form-label"> เวลาเลิกเรียน :  </label>
                                            {/* <input type="text" class="form-control" name="endtime" id="endtime" value={this.state.endtime} onChange={this.handleChange}/> */}
                                            <DatePicker
                                                selected={this.state.endTime}
                                                onChange={this.handleChange}
                                                showTimeSelect
                                                showTimeSelectOnly
                                                timeIntervals={15}
                                                timeCaption="Time"
                                                dateFormat="h:mm aa"
                                            />
                                        </div>
                                    </div>
                                    {/* <div class="col-md-6">
                                        <div class="form-group input-group-sm">
                                            <label for="endtime" type="text" class="col-form-label">นักศึกษา </label>
                                            <input type="text" class="form-control" name="endtime" id="endtime" value={this.state.endtime} onChange={this.handleChange}/>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-default" data-dismiss="modal">ยกเลิก</button>
                            <button type="button" class="btn btn-primary">บันทึก</button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
     
        )
    }
}




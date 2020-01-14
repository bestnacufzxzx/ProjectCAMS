
import React, { Component } from 'react'
import axios from 'axios';
import Day from '../../../components/Day';
import baseurl from '../../auth/Baseurl';

export default class ModaleditTeachCourse extends Component {

    state = {
        courseCode:'',
        startdate:'',
        starttime:'',
        endtime:''
    }
    
    handleChange = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
        console.log(nam)
        console.log(this.state)
    }
    
    
    RefreshPage = () => { 
        window.location.href = 'http://localhost:3000/lecturer/Course'; 
    }
    
    
    handleSubmit = (event) => {
        event.preventDefault();
        axios.post(baseurl+'api/lecturers/', {
            courseCode: this.state.courseCode,
            startdate: this.state.startdate,
            starttime : this.state.starttime,
            endtime : this.state.endtime
        })
        .then(res => {
            console.log(res.data);
        })
        this.RefreshPage();
    }

       render() {
        return (
   
             <div>
                 {/* <!-- Button trigger modal --> */}
                 {/* <button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">แก้ไขกำหนดการเรียนการสอน</button> */}
                 {/* <button type="button" className="btn btn-block btn-info pull-right" data-toggle="modal" data-target="#myModal" ><i class="fa fa-plus" aria-hidden="true" ></i> สร้าง</button> */}
                <button type="button" className="btn btn-danger" data-toggle="modal" data-target="#myModal"><i className="fa fa-edit"></i></button> 

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
                                    {/* <div class="col-md-6">
                                        <div class="form-group input-group-sm">
                                            <label>รหัสวิชา</label>
                                            <input type="number" class="form-control" name="" id="" placeholder="" value=""/>
                                        </div>
                                    </div> */}
                                    <div class="col-md-6">
                                        <div class="form-group input-group-sm">
                                            <label>วันที่</label>
                                            <input type="number" class="form-control" name="" id="" placeholder="" value=""/>
                                            <Day/>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group input-group-sm">
                                            <label>เวลาเข้าเรียนเวลา</label>
                                            <input type="text" class="form-control" name="" id="" placeholder="" value=""/>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group input-group-sm">
                                            <label>เวลาเข้าเลิกเรียน</label>
                                            <input type="text" class="form-control" name="" id="" placeholder="" value=""/>
                                        </div>
                                    </div>
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





import React, { Component } from 'react'
import axios from 'axios';
import service_uri from '../../../components/variable/service_uri';
import DatePicker, { registerLocale } from 'react-datepicker';
import th from "date-fns/locale/th"; // the locale you want
import setMinutes from "date-fns/setMinutes";
import setHours from "date-fns/setHours";
import 'react-datepicker/dist/react-datepicker.css';
import Breadcrumb from '../../../components/Breadcrumb';
import { Link } from "react-router-dom";
registerLocale("th", th); // register it with the name you want


export default class CreateTeachCourse extends Component {       
    
    state = {
        startDate: setHours(setMinutes(new Date(), 0), 6),
        endDate: setHours(setMinutes(new Date(), 0), 22),
        startTime: '',
        endTime:'',

        startcheck: setHours(setMinutes(new Date(), 0), 6),
        endcheck: setHours(setMinutes(new Date(), 0), 22),

        courseCode:'',
        startdate:'',
        allrooms:[],
        roomID:'',
        roomname:''
        // starttime:'',
        // endtime:''
    }
    
    handleChange =  date  => {
        let nam = date.target.name;
        let val = date.target.value;
        this.setState({[nam]: val});
    //     console.log(this.state)
       
    //     console.log(nam)
    //     console.log(this.state.date)   
        
    }

    handleChangeStartDate = date => {
        this.setState({"startDate": date})
        let d1 = new Date(date);
        let Da = d1.getDate();
        let Mon = d1.getMonth();
        let Year = d1.getFullYear();
        let h = d1.getHours();
        let mm = d1.getMinutes();
        let time = (h + ":" + mm);
        let day = (Da + "/" + Mon + "/" + Year);
        // let m = d2.getMilliseconds();
        console.log("startDate "+ time + "  "+ day);
        // console.log("startDate "+ d1);
    }

    handleChangeEndDate = date => {
        this.setState({"endDate": date})
        let d1 = new Date(date);
        let Da = d1.getDate();
        let Mon = d1.getMonth();
        let Year = d1.getFullYear();
        let h = d1.getHours();
        let mm = d1.getMinutes();
        let time = (h + ":" + mm);
        let day = (Da + "/" + Mon + "/" + Year);
        // let m = d2.getMilliseconds();
        console.log("startDate "+ time + "  "+ day);
    }

    handleChangeStartcheckDate = date => {
        this.setState({"startcheck": date})
        let d1 = new Date(date);
        let h = d1.getHours();
        let mm = d1.getMinutes();
        let StartcheckDate_time = (h + ":" + mm);
        console.log("startDate "+ StartcheckDate_time );
        return(
            StartcheckDate_time
        )
    }

    handleChangeEndcheckDate = date => {
        this.setState({"endcheck": date})
        let d1 = new Date(date);
        let h = d1.getHours();
        let mm = d1.getMinutes();
        let EndcheckDate_time = (h + ":" + mm);
        console.log("startDate "+ EndcheckDate_time);
        return (
            EndcheckDate_time
        )
    }

    // handleChanges =  date  => {   
    //     this.setState({startDate:date});
    //     this.setState({startTime:date});
    //     this.setState({endTime: date});        
    // }

    componentDidMount(){
        this.getAllRoom();
        this.setState({courseID: this.props.match.params.courseID})
    }

    getAllRoom = () => {
        axios.get(service_uri+'lecturers/getroom')
        .then(res => {
            this.setState({ allrooms: res.data });
        })
        .catch(error => {
            console.log("====>",error.status);
        });
    }
    

    changestarttime(startDate){
        let d1 = new Date(startDate);
        let h = d1.getHours();
        let mm = d1.getMinutes();
        let time = (h + ":" + mm);
        return(
            time
        )
    }

    changeendtime(endDate){
        let d1 = new Date(endDate);
        // let Da = d1.getDate();
        // let Mon = d1.getMonth();
        // let Year = d1.getFullYear();
        let h = d1.getHours();
        let mm = d1.getMinutes();
        let End_time = (h + ":" + mm);
        return(
            End_time
        )
    }

    changestartdate(date){
        let d1 = new Date(date);
        let Da = d1.getDate();
        let Mon = (1)+d1.getMonth();
        let Year = d1.getFullYear();
        let startdate = (Year + "-" + Mon + "-" + Da);
        return(
            startdate
        )
    }

    changestartchec(startcheck){
        let d1 = new Date(startcheck);
        let h = d1.getHours();
        let mm = d1.getMinutes();
        let StartcheckDate_time = (h + ":" + mm);
        return(
            StartcheckDate_time
        )
    }

    changeendcheck(endcheck){
        let d1 = new Date(endcheck);
        let h = d1.getHours();
        let mm = d1.getMinutes();
        let EndcheckDate_time = (h + ":" + mm);
        return(
            EndcheckDate_time
        )
    }

    handleSubmit = (event) =>{
        let startDate = this.state.startDate;
        let endDate = this.state.endDate;
        let date = this.state.startDate;
        let endcheck = this.state.endcheck;
        let startcheck = this.state.startcheck;

        if (!this.state.roomID){
            alert("กรุณาเลือกห้องเรียน")
        }

        // }else{
            console.log(this.state.roomID)
            event.preventDefault();
            // let lecturerID = localStorage.getItem("lecturerID");
            axios.post(service_uri+'lecturers/createclassbyTeachs', {
        
                // lecturerID : lecturerID,
                courseID: this.state.courseID,
                roomID: this.state.roomID,
                starttime: this.changestarttime(startDate),
                endtime: this.changeendtime(endDate),
                startdate: this.changestartdate(date),
                startcheck: this.changeendcheck(startcheck),
                endcheck: this.changeendcheck(endcheck),
                })
                .then(res => {
            
                alert("บันทึกสำเร็จ")
                // this.RefreshPage();
                })
                .catch(error => {
                console.log("====>",error.status);
                alert("เวลาซ้ำ")
                });
        
    }
    RefreshPage=()=> { 
        window.location.href = 'http://localhost:3000/lecturer/Teachs/'+this.state.courseID; 
    }

       render() {
            console.log(this.state.courseID);
            console.log(this.state.checkDate_time);
            // console.log(handleChangeEndcheckDate())    
        return (

            
             <div className="content-wrapper">
                <Breadcrumb header="กำหนดการเรียนการสอน" subheader="" arrow={
                    [
                        {"icon":"", "title":"กำหนดการเรียนการสอน", "link":"#", "active":"active"}
                    ]
                } />
                <div className="content body">
                    
                    <div className="row">
                        <div className="col-md-12">
                            <div className="box box-primary">
                                <div className="box-body">
                                    <br />
                                    <form onSubmit={this.handleSubmit}>
                                        <div className="row">
                                            <div className="col-sm-4">
                                                <div class="form-group input-group-sm">
                                                    <label for="roomname" type="text" class="col-form-label">ห้องเรียน</label>
                                                    <select name="roomID" class="form-control" onChange={this.handleChange}>
                                                        <option >เลือกห้องเรียน</option>
                                                        { this.state.allrooms.map((allroom,i) => (
                                                            <option value={allroom.roomID}>{allroom.roomname}</option>
                                                        )) }
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-sm-4">
                                                <div class="form-group">
                                                    <label for="courseName" type="text" class="col-form-label">วันเริ่มต้นการสอน</label> : 
                                                   <DatePicker 
                                                        dateFormat=" dd/MM/yyyy"
                                                        selected={this.state.startDate}
                                                        onChange={date => this.handleChangeStartDate(date)}
                                                        selectsStart
                                                        startDate={this.state.startDate}
                                                        endDate={this.state.endDate}
                                                        locale='th'
                                                   />
                                                </div>
                                                <div class="form-group">
                                                    <label for="courseName" type="text" class="col-form-label">วันสิ้นสุดการสอน</label> : 
                                                    <DatePicker 
                                                        dateFormat=" dd/MM/yyyy"
                                                        selected={this.state.endDate}
                                                        onChange={date => this.handleChangeEndDate(date)}
                                                        selectsStart
                                                        startDate={this.state.startDate}
                                                        endDate={this.state.endDate}
                                                        minDate={this.state.startDate}
                                                        locale='th'

                                                   />
                                                </div>
                                            </div>
                                            <div className="col-sm-4">
                                                <div class="form-group">
                                                    <label for="courseName" type="text" class="col-form-label">เวลาเริ่มการสอน</label> : 
                                                    <DatePicker
                                                        locale='th'
                                                        selected={this.state.startDate}
                                                        onChange={date => this.handleChangeStartDate(date)}
                                                        showTimeSelect
                                                        showTimeSelectOnly
                                                        timeIntervals={1}
                                                        timeCaption=" Time"
                                                        dateFormat=" H:mm "
                                                        minTime={this.state.startDate}
                                                        maxTime={this.state.endDate}

                                                    />
                                                </div>
                                                <div class="form-group">
                                                    <label for="courseName" type="text" class="col-form-label">เวลาสิ้นการสอน</label> : 
                                                    <DatePicker 
                                                        locale='th'
                                                        selected={this.state.endDate}
                                                        onChange={date => this.handleChangeEndDate(date)}
                                                        showTimeSelect
                                                        showTimeSelectOnly
                                                        timeIntervals={1}
                                                        timeCaption=" Time"
                                                        dateFormat=" H:mm "
                                                        minTime={this.state.startDate}
                                                        maxTime={this.state.endDate}
                                                   />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-4">
                                            </div>
                                            <div className="col-sm-4">
                                                <div class="form-group">
                                                    <label for="courseName" type="text" class="col-form-label">เวลาเริ่มการลงเวลาเข้าเรียน</label> : 
                                                    <DatePicker
                                                        selected={this.state.startcheck}
                                                        onChange={date => this.handleChangeStartcheckDate(date)}
                                                        showTimeSelect
                                                        showTimeSelectOnly
                                                        timeIntervals={1}
                                                        timeCaption=" Time"
                                                        dateFormat=" H:mm"
                                                        minTime={this.state.startDate}
                                                        maxTime={this.state.endcheck}
                                                        locale='th'

                                                    />
                                                </div>
                                            </div>
                                            <div className="col-sm-4">
                                                <div class="form-group">
                                                    <label for="courseName" type="text" class="col-form-label">เวลาสิ้นการลงเวลาเข้าเรียน</label> : 
                                                    <DatePicker 
                                                        selected={this.state.endcheck}
                                                        onChange={date => this.handleChangeEndcheckDate(date)}
                                                        showTimeSelect
                                                        showTimeSelectOnly
                                                        timeIntervals={1}
                                                        timeCaption=" Time"
                                                        dateFormat=" H:mm"
                                                        minTime={this.state.startcheck}
                                                        maxTime={this.state.endDate}
                                                        locale='th'

                                                   />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="box-footer clearfix">
                                            <input type="hidden" name="" value=""/>
                                            <button type="submit" className="pull-right btn btn-success" onClick={ this.handleChange }>
                                                <i className="fa fa-arrow-circle-right"></i> บันทึก
                                            </button>
                                            <Link to={'/lecturer/Teachs/'+this.state.courseID}><button type="button" className="pull-right btn btn-danger"><i className="fa fa-arrow-circle-left"></i>  กลับ </button> </Link>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
     
        )
    }
}




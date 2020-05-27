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


export default class EditTeachCourse extends Component {       
    
    state = {
        startDate: '',
        endDate: '',
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

    // lerdate =(date)=>{
    //     let d1 = new Date(date);
    //     let Da = d1.getDate();
    //     let Mon = d1.getMonth();
    //     let Year = d1.getFullYear();
    //     let h = d1.getHours();
    //     let mm = d1.getMinutes();
    //     let time = (h + ":" + mm);
    //     let day = (Da + "/" + Mon + "/" + Year);
    //     console.log("startDate "+ time + "  "+ day); 
    // }

    // handleChanges =  date  => {   
    //     this.setState({startDate:date});
    //     this.setState({startTime:date});
    //     this.setState({endTime: date});        
    // }

    componentDidMount(){
        this.getAllRoom();
        this.setState({courseID: this.props.match.params.courseID})
        const classID = this.props.match.params.classID
        this.setState({clID:classID})
        this.getbeforupdatebyclassID(classID);
    }

    getbeforupdatebyclassID =(classID)=> {
        axios.get(service_uri+'lecturers/getparamdataclassbyclassID?classID='+classID)
        .then(response => {
            const result = response.data;
            result.forEach(element => {
                // if(element.classID == classID){
                    let startdate = new Date(element.startdate+' '+element.starttime);
                    let enddate = new Date(element.startdate+' '+element.endtime);
                    let startcheck = new Date(element.startdate+' '+element.startcheck);
                    let endcheck = new Date(element.startdate+' '+element.endcheck);
                    
                    this.setState({ 
                        classID : element.classID,
                        courseID : element.courseID,
                        roomID : element.roomID,
                        // starttime : element.starttime,
                        // endtime : element.endtime,
                        // startdate : this.lerdate(element.startdate),
                        startDate: startdate,
                        endDate: enddate,
                        startcheck : startcheck,
                        endcheck: endcheck
            //             roomname : element.roomname,
                    })
                // }
            });

        })
        .catch(error => {
            console.log(error);
        });
    }

    getAllRoom = () => {
        const  namecourse = this.props.match.params.namecourse;
        this.setState({namecourse})
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
        let classID = this.state.clID;
        if (!this.state.roomID){
            alert("กรุณาเลือกห้องเรียน")
        }else{
            console.log(this.state.roomID,this.state.clID)
            event.preventDefault();
            // let lecturerID = localStorage.getItem("lecturerID");
            axios.post(service_uri+'lecturers/updateclassbyTeachs', {
        
                classID : classID,
                courseID: this.state.courseID,
                roomID: this.state.roomID,
                starttime: this.changestarttime(startDate),
                endtime: this.changeendtime(endDate),
                startdate: this.changestartdate(date),
                startcheck: this.changeendcheck(startcheck),
                endcheck: this.changeendcheck(endcheck),
                })
                .then(res => {
                    console.log("====>",res.message);
                    alert("บันทึกสำเร็จ")
                    this.RefreshPage();
                })
                .catch(error => {
                    console.log("====>",error.status);
                    // alert("เวลาห้องเรียนมีอยู่แล้ว")
                });
        }
        
    }
    RefreshPage=()=> { 
        window.location.href = 'http://localhost:3000/lecturer/Teachs/'+this.state.courseID+"/"+this.state.namecourse; 
    }

       render() {
            console.log(this.state.courseID);
            console.log(this.state.checkDate_time);
            // console.log(handleChangeEndcheckDate())    
            console.log(this.state.roomID);
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
                                    <form onSubmit={this.handleSubmit}>
                                        <div className="row"> {/* 1 */}
                                            {/* <div className="col-md-4">
                                                <div class="form-group input-group-sm">
                                                    <label for="roomname" type="text" class="col-form-label">อาคาร</label>
                                                    <select name="roomID" class="form-control" onChange={this.handleChange}>
                                                        <option value="">เลือกอาคาร</option>
                                                        { this.state.allrooms.map((allroom,i) => (
                                                            <option value={allroom.roomID}>{allroom.roomname}</option>
                                                        )) }
                                                    </select>
                                                </div>
                                            </div> */}
                                            <div className="col-md-4">
                                                <div class="form-group input-group-sm">
                                                    <label for="roomname" type="text" class="col-form-label">ห้องเรียน</label>
                                                    <select name="roomID" class="form-control" onChange={this.handleChange}>
                                                        <option value="">เลือกห้องเรียน</option>
                                                        { this.state.allrooms.map((allroom,i) => (
                                                            (allroom.roomID == this.state.roomID)?<option value={allroom.roomID} selected>{allroom.roomname}</option>:<option value={allroom.roomID}>{allroom.roomname}</option>
                                                        )) }
                                                    </select>   
                                                </div>
                                            </div>
                                           
                                        </div>
                                        <div className="row"> {/* 2 */}
                                            <div className="col-md-4"> 
                                                <div class="form-group">
                                                    <label for="courseName" type="text" class="col-form-label">วันเริ่มต้นการสอน</label> : 
                                                   <DatePicker 
                                                        dateFormat=" dd/MM/yyyy"
                                                        // selected={this.state.startDate}
                                                        selected={(this.state.startDate)?this.state.startDate:  setHours(setMinutes(new Date(), 0), 6)}
                                                        onChange={date => this.handleChangeStartDate(date)}
                                                        // selectsStart
                                                        startDate={this.state.startDate}
                                                        endDate={this.state.endDate}
                                                        // selected={this.state.startDate}
                                                        locale='th'
                                                   />
                                                </div>
                                            </div>
                                            <div className="col-md-4">
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
                                            </div>
                                            <div className="col-md-4">
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
                                        </div> 
                                        <div className="row"> {/* 3 */}
                                            <div className="col-md-4">
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
                                            <div className="col-md-4">
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
                                            <div className="col-md-4">
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
                                            <Link to={'/lecturer/Teachs/'+this.state.courseID+"/"+this.state.namecourse}><button type="button" className="pull-right btn btn-danger"><i className="fa fa-arrow-circle-left"></i>  กลับ </button> </Link>
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




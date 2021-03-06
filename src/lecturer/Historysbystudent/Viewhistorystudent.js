import React, { Component } from 'react'
import Breadcrumb from '../../components/Breadcrumb'
import axios from 'axios';
// import { Link } from "react-router-dom";
import baseurl from '../../auth/Baseurl';

export default class Viewhistorystudent extends Component {
  
    state = {
        historys : [],
        course:'',
        image_path: '',
        modal_picture:  '',
        his:'',
        Change_status: ''
    }

    chackstatus = (status) => {      
        if(status === "1"){
            return(
                <h4><span class="label label-success">เข้าเรียน</span></h4>
            )
        }else if(status === "2"){
            return(
                <h4><span class="label label-warning">เข้าเรียนสาย</span></h4>
            )
        }else{
            return(
                <h4><span class="label label-danger">ไม่เข้าเข้าเรียน</span></h4>
            )
        }
    }

    chackstatusdate = (date) =>{
        if(date){
            return (date);
        }else{
            return <h5>-</h5>
        }
    }

    chackpic = (pic) =>{
        if(pic){
            return (<img src={this.state.image_path+pic} width="100px" data-toggle="modal" data-target="#exampleModal" onClick={((e) => this.onclick_modal(e, this.state.image_path+pic))}></img>);
        }else{
            return <h5>-</h5>
        }
    }
    onclick_modal = (event, pic) => {
        this.setState({'modal_picture': pic});
        console.log(pic);
    }
    export_file = () => {
        const  studentID = this.props.match.params.studentID;
        const  courseID = this.props.match.params.courseID;
        window.open(baseurl+'Reportfile/export/'+courseID+'/'+studentID, '_blank');
    }

    chackLateClass(LateClass){
        if(LateClass == 0){
            return <span class="label label-success">{LateClass} % </span>
        }else{
            return <span class="label label-warning">{LateClass} % </span>
        }
    }

    chackMissclass = (Missclass) =>{
        if(Missclass <= 19 ){
            return <span class="label label-success">{Missclass} % </span>
        }else{
            return <span class="label label-danger">{Missclass} % </span>
        }
    }

    missstatus = (miss) =>{
        if(miss <= 0){
            return <h4> จำนวนที่สามารถขาดเรียนได้ {this.state.remainMissClass} คงเหลืออีก {miss} ครั้ง</h4>  ;
        }else{
            return <h4> จำนวนที่สามารถขาดเรียนได้ {this.state.remainMissClass} คงเหลืออีก {miss} ครั้ง</h4>;
        }
    }

    missmessage = (miss) =>{
        if(miss < 0){
            return <h4><span class="label label-danger">หมดสิทธิ์สอบ</span></h4>
        }
    }

    renderedit = (history) => {
        return(
              <button type="button" className="btn btn-success" data-toggle="modal" data-target="#exampleModal2" onClick={((e) => this.onclick_modal2(e,history))}> <i class="fa fa-edit" aria-hidden="true"> </i> </button>
        )
    };
    onclick_modal2 = (event, his) => {
        this.setState({his: his});
        console.log(his);
    }

    Changestatus = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
    
    }
    handleSubmit = (event) =>{
        event.preventDefault();

    }
    
    componentDidMount(){

        const script = document.createElement("script");
        script.src = '../../../../../js/ShowCourse/content.js';
        script.async = true;
        document.body.appendChild(script);


        const  studentID = this.props.match.params.studentID;
        const  courseID = this.props.match.params.courseID;
        // console.log(user_id+"asdasd"+courseID)

        axios.post(baseurl+'api/checknamestudent/getnamebystudentid', {user_ID:studentID} )
        .then(res => {
            let fname = (res.data.fname);
            let lname = (res.data.lname);
            let prefix = (res.data.prefix);
            this.setState({fname});
            this.setState({lname});
            this.setState({prefix});
            // console.log(this.state.fname)
        })
        .catch(error => {
            console.log("====>",error.status);
        });
        
        axios.post(baseurl+'api/Checknamestudent/postHistoryChecknameByCourse', { courseID: courseID,user_ID:studentID} )
        .then(res => {
        this.setState({ historys: res.data.result, image_path: res.data.path });
        })
        .catch(error => {
        console.log("====>",error.status);
        });

        axios.post(baseurl+'api/Checknamestudent/percent_check_name', { courseID: courseID,user_ID:studentID} )
        .then(res => {
            let percent = (res.data.percent) 
            let LateClass = (res.data.percentLateClass) 
            let MissClass = (res.data.percentMissClass) 
            let remainMissClass = (res.data.remainMissClass) 
            let remain = (res.data.remain) 
    
            let total = (res.data.total) 
            this.setState({percent})
            this.setState({remainMissClass})
            this.setState({remain})
            this.setState({LateClass})
            this.setState({MissClass})
            this.setState({total})
        })
        .catch(error => {
        console.log("====>",error.status);
        });
    

        }
        

    render() {
        return (
   
             <div className="content-wrapper">
                <Breadcrumb header="ประวัตินักศึกษา" subheader={<h4>{this.state.prefix+" "+this.state.fname+" "+this.state.lname}</h4>}  arrow={
                    [
                        // {"icon":"", "title":"รายวิชาที่สอน", "link":"#", "active":"active"}
                    ]
                } />
                
                <div className="content body">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="box theader-search-sky">
                                <div class="box-header">
                                <div className="row">
                                        <div className="col-md-4">
                                            <label> 
                                                <h4>
                                                    เปอร์เซ็นการเข้าเรียน : <span class="label label-primary">{this.state.percent} % </span> 
                                                </h4>
                                            </label>
                                        </div>
                                        <div className="col-md-4">
                                            <label> 
                                                <h4>
                                                    เปอร์เซ็นการเข้าเรียนสาย : {this.chackLateClass(this.state.LateClass)}
                                                </h4>
                                            </label>
                                        </div>
                                        <div className="col-md-4">
                                            <label> 
                                                <h4>
                                                    เปอร์เซ็นการขาดเรียน : {this.chackMissclass(this.state.MissClass)}  
                                                </h4>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-4">
                                            <label> 
                                                <h4>จำนวนคาบทั้งหมด {this.state.total} </h4>
                                            </label>
                                        </div>
                                        <div className="col-md-4">
                                            <label> 
                                                {/* {this.missstatus(this.state.remain)} */}
                                            </label>
                                        </div>
                                        <div className="col-md-4">
                                            <label> 
                                                 {this.missmessage(this.state.remain)}
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3">
                        </div>
                        <div className="col-md-6">
                        </div>
                        <div className="col-md-3">
                            <button type="button" className="btn btn-block btn-info" onClick={this.export_file}><i className="fa fa-table" aria-hidden="true"></i> ออกรายงานประวัติการเข้าเรียน</button>
                        </div>
                    </div>
                    <br/>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="box box-primary">
                                <div className="box-body table-responsive">
                                    <table id="example5" class="table table-bordered table-striped" role="grid" >
                                        <thead>
                                            <tr>
                                                <th className="col-sm-1" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending">คาบ</th>
                                                <th className="col-sm-1" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending">รูปภาพ</th>
                                                <th className="col-sm-2" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending">อาคารเรียน</th>
                                                <th className="col-sm-2" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending">ห้องเรียน</th>
                                                <th className="col-sm-2" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending">วัน-เวลา</th> 
                                                <th className="col-sm-2" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending">สถานะเข้าเรียน</th>
                                                {/* <th className="col-sm-2" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending">การจัดการ</th> */}
                                            
                                            </tr>
                                        </thead>
                                        <tbody>
                                            { this.state.historys.map((history, i) => (
                                                    <tr role="row">
                                                        <td>{i+1}</td>
                                                        <td><c1>{this.chackpic(history.picture)}</c1></td>
                                                        <td>{history.buildingName}</td>
                                                        <td>{history.roomname}</td>
                                                        <td>{this.chackstatusdate(history.datetime)}</td>
                                                        <td>{this.chackstatus(history.status)}</td>
                                                        {/* <td>{this.renderedit(history.status)}</td> */}
                                                    </tr>
                                                ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel">
                    <div class="modal-dialog" role="document">
                            <img src={this.state.modal_picture} width="100%"></img>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
                <div class="modal fade" id="exampleModal2" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                            <h4 class="modal-title" id="exampleModalLabel">แก้ไขสถานะนักศึกษา</h4>
                        </div>
                        <form onSubmit={this.handleSubmit}>
                            <div class="modal-body">
                                <div>
                                    <div className="col-md-12">
                                        <div class="form-group">
                                            <select name="Change_status" class="form-control"  onChange={this.Changestatus} >
                                                <option value="1">เข้าเรียน</option>
                                                <option value="2">เข้าเรียนสาย</option>
                                                <option value="3">ไม่เข้าเข้าเรียน</option>
                                            </select>
                                            {this.state.Change_status}
                                            {this.state.hit}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="submit" class="btn btn-default" data-dismiss="modal">ยกเลิก</button>
                                <button type="button" class="btn btn-primary">บันทึก</button>
                            </div>
                        </form>
                        </div>
                    </div>
                </div>
            </div>
     
        )
    }
}


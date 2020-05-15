import React, { Component } from 'react'
import Breadcrumb from '../components/Breadcrumb';
// import { Link } from "react-router-dom";
import axios from 'axios';
import baseurl from '../auth/Baseurl';
import { Lightbox } from "react-modal-image";
const closeLightbox = () => {
    this.state.open = true;
  };
export default class Showhistorycourse extends Component {


    state = {
        historys : [],
        image_path: '',
        modal_picture:  ''
        // percents:0
    }

    componentWillMount = () =>{
        const script = document.createElement("script");
        script.src = '../../../js/ShowCourse/content.js';
        script.async = true;
        document.body.appendChild(script);

        this.setState({historyuser_ID: this.props.match.params.historyuser_ID})
        console.log(this.state.historyuser_ID)
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
            return ("-");
        }
    }
    
    chackpic = (pic) =>{
        if(pic){
            return (<img src={this.state.image_path+pic} width="100px" data-toggle="modal" data-target="#exampleModal" onClick={((e) => this.onclick_modal(e, this.state.image_path+pic))}></img>);
        }else{
            return ("-")
        }
    }

    onclick_modal = (event, pic) => {
        this.setState({'modal_picture': pic});
        console.log(pic);
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

    renderCheckstatus = (rehistory) =>{
        let d1 = new Date();
        let d2 = new Date(rehistory.datetime);     
        console.log("ปัจจุบัน",d1);
        console.log("เริ่ม",d2);
    }

    componentDidMount(){
        const { historycourseID,historyuser_ID } = this.props.match.params;
        // const { historyuser_ID } = this.props.match.params.historyuser_ID;
        console.log(historycourseID,historyuser_ID)
        // let user_ID = localStorage.getItem("username");
        axios.post(baseurl+'api/Checknamestudent/postHistoryChecknameByCourse', { courseID: historycourseID,user_ID:historyuser_ID} )
        .then(res => {
        this.setState({ historys: res.data.result, image_path: res.data.path });
        // this.setState({ historys: res.data });
        })
        .catch(error => {
        console.log("====>",error.status);
        });

        axios.post(baseurl+'api/Checknamestudent/percent_check_name', { courseID: historycourseID,user_ID:historyuser_ID} )
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
    
        const script = document.createElement("script");
        script.src = '../js/Showimportteacher/content.js';
        script.async = true;
        document.body.appendChild(script);
    }

    alldate = (data) =>{
        let today = new Date(data);
        let date=today.getDate() + "-"+ parseInt(today.getMonth()+1) +"-"+today.getFullYear();
        return    date                     
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

    render() {
        console.log(this.state.historys)
        return (
   
             <div className="content-wrapper">
                <Breadcrumb header="ประวัติการเข้าเรียน" subheader="" arrow={
                    [
                        // {"icon":"", "title":"ประวัติการเข้าเรียน", "link":"#", "active":"active"}
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
                                                    เปอร์เซ็นการเข้าเรียน : <span class="label label-primary">{this.state.percent} %  </span> 
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
                                                จำนวนคาบทั้งหมด {this.state.total}
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
                        <div className="col-md-12">
                            <div className="box box-primary">
                                <div className="box-body table-responsive">
                                    {/* <br />
                                    <div className="row">
                                        <div className="col-sm-12"> */}
                                            <table id="example5" class="table table-bordered table-striped" role="grid" >
                                                <thead>
                                                    <tr   >
                                                        <th className="col-sm-1" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending">คาบ</th>
                                                        <th className="col-sm-3" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending">รูปภาพ</th>
                                                        <th className="col-sm-2" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending">อาคารเรียน</th>
                                                        <th className="col-sm-2" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending">ห้องเรียน</th>
                                                        <th className="col-sm-2" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending">วัน-เวลา</th> 
                                                        <th className="col-sm-2" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending">สถานะเข้าเรียน</th>
                                                   
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    { this.state.historys.map((history, i) => (
                                                            <tr role="row">
                                                                <td>{i+1}</td>
                                                                <td>{this.chackpic(history.picture)}</td>
                                                                <td>{history.buildingName}</td>
                                                                <td>{history.roomname}</td>
                                                                <td>{this.chackstatusdate(history.datetime)}</td>
                                                                <td><c1>{this.chackstatus(history.status)}</c1></td>
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
                <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel">
                    <div class="modal-dialog" role="document">
                            <img src={this.state.modal_picture} width="100%"></img>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
     
        


        )
    }
}


import React, { Component } from 'react'
import Breadcrumb from '../components/Breadcrumb';
// import { Link } from "react-router-dom";
import axios from 'axios';
import baseurl from '../auth/Baseurl';


export default class Showhistorycourse extends Component {


    state = {
        historys : [],
        image_path: '',
        // percents:0
    }

    componentWillMount = () =>{
        this.setState({historyuser_ID: this.props.match.params.historyuser_ID})
        console.log(this.state.historyuser_ID)
    }

    chackstatus = (status) => {
        

        if(status === "1"){
            return(
                "เข้าเรียน"
            )
        }else if(status === "2"){
            return(
                "เข้าเรียนสาย"
            )
        }else if(status === "3"){
            return(
                "ไม่เข้าเรียน"
            )
        }else{
            return(
                "-"
            )
        }


    }

    chackMissclass = (Missclass) =>{
        if(Missclass <= 19 ){
            return <span class="badge bg-success">{Missclass} % </span>
        }else{
            return <span class="badge bg-green">{Missclass} % </span>
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
                                                    เปอร์เซ็นการเข้าเรียน :<span class="badge bg-green">{this.state.percent} %  </span> 
                                                </h4>
                                            </label>
                                        </div>
                                        <div className="col-md-4">
                                            <label> 
                                                <h4>
                                                    เปอร์เซ็นการเข้าเรียนสาย :<span class="badge bg-green">{this.state.LateClass} %  </span>
                                                </h4>
                                            </label>
                                        </div>
                                        <div className="col-md-4">
                                            <label> 
                                                <h4>
                                                    เปอร์เซ็นการขาดเรียน :{this.chackMissclass(this.state.MissClass)}  
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
                                                {"จำนวนที่สามารถขาดเรียนได้ "+this.state.remainMissClass+" คงเหลืออีก "+this.state.remain+" ครั้ง"}   
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
                                            <table id="example1" class="table table-bordered table-striped" role="grid" >
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
                                                                {/* <td>{history}</td> */}
                                                                <td><img src={this.state.image_path+history.picture} width="100px"></img></td>  
                                                                <td>{history.buildingName}</td>
                                                                <td>{history.roomname}</td>
                                                                <td>{history.datetime}</td>
                                                                <td>{this.chackstatus(history.status)}</td>
                                                                {/* <td> {this.renderCheckstatus(history)} </td> */}
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


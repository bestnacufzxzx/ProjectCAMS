import React, { Component } from 'react'
import Breadcrumb from '../components/Breadcrumb';
// import { Link } from "react-router-dom";
import axios from 'axios';
import baseurl from '../auth/Baseurl';


export default class Showhistorycourse extends Component {


    state = {
        historys : [],
        // percents:0
    }

    componentWillMount = () =>{
        this.setState({historyuser_ID: this.props.match.params.historyuser_ID})
        console.log(this.state.historyuser_ID)
    }

    renderCheckstatus = (rehistory) =>{
        let d1 = new Date();
        let d2 = new Date(rehistory.datetime);
        // let d3 = new Date(rehistory.startdate+' '+rehistory.endtime);
        // let d3 = new Date(course.startcheck+' '+course.endcheck)         
        console.log("ปัจจุบัน",d1);
        console.log("เริ่ม",d2);
        // console.log("สิ้นสุด",d3);
        // if(rehistory.){
        //
        // }
        //
        //
        //
        //
        //
    }

    componentDidMount(){
        const { historycourseID,historyuser_ID } = this.props.match.params;
        // const { historyuser_ID } = this.props.match.params.historyuser_ID;
        console.log(historycourseID,historyuser_ID)
        // let user_ID = localStorage.getItem("username");
        axios.post(baseurl+'api/Checknamestudent/postHistoryChecknameByCourse', { courseID: historycourseID,user_ID:historyuser_ID} )
        .then(res => {
        this.setState({ historys: res.data });
        })
        .catch(error => {
        console.log("====>",error.status);
        });

        axios.post(baseurl+'api/Checknamestudent/percent_check_name', { courseID: historycourseID,user_ID:historyuser_ID} )
        .then(res => {
        let percent = (res.data.percent) 
        this.setState({percent})
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
                                        <div className="col-md-6">
                                            <label> 
                                                <h4>เปอร์เซ็นการเข้าเรียน :<span class="badge bg-green">{this.state.percent} %</span></h4>
                                                จำนวนคาบที่ 
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
                                <div className="box-body">
                                    {/* <br />
                                    <div className="row">
                                        <div className="col-sm-12"> */}
                                            <table id="example1" class="table table-bordered table-striped" role="grid" >
                                                <thead>
                                                    <tr   >
                                                        <th className="col-sm-1" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending">คาบ</th>
                                                        {/* <th className="col-sm-3" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending">เวลาเข้าเรียน</th> */}
                                                        <th className="col-sm-4" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending">อาคารเรียน</th>
                                                        <th className="col-sm-2" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending">สถานะเข้าเรียน</th>
                                                        <th className="col-sm-2" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending"></th>
                                                   
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    { this.state.historys.map((history, i) => (
                                                            <tr role="row">
                                                                <td>{i+1}</td>
                                                                {/* <td>{history}</td> */}
                                                                {/* <td>{history.datetime}</td> */}
                                                                <td>{history.buildingName}</td>
                                                                <td>{history.status}</td>
                                                                <td> {this.renderCheckstatus(history)} </td>
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


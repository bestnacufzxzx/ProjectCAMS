import React, { Component } from 'react'
import Breadcrumb from '../../components/Breadcrumb'
import axios from 'axios';
// import { Link } from "react-router-dom";
import baseurl from '../../auth/Baseurl';

export default class Viewhistorystudent extends Component {
  
    state = {
        historys : [],
        course:''
    }
    // numeol(i){
        // let classID = i+1
        // this.setState(classID)
        

    // }
    // renderhistoryid(){
    //     // let history = (history);
    //     return(
    //         <Link to={'Historysbystudent'}>
    //             <button type="button" className="btn btn-success"> <i class="fa fa-eye" aria-hidden="true"> </i> </button>
    //         </Link> 
    //     )
    // }
    // chack_rol_status = (status) =>{
    //     if(status === "1" || status === "2"){
    //         this.state.sums = this.state.sums + 1
    //          // console.log(this.state.sums)

    //      }
    //      this.setState({ test : this.state.sums})
    //     //  console.log("asdasd" ,this.state.bub+1)
    //     //  this.setState({sum: this.state.sums})
    // }

    chackpicture =(picture) =>{
        
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

    export_file = () => {
        const  studentID = this.props.match.params.studentID;
        const  courseID = this.props.match.params.courseID;
        window.open(baseurl+'Reportfile/export/'+courseID+'/'+studentID, '_blank');
    }
    
    componentDidMount(){
        const  studentID = this.props.match.params.studentID;
        const  courseID = this.props.match.params.courseID;
        // console.log(user_id+"asdasd"+courseID)

        
        axios.post(baseurl+'api/Checknamestudent/postHistoryChecknameByCourse', { courseID: courseID,user_ID:studentID} )
        .then(res => {
        this.setState({ historys: res.data });
        })
        .catch(error => {
        console.log("====>",error.status);
        });

        axios.post(baseurl+'api/Checknamestudent/percent_check_name', { courseID: courseID,user_ID:studentID} )
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
        // console.log(this.state.classID);
        // console.log(this.state.sum+"asdasdas");
        // console.log(this.state.test);


        return (
   
             <div className="content-wrapper">
                <Breadcrumb header="ประวัตินักศึกษา" subheader="" arrow={
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
                                        <div className="col-md-10">
                                                <label> 
                                                    <h4>เปอร์เซ็นการเข้าเรียน :<span class="badge bg-green">{this.state.percent} %</span></h4>
                                                    จำนวนคาบที่ 
                                                </label>
                                        </div>
                                        <div className="col-md-2">
                                            {/* <Link to={'/admin/Createteaching/'+this.state.courseID}> */}
                                                <button type="button" className="btn btn-block btn-info" onClick={this.export_file}><i className="fa fa-table" aria-hidden="true"></i> ออกรายงานประวัติการเข้าเรียน</button>
                                            {/* </Link> */}
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
                                    <table id="example1" class="table table-bordered table-striped" role="grid" >
                                        <thead>
                                            <tr>
                                                <th className="col-sm-1" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending">คาบ</th>
                                                <th className="col-sm-2" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending">รูปภาพ</th>
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
                                                        <td>{this.chackpicture(history.picture)}</td>
                                                        <td>{history.buildingName}</td>
                                                        <td>{history.roomname}</td>
                                                        <td>{history.datetime}</td>
                                                        <td>{this.chackstatus(history.status)}</td>
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
     
        )
    }
}


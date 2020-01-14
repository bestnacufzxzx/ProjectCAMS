import React, { Component } from 'react'
import Breadcrumb from '../../components/Breadcrumb'
import axios from 'axios';
import { Link } from "react-router-dom";
import baseurl from '../../auth/Baseurl';

export default class Historysbystudent extends Component {
  
    state = {
        historys : [],
        course:''
    }
    
    renderhistoryid(student){
        let studentID = student.studentID;
        let courseID = student.courseID;
        return(
            <Link to={'/lecturer/Viewhistorystudent/'+studentID+"/"+courseID}>
                <button type="button" className="btn btn-success"> <i class="fa fa-eye" aria-hidden="true"> </i> </button>
            </Link> 
        )
    }
    
    
    componentDidMount(){
        const  HistorysbystudentcourseID = this.props.match.params.HistorysbystudentcourseID;
        let courseID = HistorysbystudentcourseID;
        
        axios.get(baseurl+'api/lecturers/gethistorytimetreatment?courseID='+courseID)
        .then(res => {
        this.setState({ historys: res.data });
        })
        .catch(error => {
        console.log("====>",error.status);
        });
    
                // const script = document.createElement("script");
                // script.src = '../js/Showimportteacher/content.js';
                // script.async = true;
                // document.body.appendChild(script);
        }

    render() {
        // console.log(this.state.Course)
        return (
   
             <div className="content-wrapper">
                <Breadcrumb header="ประวัตินักศึกษา" subheader="" arrow={
                    [
                        // {"icon":"", "title":"รายวิชาที่สอน", "link":"#", "active":"active"}
                    ]
                } />
                <div className="content body">
                
                   
                    <div className="row">
                        <div className="col-md-12">
                            <div className="box box-primary">
                                <div className="box-body">
                                    {/* <br />
                                    <div className="row">
                                        <div className="col-sm-12"> */}
                                            <table id="example1" class="table table-bordered table-striped" role="grid" >
                                                <thead>
                                                    <tr>
                                                        <th className="col-sm-1" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending">ลำดับ</th>
                                                        <th className="col-sm-2" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending">รหัสศึกษา</th>
                                                        <th className="col-sm-2" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending">ชื่อ - นามสกุล</th>
                                                        <th className="col-sm-2" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-label="CSS grade: activate to sort column ascending">การจัดการ</th>    
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    { this.state.historys.map((history, i) => (
                                                            <tr role="row">
                                                                <td>{i+1}</td>
                                                                {/* <td>{history}</td> */}
                                                                <td>{history.studentID}</td>
                                                                <td>{history.firstName + " " + history.lastName}</td>
                                                                {/* <td>{history.lastName}</td> */}
                                                                <td className="text-center">
                                                                {this.renderhistoryid(history)}
                                                            </td>
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


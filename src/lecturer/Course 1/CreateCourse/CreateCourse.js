import React, { Component } from 'react'
import Breadcrumb from '../../../components/Breadcrumb';
import { Link } from "react-router-dom";

export default class CreateCourse extends Component {
    componentDidMount(){
        const script = document.createElement("script");
        script.src = '../js/Showimportteacher/content.js';
        script.async = true;
        document.body.appendChild(script);
    }

    render() {
        return (
   
             <div className="content-wrapper">
                <Breadcrumb header="สร้างกำหนดการเรียนการสอน" subheader="" arrow={
                    [
                        {"icon":"", "title":"สร้างกำหนดการเรียนการสอน", "link":"#", "active":"active"}
                    ]
                } />

                
                <div className="content body">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="box box-primary">
                                <div className="box-body">
                                    <br />
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <div class="col-md-6">
                                                <div class="form-group input-group-sm">
                                                    <label>วันที่</label>
                                                    <input type="number" class="form-control" name="" id="" placeholder="" value=""/>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group input-group-sm">
                                                    <label>ครั้งที่สอน</label>
                                                    <input type="text" class="form-control" name="" id="" placeholder="" value=""/>
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
                                    <div className="box-footer clearfix">
                                        <input type="hidden" name="" value=""/>
                                        <button type="submit" className="pull-right btn btn-success">
                                            <i className="fa fa-arrow-circle-right"></i> บันทึก
                                        </button>

                                        <Link to="/lecturer/Course"><button type="button" className="pull-right btn btn-danger"><i className="fa fa-arrow-circle-left"></i>  กลับ </button> </Link>
                                        {/* <a href="" className="pull-right btn btn-danger" style="margin-right: 4px;">
                                            <i className="fa fa-arrow-circle-left"></i> กลับ
                                        </a> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
     
        )
    }
}


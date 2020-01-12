import React, { Component } from 'react'
import Breadcrumb from '../components/Breadcrumb';
import { Link } from "react-router-dom";
// import TextInput from '../../components/TextInput';


export default class ShowStudenthistory extends Component {
    componentDidMount(){
        const script = document.createElement("script");
        script.src = '../js/Showimportteacher/content.js';
        script.async = true;
        document.body.appendChild(script);
    }

    render() {
        return (
   
             <div className="content-wrapper">
                <Breadcrumb header="แสดงประวัติการเข้าเรียน" subheader="" arrow={
                    [
                        {"icon":"", "title":"ประวัติการเข้าเรียน", "link":"#", "active":"active"}
                    ]
                } />

                
                <div className="content body">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="box theader-search-sky">
                                <div class="box-header">                   
                                    <div className="row">
                                        <form action="" method="POST" id="">
                                            <div className="col-md-7 form-group"></div>
                                            <div className="col-md-3 form-group">
                                                <input type="text" className="form-control" name="searchText" value="" placeholder="ค้นหา"/>
                                            </div>
                                            <div className="col-md-2 form-group">
                                                <button type="submit" className="btn btn-block btn-info pull-right"><i class="fa fa-search" aria-hidden="true"></i> ค้นหา</button> 
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
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <table id="example2" className="table table-bordered table-hover dataTable" role="grid" aria-describedby="example2_info">
                                                <thead>
                                                    <tr>
                                                        <th className="col-sm-1" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending">ลำดับ</th>
                                                        <th className="col-sm-2" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending">รหัสวิชา</th>
                                                        <th className="col-sm-2" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending">รายวิชา</th>
                                                        <th className="col-sm-2" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending">อาจารย์ผู้สอน</th>
                                                        <th className="col-sm-2" tabIndex="0" aria-controls="example2"aria-label="CSS grade: activate to sort column ascending">การจัดการ</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr role="row" className="odd">
                                                        <td>1</td>
                                                        <td>swe-112</td>
                                                        <td>Oject</td>
                                                        <td>อาจารย์</td>
                                                        <td> 
                                                            <Link to="/parent/Studyhistory"><button type="button" className="btn btn-primary"><i class="fa fa-eye" aria-hidden="true"></i></button></Link>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div class="modal fade" id="modal-default-create">
                        <div class="modal-dialog">
                            <div class="modal-content">
                            <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span></button>
                                <h4 class="modal-title">แก้ไขข้อมูลนักศึกษา</h4>
                            </div>
                            <div class="modal-body">
                            {/* &hellip; */}

                            <form onSubmit={this.editstudentinformation}>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div class="col-md-6">
                                            <div class="form-group input-group-sm">
                                                <label>รายวิชา</label>
                                                {/* <TextInput value={this.state.firstname} inputname="firstname" classes="form-control" placeholder="กรอกชื่อจริง" change={this.onChangeHandle} /> */}
                                                {/* <input type="text" class="form-control" name="" id="" placeholder="" value=""/> */}
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group input-group-sm">
                                                <label>ห้องเรียน</label>
                                                {/* <TextInput value={this.state.lastname} inputname="lastname" classes="form-control" placeholder="กรอกนามสกุล" change={this.onChangeHandle} /> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div class="col-md-6">
                                            <div class="form-group input-group-sm">
                                                <label>อาจารย์ผู้สอน</label>
                                                {/* <TextInput value={this.state.email} inputname="email" classes="form-control" placeholder="กรอกอีเมล์" change={this.onChangeHandle} /> */}
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group input-group-sm">
                                                <label>นักศึกษาชั้นปี</label>
                                                {/* <TextInput value={this.state.tel} inputname="tel" classes="form-control" placeholder="กรอกเบอร์โทร" change={this.onChangeHandle} /> */}
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>

                                {/* <รูปทำไง> */}
                            </form>

                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-default pull-left" data-dismiss="modal"> ยกเลิก </button>
                                <button type="button" class="btn btn-primary" onClick={this.savepersonalinformation}> บันทึก </button>
                            </div>
                            </div>
                            {/* <!-- /.modal-content --> */}
                        </div>
                        {/* <!-- /.modal-dialog --> */}
                    </div>
                    {/* <!-- /.modal --> */}
                </div>

                <div>
                    <div class="modal fade" id="modal-default-edit">
                        <div class="modal-dialog">
                            <div class="modal-content">
                            <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span></button>
                                <h4 class="modal-title">แก้ไขข้อมูลนักศึกษา</h4>
                            </div>
                            <div class="modal-body">
                            {/* &hellip; */}

                            <form onSubmit={this.editstudentinformation}>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div class="col-md-6">
                                            <div class="form-group input-group-sm">
                                                <label>รายวิชา</label>
                                                {/* <TextInput value={this.state.firstname} inputname="firstname" classes="form-control" placeholder="กรอกชื่อจริง" change={this.onChangeHandle} /> */}
                                                {/* <input type="text" class="form-control" name="" id="" placeholder="" value=""/> */}
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group input-group-sm">
                                                <label>ห้องเรียน</label>
                                                {/* <TextInput value={this.state.lastname} inputname="lastname" classes="form-control" placeholder="กรอกนามสกุล" change={this.onChangeHandle} /> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div class="col-md-6">
                                            <div class="form-group input-group-sm">
                                                <label>อาจารย์ผู้สอน</label>
                                                {/* <TextInput value={this.state.email} inputname="email" classes="form-control" placeholder="กรอกอีเมล์" change={this.onChangeHandle} /> */}
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group input-group-sm">
                                                <label>นักศึกษาชั้นปี</label>
                                                {/* <TextInput value={this.state.tel} inputname="tel" classes="form-control" placeholder="กรอกเบอร์โทร" change={this.onChangeHandle} /> */}
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>

                                {/* <รูปทำไง> */}
                            </form>

                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-default pull-left" data-dismiss="modal"> ยกเลิก </button>
                                <button type="button" class="btn btn-primary" onClick={this.savepersonalinformation}> บันทึก </button>
                            </div>
                            </div>
                            {/* <!-- /.modal-content --> */}
                        </div>
                        {/* <!-- /.modal-dialog --> */}
                    </div>
                    {/* <!-- /.modal --> */}
                </div>
            </div>
     
        )
    }
}
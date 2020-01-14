import React, { Component } from 'react'
import Breadcrumb from '../../components/Breadcrumb';
import { Link } from "react-router-dom";
import TextInput from '../../components/TextInput';
import axios from 'axios';
import service_uri from '../../components/variable/service_uri';
import baseurl from '../../auth/Baseurl';

export default class ShowAccountTeacher extends Component {

    state = {
        accountusers: [],
    }

    renderdelete(user_id){
        return(
            <button type="button" className="btn btn-danger" onClick={() => this.handleRemove(user_id)}><i class="fa fa-trash" aria-hidden="true"></i> </button>
        )
    }

    handleRemove = (user_id) => {
        const url = service_uri +'admin_showuser/get_delete_lecturerid?user_id='+user_id;
        axios.get(url)
            .then(res => {
                console.log(res);
            })
            alert("ลบสำเร็จ")
            this.RefreshPage();
    } 

    RefreshPage=()=> { 
        window.location.href = 'http://localhost:3000/admin/ShowImportteacher'; 
    }

    renderedit(accountusers){
        let user_id = accountusers.user_id;
        return(
            <Link to={'EditAccountTeacher/'+user_id}>
               &nbsp; <button type="button" className="btn btn-success"> <i class="fa fa-edit" aria-hidden="true"> </i> </button>&nbsp;
            </Link>
        )
    }

    
    onChangeHandle = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({[name]: value});
    } 

    componentDidMount(){
        const script = document.createElement("script");
        script.src = '../js/Showimportteacher/content.js';
        script.async = true;
        document.body.appendChild(script);

        axios.get(baseurl+'api/admin_accountUser/showaccountUser')
        .then(response => {
          this.setState({ accountusers: response.data });
        })
        .catch(error => {
          console.log("====>",error.status);
        });

    };


    render() {
        return (
   
             <div className="content-wrapper">
                <Breadcrumb header="แสดงรายอาจารย์" subheader="" arrow={
                    [
                        {"icon":"", "title":"อาจารย์", "link":"#", "active":"active"}
                    ]
                } />
                <div className="content body">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="box box-primary">
                                <div className="box-body">
                                    <br />
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <table id="example2" className="table table-bordered table-hover dataTable" role="grid" aria-describedby="example2_info">
                                                <thead>
                                                    <tr   >
                                                        <th className="col-sm-1" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending">ลำดับ</th>
                                                        <th className="col-sm-3" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending">ชื่อ-นามสกุล</th>
                                                        <th className="col-sm-3" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending">อีเมล์</th>
                                                        <th className="col-sm-2" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" >การจัดการ</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    { this.state.accountusers.map((accountusers, i) => (
                                                        <tr role="row">
                                                            <td>{i+1}</td>
                                                            <td className="sorting_1"> {accountusers.prefix} {accountusers.firstName} {accountusers.lastName}</td>
                                                            <td>{accountusers.email}</td>
                                                            <td> 
                                                                {this.renderedit(accountusers)}
                                                                {this.renderdelete(accountusers.user_id)}
                                                            </td>
                                                        </tr>
                                                    ))
                                                    }
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
                    <div class="modal fade" id="modal-default">
                        <div class="modal-dialog">
                            <div class="modal-content">
                            <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span></button>
                                <h4 class="modal-title">สร้างข้อมูลอาจารย์</h4>
                            </div>
                            <div class="modal-body">
                            {/* &hellip; */}

                            <form onSubmit={this.createstudentinformation}>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div class="col-md-6">
                                            <div class="form-group input-group-sm">
                                                <label>ชื่อ</label>
                                                <TextInput value={this.state.firstname} inputname="firstname" classes="form-control" placeholder="กรอกชื่อจริง" change={this.onChangeHandle} />
                                                {/* <input type="text" class="form-control" name="" id="" placeholder="" value=""/> */}
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group input-group-sm">
                                                <label>นามสกุล</label>
                                                <TextInput value={this.state.lastname} inputname="lastname" classes="form-control" placeholder="กรอกนามสกุล" change={this.onChangeHandle} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div class="col-md-6">
                                            <div class="form-group input-group-sm">
                                                <label>อิเมล์</label>
                                                <TextInput value={this.state.email} inputname="email" classes="form-control" placeholder="กรอกอีเมล์" change={this.onChangeHandle} />
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group input-group-sm">
                                                <label>เบอร์โทร</label>
                                                <TextInput value={this.state.tel} inputname="tel" classes="form-control" placeholder="กรอกเบอร์โทร" change={this.onChangeHandle} />
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
                                                <label>ชื่อ</label>
                                                <TextInput value={this.state.firstname} inputname="firstname" classes="form-control" placeholder="กรอกชื่อจริง" change={this.onChangeHandle} />
                                                {/* <input type="text" class="form-control" name="" id="" placeholder="" value=""/> */}
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group input-group-sm">
                                                <label>นามสกุล</label>
                                                <TextInput value={this.state.lastname} inputname="lastname" classes="form-control" placeholder="กรอกนามสกุล" change={this.onChangeHandle} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div class="col-md-6">
                                            <div class="form-group input-group-sm">
                                                <label>อิเมล์</label>
                                                <TextInput value={this.state.email} inputname="email" classes="form-control" placeholder="กรอกอีเมล์" change={this.onChangeHandle} />
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group input-group-sm">
                                                <label>เบอร์โทร</label>
                                                <TextInput value={this.state.tel} inputname="tel" classes="form-control" placeholder="กรอกเบอร์โทร" change={this.onChangeHandle} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div class="col-md-6">
                                            <div class="form-group input-group-sm">
                                                <label>ชื่อผู้ใช้งาน</label>
                                                <TextInput value={this.state.username} inputname="username" classes="form-control" placeholder="กรอกชื่อผู้ใช้งาน" change={this.onChangeHandle} />
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group input-group-sm">
                                                <label>รหัสผ่าน</label>
                                                <TextInput value={this.state.password} inputname="password" classes="form-control" placeholder="กรอกรหัสผ่าน" change={this.onChangeHandle} />
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

import React, { Component } from 'react'
import Breadcrumb from '../../../components/Breadcrumb';
import CSVReader from "react-csv-reader";
import axios from 'axios';
import baseurl from '../../../auth/Baseurl';

export default class Createimportstudent extends Component {

    state = {
        data: [],
        file: []
    }

        componentDidMount(){
        const script = document.createElement("script");
        script.src = '../../js/CreateImportteacher/content.js';
        script.async = true;
        document.body.appendChild(script);
    }

    readfileHandle = data => {
        let structure = {
            idstudent: '',
            fname: '',
            lname: '',
            email: '',
            tel: '',
            username: ''
        }
        const file = [];
        data.map((v) => {  //(v,i)
            let temp  = {...structure};
            temp.idstudent = v[0];
            temp.fname = v[1];
            temp.lname = v[2];
            temp.email = v[2];
            temp.tel = v[3];
            temp.username = v[4];
            if (temp.fname){
                file.push(temp);
            }
        });
        this.setState({
            file: file
        });
    }

    showfileImportHandle = () =>{
        const data = [...this.state.file];
        this.setState({
            data: data
        })
    }

    importHandle = () => {
        console.log(this.state.data)
        axios.post(baseurl+'api/students/improt_student',
        {'student': this.state.data})
        .then(response => {
          console.log(response);
            alert("บันทึกสำเร็จ")
            this.RefreshPage();
        })
        .catch(error => {
            alert("ข้อมูลซ้ำ")
          console.log("====>",error);
        });
        console.log(this.state.data)

    }
    RefreshPage=()=> { 
        window.location.href = 'http://localhost:3000/admin/Showimportstudent'; 
    }
    clearShowFileImport = () => {
        const data = [];
        this.setState({data: data});
    }


    render() {
        return (
                <div className="content-wrapper">
                <Breadcrumb header="นำเข้ารายชื่อนักศึกษา" subheader="นักศึกษา" arrow={
                    [
                        {"icon":"fa fa-dashboard", "title":"นำเข้ารายชื่อนักศึกษา", "link":"#"},
                        {"icon":"fa fa-dashboard", "title":"นักศึกษา", "link":"#", "active":"active"}
                    ]
                } />

                <div className="content body">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="box box-primary">
                                <div className="box-header with-border">
                                    <h3 className="box-title">นำเข้ารายชื่อนักศึกษา</h3>
                                </div>
                                <div className="box-body">
                                    <div className="container">
                                        <CSVReader
                                            cssClass="react-csv-input"
                                            label="เลือกไฟล์ .csv ที่มาจากการ นำเข้าข้อมูล เท่านั้น"
                                            onFileLoaded={this.readfileHandle}
                                        />
                                    </div>
                                </div>
                                <div className="box-footer">
                                    <button type="submit" className="btn btn-default" onClick={this.clearShowFileImport}>ล้าง</button>
                                    <button type="submit" className="btn btn-info pull-right" onClick={this.showfileImportHandle}>แสดง</button>
                                </div>
                            </div>
                        </div>
            
                        <div className="col-md-8">
                            <div className="box box-info">
                                <div className="box-header with-border">
                                    <h3 className="box-title">ตารางแสดงผลการนำเข้าข้อมูล</h3>
                                </div>
                                <div className="box-body">
                                    <table id="example2" className="table table-bordered table-hover dataTable" role="grid" aria-describedby="example2_info">
                                        <thead>
                                            <tr role="row">
                                                <th className="col-sm-1" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending">ลำดับ</th>
                                                <th className="col-sm-2" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending">รหัสนักศึกษา</th>
                                                <th className="col-sm-2" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending">ชื่อ</th>
                                                <th className="col-sm-2" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending">นามสกุล</th>
                                                <th className="col-sm-2" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending">เบอร์โทร</th>
                                                <th className="col-sm-2" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending">ชื่อผู้ใช้งาน</th>
                                                {/* <th className="col-sm-2" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending">รหัสผ่าน</th> */}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            { (this.state.data.length > 0)? this.state.data.map((v, i) => (
                                                <tr role="row" className="odd">
                                                    <td className="sorting_1">{i+1}</td>
                                                    <td>{v.idstudent}</td>
                                                    <td>{v.fname}</td>
                                                    <td>{v.lname}</td>
                                                    {/* <td class="hiddent">{v.email}</td> */}
                                                    <td>{v.tel}</td>
                                                    <td>{v.username}</td>
                                                </tr>
                                            )): (
                                                <tr class="odd"><td valign="top" colspan="6" class="dataTables_empty">No data available in table</td></tr>
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                                <div className="box-footer">
                                    <button type="submit" className="btn btn-success pull-right" onClick={this.importHandle}>นำเข้า</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

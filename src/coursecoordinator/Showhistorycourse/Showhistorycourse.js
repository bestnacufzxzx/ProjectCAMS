import React, { Component } from 'react'
import Breadcrumb from '../../components/Breadcrumb';
// import { Link } from "react-router-dom";

export default class Showhistorycourse extends Component {
    componentDidMount(){
        const script = document.createElement("script");
        script.src = '../js/Showimportteacher/content.js';
        script.async = true;
        document.body.appendChild(script);
    }

    render() {
        return (
   
             <div className="content-wrapper">
                <Breadcrumb header="แสดงรายการสร้างลิงก์" subheader="" arrow={
                    [
                        {"icon":"", "title":"สร้างลิงก์", "link":"#", "active":"active"}
                    ]
                } />

                
                <div className="content body">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="box theader-search-sky">
                                <div class="box-header">                   
                                    <div className="row">
                                        <form action="" method="POST" id="">
                                            <div className="col-md-4 form-group"></div> 
                                            <div className="col-md-3 form-group">
                                                <button type="submit" className="btn btn-block btn-info pull-right"><i class="fa fa-file-text" aria-hidden="true"></i> ออกรายงานประวัติการเข้าเรียน</button> 
                                            </div>
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
                                                        <th className="col-sm-2" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending">คาบเรียนครั้งที่</th>
                                                        <th className="col-sm-3" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending">วันที่เข้าเรียน</th>
                                                        <th className="col-sm-3" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending">สถานะเข้าเรียน</th>
                                                        <th className="col-sm-2" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending">เปอร์เซ็นการเข้าเรียน</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr role="row" className="odd">
                                                        <td>1</td>
                                                        <td>1</td>
                                                        <td>15 เมษายน 2562</td>
                                                        <td>เข้าเรียน, เข้าสาย, ขาดเรียน</td>
                                                        <td>100%</td>
                                                        {/* <td>  */}
                                                            {/* <Link to="/admin/Showhistorycourse"> <button type="button" className="btn btn-primary"><i class="fa fa-eye" aria-hidden="true"></i></button> </Link> */}
                                                            {/* <Link to="/admin/EditImportstudent"><button type="button" className="btn btn-warning"><i className="fa fa-edit"></i></button> </Link> */}
                                                            {/* <button type="button" className="btn btn-danger"><i className="fa fa-trash"></i></button> */}
                                                        {/* </td> */}
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
            </div>
     
        )
    }
}
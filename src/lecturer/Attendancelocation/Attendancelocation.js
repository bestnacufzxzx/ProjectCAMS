import React, { Component } from 'react'
import Breadcrumb from '../../components/Breadcrumb';
import { Link } from "react-router-dom";

export default class Attendancelocation extends Component {
    // componentDidMount(){
    //     const script = document.createElement("script");
    //     script.src = '../js/Showimportteacher/content.js';
    //     script.async = true;
    //     document.body.appendChild(script);
    // }

    render() {
        return (
   
             <div className="content-wrapper">
                <Breadcrumb header="จุดลงเวลาเข้าเรียน" subheader="" arrow={
                    [
                        {"icon":"", "title":"กำหนดต่ำแหน่งลงเวลาเข้าเรียน", "link":"#", "active":"active"}
                    ]
                } />
                <div className="content body">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="box theader-search-sky">
                                <div class="box-header">                   
                                    <div className="row">
                                        <form action="" method="POST" id="">
                                            <div className="col-md-2 form-group"></div>
                                            <div className="col-md-3 form-group">
         
                                            </div>
                                            <div className="col-md-3 form-group">
                                                <input type="text" className="form-control" name="searchText" value="" placeholder="ค้นหา"/>
                                            </div>
                                            <div className="col-md-2 form-group">
                                                <button type="submit" className="btn btn-block btn-info pull-right"><i class="fa fa-search" aria-hidden="true"></i> ค้นหา</button> 
                                            </div>
                                        </form>
                                        <div className="col-md-2">
                                            <Link to="/lecturer/CreateAttendencelocation">
                                                <button type="button" className="btn btn-block btn-info pull-right"><i class="fa fa-plus" aria-hidden="true"></i> สร้าง</button>
                                            </Link>
                                         </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div class="row">
                        <div class="col-md-12">
                            <div class="box theader-search-sky">
                                <div class="box-header">                   
                                    <div className="row">
                                        <form action="" method="POST" id="">

                                        </form>
                                        <div className="col-md-2">

                                         </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
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
                                                        <th className="col-sm-4" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending"><center>อาคาร</center></th>
                                                        <th className="col-sm-4" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending"><center>ห้อง</center></th>
                                                        <th className="col-sm-3" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" >การจัดการ</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr role="row" className="odd">
                                                        <td>1</td>
                                                        <td className="sorting_1">อาคารเรียนรวม 5</td>
                                                        <td className="sorting_1">ห้อง 302</td>
                                                        <td> 
                                                            {/* <Link to="/admin/EditAccountStudent"><button type="button" className="btn btn-warning"><i className="fa fa-edit"></i></button> </Link>
                                                            <button type="button" className="btn btn-danger"><i className="fa fa-trash"></i></button> */}
                                                               
                                                                <button  type="button" className="btn btn-primary btn-sm" active> เลือก </button>
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
            </div>
     
        )
    }
}


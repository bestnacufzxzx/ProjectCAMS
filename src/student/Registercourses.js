import React, { Component } from 'react';
import Breadcrumb from '../components/Breadcrumb';
// import axios from 'axios';

 
export default class Registercourses extends Component {
    
    render() {
        return (
   
        <div className="content-wrapper">
            <Breadcrumb header="ยืนยันสถานที่เรียน" subheader="" arrow={
                [
                    {"icon":"", "title":"นักศึกษา", "link":"#", "active":"active"}
                ]
            } />
            
            <div className="content body">
                <div class="row">
                    <div class="col-md-12">
                        <div class="box theader-search-sky">
                            <div class="box-header">                   
                                <div className="row">
                                    <div className="col-md-5 form-group"></div>
                                            <div className="col-md-2 form-group">
                                                {/* <button type="submit" className="btn btn-block btn-info pull-right"><i class="fa fa-file-text"></i> ออกรายงาน</button>  */}
                                            </div>
                                    <form action="" method="POST" id="">
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
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        )
    }
}
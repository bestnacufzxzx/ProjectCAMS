import React, { Component } from 'react'
import Breadcrumb from '../../components/Breadcrumb';
import { Link } from "react-router-dom";
import axios from 'axios';
import service_uri from '../../components/variable/service_uri';
import baseurl from '../../auth/Baseurl';

export default class Showlocation extends Component {

    state = {
        locations : []
    }

    renderdelete(buildingID){
        // console.log(buildingID)
        return(
            <button type="button" className="btn btn-danger" onClick={() => this.handleRemove(buildingID)}><i class="fa fa-trash" aria-hidden="true"></i> </button>
        )
    }

    handleRemove = (buildingID) => {
        const url = service_uri +'location/delete?buildingID='+buildingID;
        axios.get(url)
            .then(res => {
            alert("ลบสำเร็จ")
            this.RefreshPage();
            })
            .catch(res => {
                console.log("====>",res.error);
                alert("ไม่สามารถลบได้เนื่องจากมีการใช้งานตำแหน่งจากอาจารย์หรืออาจารย์ผู้ประสารร้ายวิชา")
            });
    } 

    RefreshPage=()=> { 
        window.location.href = 'http://localhost:3000/admin/Showlocation'; 
    }

    // renderedit(location){
    //     let buildingID = location.buildingID;
    //     return(
    //         <Link to={'Editlocation/'+buildingID}>
    //            &nbsp; <button type="button" className="btn btn-success"> <i class="fa fa-edit" aria-hidden="true"> </i> </button>&nbsp;
    //         </Link>
    //     )
    // }

    componentDidMount(){
        const script = document.createElement("script");
        script.src = '../js/Showlocation/content.js';
        script.async = true;
        document.body.appendChild(script);


        axios.get(baseurl+'api/location/get_all')
        .then(response => {
          this.setState({ locations: response.data });
        })
        .catch(error => {
          console.log("====>",error.status);
        });



    };

    render() {
        return (
   
             <div className="content-wrapper">
                <Breadcrumb header="กำหนดตำแหน่งสถานที่เรียน" subheader="" arrow={
                    [
                        {"icon":"fa fa-map-marker", "title":"แผนที่", "link":"#", "active":"active"}
                    ]
                } />

                
                <div className="content body">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="box theader-search-sky">
                                <div class="box-header">                   
                                    <div className="row">
                                        <div className="col-md-10">
                                        </div>
                                        <div className="col-md-2">
                                            <Link to="/admin/Createlocation">
                                                <button type="button" className="btn btn-block btn-info"><i className="fa fa-plus" aria-hidden="true"></i> สร้างตำแหน่ง</button>
                                            </Link>
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
                                    <br />
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <table id="example2" className="table table-bordered table-hover dataTable" role="grid" aria-describedby="example2_info">
                                                <thead>
                                                    <tr   >
                                                        <th className="col-sm-5" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending">อาคาร</th>
                                                        <th className="col-sm-5" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending">ห้องเรียน</th>
                                                        <th className="col-sm-2" tabIndex="0" aria-controls="example2" rowSpan="1" colSpan="1" aria-label="CSS grade: activate to sort column ascending">การจัดการ</th>
                                                    </tr>
                                                </thead>
                                                <tbody>

                                                { this.state.locations.map((location, i) => (
                                                        <tr role="row">
                                                            <td>{location.buildingName}</td>
                                                            <td>{location.roomname}</td>
                                                            <td> 
                                                                {/* {this.renderedit(location)} */}
                                                                {this.renderdelete(location.buildingID)}
                                                                {/* <button type="button" className="btn btn-warning" data-toggle="modal" data-target="#modal-default"><i className="fa fa-edit"></i></button>
                                                                <button type="button" className="btn btn-danger" ><i className="fa fa-trash"></i></button> */}
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
            </div>
     
        )
    }
}
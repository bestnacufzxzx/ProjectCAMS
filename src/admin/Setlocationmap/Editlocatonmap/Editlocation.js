import React, { Component } from 'react'
import Breadcrumb from '../../../components/Breadcrumb';
import Map from '../Map/Map';
import axios from 'axios';
// import { Link } from "react-router-dom";

export default class Editlocation extends Component {

    state = {
        gps: [],
        // buildingName : '',
        // roomname : '',
    }


    setGps = (arrGps) => {
        this.setState({gps: arrGps});
        let test = '';

        this.state.gps.forEach(loopgpss => {
            loopgpss.forEach(loopgps => {
                test += loopgps[0]+","+loopgps[1]+" "
            });
        });
        this.setState({test});
    }


    handleChange = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
        console.log(this.state)
    }

    componentWillMount () {
        const  buildingID  = this.props.match.params.buildingID;
        console.log(buildingID );
        axios.get('http://localhost/cams_server/api/location/getupdate_location?buildingID='+buildingID)
            .then(response => {
            const result = response.data.response;
            result.forEach(element => {
                if(element.buildingID === buildingID){
                     this.setState({ 
                        buildingID : element.buildingID,
                        roomname : element.roomname,
                        buildingName : element.buildingName,
                        location : element.location,


                    })
                }
            });
    
            })
            .catch(error => {
            });

            
    
    }


    // handleSubmit = (event) => {
    //     event.preventDefault();
    //     axios.post('http://localhost/cams_server/api/location/create/', {
    //         roomname: this.state.roomname,
    //         location : this.state.test,
    //         buildingName: this.state.buildingName
    //     })
    //     .then(res => {
    //     alert("บันทึกสำเร็จ")
    //         this.RefreshPage();
    //     })
    //     .catch(error => {
    //         console.log("====>",error.status);
    //     });
    // }

    
    // RefreshPage = () => { 
    //     window.location.href = 'http://localhost:3000/admin/Showlocation'; 
    // }
    componentDidMount(){
        const script = document.createElement("script");
        script.src = '../js/EditAccountTeacher/content.js';
        script.async = true;
        document.body.appendChild(script);
    }

    render() {
        // console.log(this.state.location) ;
        return (
            <div className="content-wrapper">
                <Breadcrumb header="แก้ไขสถานที่เรียน" subheader="" arrow={
                    [
                        { "icon": "fa fa-map-marker", "title": "แผนที่สถานที่เรียน", "link": "#", "active": "active" }
                    ]
                } />

                <div className="content body">
                    <div className="box theader-search-sky">
                        <div className="box-header">
                        <h4>GPS : {this.state.gps}</h4> 
                            <form onSubmit={this.handleSubmit}>
                                <div className="row">
                                    <div className="col-md-5"></div>
                                        <div className="col-md-2">
                                        </div>
                                    <div className="col-md-12 form-group">
                                        <div className="input-group col-md-4">
                                            <input type="text" class="form-control" name="buildingName" id="buildingName" placeholder='ชื่ออาคาร' value={this.state.buildingName} onChange={this.handleChange}/>
                                            <input type="text" class="form-control" name="roomname" id="roomname" placeholder='ชื่อห้อง' value={this.state.roomname} onChange={this.handleChange}/>
                                        </div>
                                    </div>
                                    <div className="col-md-2 form-group text-center">
                                        <input type="hidden" name="" value=""/>
                                        <button type="submit" className="btn btn-block btn-info" onClick={ this.handleChange }><i className="fa fa-plus" aria-hidden="true"></i> บันทึก </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="box box-primary">
                                <div className="box-body">
                                    <div className="row">
                                        <div className="col-sm-12">
                                        <Map changeGps={this.setGps} />                                                                                                          
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



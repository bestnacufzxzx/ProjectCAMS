import React, { Component } from 'react';
import Breadcrumb from '../components/Breadcrumb';
import Camera, { FACING_MODES } from '../lib';
import axios from 'axios';
import classifyPoint from 'robust-point-in-polygon';
// import { Link } from "react-router-dom";
import baseurl from '../auth/Baseurl';

export default class Cameras extends Component {
    
        state = {
            latitude: '',
            longitude: '',
            classID: null,
            statusgets :[],
            classData: null
        }

        componentWillMount =    () =>{
            this.setState({classID: this.props.match.params.classID})
            this.getClass(this.props.match.params.classID);
        }

        componentDidMount = () => {
            this.getMyLocation();
        }

        getClass = (classID) => {
            axios.get(baseurl+'api/Room/get_class_room?classID='+classID )
            .then(res => {
                this.setState({ classData: res.data.response });
            });
        }
    
        getMyLocation = () => {
            const location = window.navigator && window.navigator.geolocation
            
            if (location) {
                location.getCurrentPosition((position) => {
                this.setState({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                })
                }, (error) => {
                this.setState({ latitude: 'err-latitude', longitude: 'err-longitude' })
                })
            }
        }

        onTakePhoto = picture => {
            const { latitude, longitude } = this.state
            let point = [latitude, longitude];
            let vs = [];
            let res = this.state.classData.location.split(" ");
            res.forEach(e => {
                let temp = e.split(",");
                if(temp[1] && temp[0]){
                    vs.push([temp[1], temp[0]]);
                }
            });
            vs.shift();
            
            let IsInside = classifyPoint(vs, point);
            if(IsInside <= 0){
                let user_ID = localStorage.getItem("username");
                console.log(user_ID);
                axios.post(baseurl+'api/Checknamestudent/postCheckname', { classID: this.state.classID, picture:picture, studentID:user_ID, latitude:latitude, longitude:longitude }  )
                .then(res => {
                    alert("สำเร็จ");
                    this.setState({ statusgets: res.data });
                })
                .catch(error => {
                    console.log("====>",error.status);
                    alert("ไม่สามารถบันทึกซ้ำได้")
                });
            }else{
                alert('ไม่อยู่ในระยะที่กำหนด');
            }
            
        }

    render() {
        // let props = this.props;
        // console.log('22222',this);

        const { latitude, longitude } = this.state
        // const dataUri = this.props.dataUri;
        // const id = this.props.match.params.classID;
        // console.log(id);
        // console.log(latitude);
        // console.log(longitude);

        return (
   
            <div className="content-wrapper">
            <Breadcrumb header="ยืนยันสถานที่เรียน" subheader="" arrow={
                [
                    // {"icon":"", "title":"นักศึกษา", "link":"#", "active":"active"}
                ]
            } />

            
            <div className="content body">
                <div class="row">
                    <div class="col-md-12">
                        <div class="box theader-search-sky">
                            <div class="box-header">                   
                               <h5> ตำแหน่งที่อยู่ </h5>
                               <h5> ละติจูด { latitude}   </h5>
                               <h5> ลองจิจูด { longitude} </h5> 
                                </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="box box-primary">
                            <div className="box-body">
                                <br />
                                <Camera
                                onTakePhoto = { (picture) => { this.onTakePhoto(picture); } }
                                idealFacingMode = {FACING_MODES.ENVIRONMENT}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        )
    }
}
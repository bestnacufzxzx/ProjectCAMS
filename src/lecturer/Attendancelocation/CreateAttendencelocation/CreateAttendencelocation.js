import React, { Component } from 'react'
import Breadcrumb from '../../../components/Breadcrumb';
// import Map from '../../../Map/Map';
// import { Link } from "react-router-dom";

export default class CreateAttendencelocation extends Component {
    componentDidMount(){
        const script = document.createElement("script");
        script.src = '../js/Showimportteacher/content.js';
        script.async = true;
        document.body.appendChild(script);
    }

    render() {
        return (
   
             <div className="content-wrapper">
                <Breadcrumb header="สร้างตำแหน่งลงทะเบียนเรียน MAP" subheader="" arrow={
                    [
                        {"icon":"", "title":"นักศึกษา", "link":"#", "active":"active"}
                    ]
                } />
             
                <div className="content body">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="box box-primary">
                                <div className="box-body">
                                    <br />
                                    <div className="row">                                 
                                        {/* <Map /> */}
                                    </div>
                                </div>
                                <div className="box-body">
                                    <br />
                                    <div className="row">                                 
                                        
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
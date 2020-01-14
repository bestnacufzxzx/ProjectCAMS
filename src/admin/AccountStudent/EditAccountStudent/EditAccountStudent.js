import React, { Component } from 'react'
import Breadcrumb from '../../../components/Breadcrumb';
import { Link } from "react-router-dom";
import axios from 'axios';
import baseurl from '../../../auth/Baseurl';


export default class EditAccountStudent  extends Component {
    state = {
        accountUser:[],
    }

    
    handleChange = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
        console.log(this.state)
    }

    componentWillMount () {
        const  user_id  = this.props.match.params.user_id;
        console.log(user_id );
        axios.get(baseurl+'api/admin_accountUser/getBeforeaccountUser?user_id='+user_id)
            .then(response => {
            const result = response.data.response;
            result.forEach(element => {
                if(element.user_id === user_id){
                     this.setState({ 
                        user_id : element.user_id,
                        username : element.username,
                        password : element.password
                    })
                }
            });
    
            })
            .catch(error => {
            });
    
    }

    handleSubmit = (event) => {
        event.preventDefault();
        axios.post(baseurl+'api/admin_accountUser/post_updateaccountUser/', {
            user_id: this.state.user_id,
            username: this.state.username,
            password: this.state.password,
        })
        .then(res => {
        alert("บันทึกสำเร็จ")
            this.RefreshPage();
        })
        .catch(error => {
            console.log("====>",error.status);
        });
    }

    
    RefreshPage = () => { 
        window.location.href = 'http://localhost:3000/admin/ShowAccountStudent'; 
    }
    componentDidMount(){
        const script = document.createElement("script");
        script.src = '../js/EditAccountTeacher/content.js';
        script.async = true;
        document.body.appendChild(script);
    }

    render() {
        return (
   
             <div className="content-wrapper">
                <Breadcrumb header="แก้ไขรายชื่ออาจารย์" subheader="" arrow={
                    [
                        {"icon":"", "title":"อาจารย์", "link":"#", "active":"active"}
                    ]
                } />

                
                <div className="content body">
                    <div className="row">
                        <div className="col-md-7">
                            <div className="box box-primary">
                                <div className="box-body">
                                    <br />
                                    <form onSubmit={this.handleSubmit}>
                                        <div className="row">
                                            <div className="col-sm-12">
                                                <div class="col-md-6">
                                                    <div className="form-group input-group-sm">
                                                        <label>Username</label>
                                                        <input type="text" class="form-control" name="username" id="username" value={this.state.username} onChange={this.handleChange}/>
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div className="form-group input-group-sm">
                                                        <label>Password</label>
                                                        <input type="text" class="form-control" name="password" id="password"  onChange={this.handleChange}/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="box-footer clearfix">
                                            <input type="hidden" name="" value=""/>
                                            <button type="submit" className="pull-right btn btn-success" onClick={ this.handleChange }>
                                                <i className="fa fa-arrow-circle-right"></i> บันทึก
                                            </button>
                                            <Link to="/admin/Showimportstudent"><button type="button" className="pull-right btn btn-danger"><i className="fa fa-arrow-circle-left"></i>  กลับ </button> </Link>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
     
        )
    }
}
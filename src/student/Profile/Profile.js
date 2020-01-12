import React, { Component } from 'react'
import TextInput from '../../components/TextInput';


export default class Profile extends Component {
    state = {
        data: [],
        firstname: '',
        lastname: '',
        email: '',
        tel: '',
        username: '',
        password: ''
    }
    componentDidMount(){
        const script = document.createElement("script");
        script.src = '../js/Showimportteacher/content.js';
        script.async = true;
        document.body.appendChild(script);
    }

    onChangeHandle = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({[name]: value});
    } 

    profileteacher = () => {

        let structure = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            email: this.state.email,
            tel: this.state.tel,
            username: this.state.username,
            password: this.state.password
        }

        console.log(structure);

    }


    render() {
        return (
            <div className="content-wrapper">
                <div className="content body">
                    <div className="row">
                        <div className="col-md-8">
    x                        <div className="box box-primary">
                                <div className="box-body">
                                    <form onSubmit={this.profileteacher}>
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
                                                        <TextInput value={this.state.username} inputname="username" classes="form-control" placeholder="ชื่อผู้ใช้งาน" change={this.onChangeHandle} />
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="form-group input-group-sm">
                                                        <label>รหัสผ่าน</label>
                                                        <TextInput value={this.state.password} inputname="password" classes="form-control" placeholder="รหัสผ่าน" change={this.onChangeHandle} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <รูปทำไง> */}
                                    </form>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-default pull-left" data-dismiss="modal"> ยกเลิก </button>
                                        <button type="button" class="btn btn-primary" onClick={this.savepersonalinformation}> บันทึก </button>
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


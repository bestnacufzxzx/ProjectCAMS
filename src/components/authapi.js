import React, { Component } from 'react';
import axios from 'axios';

export default class Authapi extends Component {

    ChacklecturerID = () => {
        axios.get(baseurl+'api/loginusername/get_username_student_login?user_id='+user_id)
        .then(response => {
        const result = response.data.response;
        result.forEach(element => {
            if(element.user_id === user_id){
                this.setState({ 
                    user_id : element.user_id,
                    lecturerID : element.lecturerID,
                  
                })
                console.log(this.lecturerID )
                localStorage.setItem('lecturerID', this.state.lecturerID);
            }
        });
    
        })
        .catch(error => {
        });
    }
}
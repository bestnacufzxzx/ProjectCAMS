import React, { Component } from 'react';
import Camera, { FACING_MODES } from '../lib';
import './reset.css';
import axios from 'axios';
// import TextInput from '../components/TextInput';
import baseurl from '../../auth/Baseurl';


export default class AppMinimumUsage extends Component {

  // onTakePhoto (dataUri) {
  //   // Do stuff with the photo...
  //   console.log(dataUri);
  // }
    state = {
      picture : "",
  }

    onTakePhoto = dataUri => {
        let courseID = localStorage.getItem("courseID");
        axios.post(baseurl+'api/checknamex/getCheckname?courseID', { courseID })
        .then(res => {
          this.setState({ picture: res.data });
        })
        .catch(error => {
          console.log(dataUri);
        });
      }

  render () {
    return (
      <div className="App">
        <Camera
          onTakePhoto = { (dataUri) => { this.onTakePhoto(dataUri); } }
          idealFacingMode = {FACING_MODES.ENVIRONMENT}
        />

      </div>
    );
  }
}


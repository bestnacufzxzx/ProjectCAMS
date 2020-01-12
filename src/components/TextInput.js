import React, { Component } from 'react';

export default class TextInput extends Component {
    render(){
        let props = this.props;
        return(
            <input type={props.type} className={props.classes} placeholder={props.placeholder} name={props.inputname}  value={props.value} onChange={props.change} />
        )
    }
} 
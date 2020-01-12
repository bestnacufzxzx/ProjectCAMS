import React, { Component } from 'react';

export default class Button extends Component {
    render(){
        return(
                <button className={this.props.classes} onClick={this.props.click} > {this.props.children}</button> // ฟังชันถ้าไม่เรียกไม่ทำงาน ยกเว้น เวนเดอร์
        )
    }
}
import React, { Component } from 'react';
 
export default class Modal extends Component {

    state = {
        min : '',
        // show: false

    }

    test = () =>{
        return(
            <button type="button" class="btn btn-primary btn-lg" data-target="#win" data-toggle="modal" ></button>
        );
    }

    render() {
        return (
        <div>
            
            {this.test()}
    
            <div class="modal fade" id="win" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
            {/* <div class="modal fade" show={this.state.show} onHide={this.handleClose} tabindex="-1" role="dialog" aria-labelledby="myModalLabel"> */}
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                            <h4 class="modal-title" id="myModalLabel">Modal title</h4>
                        </div>
                        <div class="modal-body">
                            ...
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        )
    }
}
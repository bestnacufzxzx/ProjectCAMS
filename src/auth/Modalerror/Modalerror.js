import React, { Component } from 'react';

export default class Modalerror extends Component {
    // state = {
    //     Merror: ''
    // }
  
    render(){
        return(
            
           <Modalerror>
            <button type="button" className="btn btn-block btn-info pull-right" data-toggle="modal" data-target="#modal-default"><i class="fa fa-plus" aria-hidden="true"></i> สร้าง</button>
               <div class="modal fade" id="modal-default">
                    <div class="modal-dialog">
                        <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span></button>
                            <h4 class="modal-title">สร้างข้อมูลอาจารย์</h4>
                        </div>
                        <div class="modal-body">

                        <h4 class="modal-title">ชื่อผู้ใช้งานหรือรหัสผ่านไม่ถูกต้อง</h4>
                        

                        </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-default pull-left" data-dismiss="modal"> ยกเลิก </button>
                            </div>
                        </div>
                        {/* <!-- /.modal-content --> */}
                    </div>
                    {/* <!-- /.modal-dialog --> */}
                </div>
           </Modalerror>
            )
    }
}
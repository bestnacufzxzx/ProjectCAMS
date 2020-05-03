import React, {Component} from 'react';
import { Link } from "react-router-dom";

export default class MenuBar extends Component {

    render(){
        return(
        <div>
          <aside className="main-sidebar">
            <section className="sidebar" >
                 <ul className="sidebar-menu" data-widget="tree">
                      <li className="header">เมนู</li>
                      <li className="treeview">
                        <Link>
                          <i className="fa fa-tasks"></i> <span>จัดการรายวิชาและตำแหน่ง</span>
                          <span className="pull-right-container">
                            <i className="fa fa-angle-left pull-right"></i>
                          </span>
                        </Link>
                        <ul className="treeview-menu">
                          <li><Link to="/admin/ShowCourse" ><i class="fa fa-circle-o"></i>จัดการรายวิชา</Link></li>
                          <li><Link to="/admin/Showlocation"><i class="fa fa-circle-o"></i>จัดการตำแหน่งลงทะเบียนเรียน</Link></li>
                          <li><Link to="/admin/Manageteachersincourses"><i class="fa fa-circle-o"></i>จัดการอาจารย์ผู้สอนในรายวิชา</Link></li>

                        </ul>
                      </li>  

                      <li className="treeview">
                        <Link>
                          <i className="fa fa-tasks"></i> <span>จัดการข้อมูลผู้ใช้งาน</span>
                          <span className="pull-right-container">
                            <i className="fa fa-angle-left pull-right"></i>
                          </span>
                        </Link>
                        <ul className="treeview-menu">
                          <li><Link to="/admin/ShowImportteacher" ><i class="fa fa-circle-o"></i>จัดการข้อมูลอาจารย์</Link></li>
                          <li><Link to="/admin/Showimportstudent"><i class="fa fa-circle-o"></i>จัดการข้อมูลนักศึกษา</Link></li>
                        </ul>
                      </li>       


                      <li className="treeview">
                        <Link>
                          <i className="fa fa-tasks"></i> <span>จัดการบัญชีผู้ใช้งาน</span>
                          <span className="pull-right-container">
                            <i className="fa fa-angle-left pull-right"></i>
                          </span>
                        </Link>
                        <ul className="treeview-menu">
                          <li><Link to="/admin/ShowAccountTeacher" ><i class="fa fa-circle-o"></i>จัดการบัญชีอาจารย์</Link></li>
                          <li><Link to="/admin/ShowAccountStudent"><i class="fa fa-circle-o"></i>จัดการบัญชีนักศึกษา</Link></li>
                        </ul> 
                      </li>
                </ul>
            </section>
          </aside>
        </div>
        )
      }
}

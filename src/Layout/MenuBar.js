import React, {Component} from 'react';
import { Link } from "react-router-dom";



export default class MenuBar extends Component {

    render(){
        return(
        <div>
          <aside className="main-sidebar">
            {/* <!-- sidebar: style can be found in sidebar.less --> */}
            <section className="sidebar" >
              {/* Sidebar user panel */}
                <div className="user-panel">
                  <div className="pull-left image">
                    <img src="dist/img/user2-160x160.jpg" className="img-circle" alt="User" />
                  </div>
                  <div className="pull-left info">
                    <p>วิชัย นำชัย</p>
                    <a href="fake_url"><i className="fa fa-circle text-success" /> Online</a>
                  </div>
                </div>
                {/* search form */}
                <form action="#" method="get" className="sidebar-form">
                  <div className="input-group">
                    <input type="text" name="q" className="form-control" placeholder="Search..." />
                    <span className="input-group-btn">
                      <button type="submit" name="search" id="search-btn" className="btn btn-flat">
                        <i className="fa fa-search" />
                      </button>
                    </span>
                  </div>
                </form>
                {/* /.search form */}
                {/* sidebar menu: : style can be found in sidebar.less */}
                 <ul className="sidebar-menu" data-widget="tree">
                      <li className="header">เมนู</li>
                      {/* <li className="treeview">
                        <Link>
                          <i className="fa fa-tasks"></i> <span>จัดการรายวิชาและตำแหน่ง</span>
                          <span className="pull-right-container">
                            <i className="fa fa-angle-left pull-right"></i>
                          </span>
                        </Link>
                        <ul className="treeview-menu">
                          <li><Link to="/admin/ShowCourse" ><i class="fa fa-circle-o"></i>จัดการรายวิชา</Link></li>
                          <li><Link to="/admin/Showlocation"><i class="fa fa-circle-o"></i>จัดการตำแหน่งลงทะเบียนเรียน</Link></li>
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
                          <i className="fa fa-tasks"></i> <span>จัดการบันชีผู้ใช้งาน</span>
                          <span className="pull-right-container">
                            <i className="fa fa-angle-left pull-right"></i>
                          </span>
                        </Link>
                        <ul className="treeview-menu">
                          <li><Link to="/admin/ShowAccountTeacher" ><i class="fa fa-circle-o"></i>จัดการบันชีอาจารย์</Link></li>
                          <li><Link to="/admin/ShowAccountStudent"><i class="fa fa-circle-o"></i>จัดการบันชีนักศึกษา</Link></li>
                        </ul>
                      </li> */}

                      <li className="treeview" active>
                        <Link>
                          <i className="fa fa-tasks"></i> <span>จุดลงเวลาเข้าเรียน</span>
                          <span className="pull-right-container">
                            <i className="fa fa-angle-left pull-right"></i>
                          </span>
                        </Link>
                        <ul className="treeview-menu">
                          {/* <li><Link to="/admin/Attendancelocation" ><i class="fa fa-circle-o"></i>จุดลงเวลาเข้าเรียน</Link></li> */}
                          {/* <li><Link to="/admin/ShowAccountStudent"><i class="fa fa-circle-o"></i>จัดการบันชีนักศึกษา</Link></li> */}
                        </ul>
                      </li>                  
                </ul>
                
                
            </section>
            {/* <!-- /.sidebar --> */}
          </aside>
        </div>
        )
      }
}

// function MLink ({ label, to, activeOnlyWhenExact, icon }) {
    
//   return (
//     <Route
//       path={to}
//       exact={activeOnlyWhenExact}
//       children={({ match }) => (
//           <li className={match ? "active" : ""}><Link to={to}><i className={ icon } /> { label }</Link></li>
//           // <li><a href={match ? "active" : ""}> <Link to={to}><i className={ icon } /> { label } <span>Information</span></Link></a></li>
//       )}
//     />
    
//   );
// }

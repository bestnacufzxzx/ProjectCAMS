import React, {Component} from 'react';
import { Link } from "react-router-dom";



export default class MenuBar extends Component {
  state = {
    role: localStorage.getItem('role'),
  };

    render(){
      let role = this.state.role;
      console.log(role);
      if(role == 4 || role == 5 || role == 6 ){
        return(
        <div>
          <aside className="main-sidebar">
            <section className="sidebar" >
                 <ul className="sidebar-menu" data-widget="tree">
                      <li className="header">เมนู</li>
                      <li className="treeview" active>
                        <ul className="treeview-menu">
                        </ul>
                      </li>  
                          {/* <li><Link to="/lecturer/Attendancelocation"><i class="fa fa-circle-o"></i>จุดลงเวลาเข้าเรียน</Link></li> */}
                          <li><Link to="/lecturer/Course"><i class="fa fa-circle-o"></i><span>กำหนดการเรียนการสอน</span></Link></li>
                          <li><Link to="/lecturer/Showstudentincourse" ><i class="fa fa-circle-o"></i> <span>กำหนดนักศึกษาในรายวิชา</span></Link></li>
                          <li><Link to="/lecturer/Timetreatment" ><i class="fa fa-circle-o"></i> <span>ประวัติเข้าเรียนของนักศึกษา</span></Link></li>
                          {/* <li><Link to="/lecturer/Timetreatment" ><i class="fa fa-circle-o"></i> <span>ปรับสถานะการเข้าเรียน</span></Link></li> */}
                          {/* <li><Link to="/admin/Course"><i class="fa fa-circle-o"></i>กำหนดการเรียนการสอน</Link></li> */}
                </ul>
            </section>
          </aside>
        </div>
        )
      }else if(role == 3){
        return(
          <div>
            <aside className="main-sidebar">
              <section className="sidebar" >
                  <div className="user-panel">
                  </div>
                   <ul className="sidebar-menu" data-widget="tree">
                        <li className="header">เมนู</li>
                        <li className="treeview" active>
                          <ul className="treeview-menu">
                          </ul>
                        </li>  
                            {/* <li><Link to="/lecturer/Attendancelocation"><i class="fa fa-circle-o"></i>จุดลงเวลาเข้าเรียน</Link></li> */}
                            {/* <li><Link to="/lecturer/Showstudentincourse" ><i class="fa fa-circle-o"></i> <span>กำหนดนักศึกษาในรายวิชา</span></Link></li> */}
                            <li><Link to="/lecturer/Course"><i class="fa fa-circle-o"></i><span>กำหนดการเรียนการสอน</span></Link></li>
                            <li><Link to="/lecturer/Timetreatment" ><i class="fa fa-circle-o"></i> <span>ประวัติเข้าเรียนของนักศึกษา</span></Link></li>
                            {/* <li><Link to="/lecturer/Timetreatment" ><i class="fa fa-circle-o"></i> <span>ปรับสถานะการเข้าเรียน</span></Link></li> */}
                            {/* <li><Link to="/admin/Course"><i class="fa fa-circle-o"></i>กำหนดการเรียนการสอน</Link></li> */}
                  </ul>
              </section>
              {/* <!-- /.sidebar --> */}
            </aside>
          </div>
          )
      }
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

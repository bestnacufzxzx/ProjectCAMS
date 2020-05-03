import React ,{ Component } from 'react';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route} from "react-router-dom";



// import Containers from './Containers/containers';
// import MenuBar from './Layout/MenuBar';
// import Header from './Layout/Header';
// import Footer from './Layout/Footer';
// import Content from './Layout/Content';

// pade auth
// import MenuBar from './auth/Layout/MenuBar';
// import Header from './auth/Layout/Header';
// import Footer from './auth/Layout/Footer';
// import Content from './auth/Layout/Content';


// page admin
import AdminMenuBar from './admin/Layout/MenuBar';
import AdminHeader from './admin/Layout/Header';
import AdminFooter from './admin/Layout/Footer';
// import AdminContent from './admin/Layout/Content';

// import AuthMenuBar from './auth/Layout/MenuBar';
// import AuthHeader from './auth/Layout/Header';
// import AuthFooter from './auth/Layout/Footer';
import Auth from './auth/auth';



// page lecturer
import LecturerMenuBar from './lecturer/Layout/MenuBar';
import LecturerHeader from './lecturer/Layout/Header';
import LecturerFooter from './lecturer/Layout/Footer';
// import LecturerContent from './lecturer/Layout/Content';

// page coursecoordinator
// import MenuBar from './coursecoordinator/Layout/MenuBar';
// import Header from './coursecoordinator/Layout/Header';
// import Footer from './coursecoordinator/Layout/Footer';
// import Content from './coursecoordinator/Layout/Content';

//page student
import StudentMenuBar from './student/Layout/MenuBar';
import StudentHeader from './student/Layout/Header';
import StudentFooter from './student/Layout/Footer';
// import StudentContent from './student/Layout/Content';

//page parent
// import MenuBar from './parent/Layout/MenuBar';
// import Header from './parent/Layout/Header';
// import Footer from './parent/Layout/Footer';
// import Content from './parent/Layout/Content';





// page admin
import ShowCourse from './admin/course/ShowCourse';
import Updatacourse from './admin/course/Updatacourse';
import ImportCourse from './admin/course/ImportCourse';
import Showlocation from './admin/Setlocationmap/Showlocation';
import Editlocation from './admin/Setlocationmap/Editlocatonmap/Editlocation';
import Createlocation from './admin/Setlocationmap/Createlocation/Createlocation';
import Showimportteacher from './admin/Importteacher/Showimportteacher';
import Createimportteacher from './admin/Importteacher/importteacher/Createimportteacher';
import Showimportstudent from './admin/Importstudent/Showimportstudent';
import Createimportstudent from './admin/Importstudent/Importstudents/Createimportstudent';
import EditImportteacher from './admin/Importteacher/EditImportteacher/EditImportteacher';
import EditImportstudent from './admin/Importstudent/EditImportstudent/EditImportstudent';
import ShowAccountStudent from './admin/AccountStudent/ShowAccountStudent';
import CreateAccountStudent from './admin/AccountStudent/CreateAccountStudent/CreateAccountStudent';
import ShowAccountTeacher from './admin/AccountTeacher/ShowAccountTeacher';
import CreateAccountTeacher from './admin/AccountTeacher/CreateAccountTeacher/CreateAccountTeacher';
import EditAccountTeacher from './admin/AccountTeacher/EditAccountTeacher/EditAccountTeacher';
import EditAccountStudent from './admin/AccountStudent/EditAccountStudent/EditAccountStudent';
import Showteaching from './admin/course/Showteaching';
import Createteaching from './admin/course/Createteaching';
import Manageteachersincourses from './admin/Manageteachersincourses/Manageteachersincourses';

// page lecturer
import Attendancelocation from './lecturer/Attendancelocation/Attendancelocation';
import Course from './lecturer/Course/Course';
import CreateAttendencelocation from './lecturer/Attendancelocation/CreateAttendencelocation/CreateAttendencelocation';
import EditCourse from './lecturer/Course/EditCourse/EditCourse';
import CreateCourse from './lecturer/Course/CreateCourse/CreateCourse';
import LecturerTimetreatment from './lecturer/Timetreatment/Timetreatments';
import Profilelecturer from './lecturer/Profile/Profile';
// import LecturerShowhistorycourse from './lecturer/Showhistorycourse/Showhistorycourse';
import Teachs from './lecturer/Teachs/Teachs';
import Historysbystudent from './lecturer/Historysbystudent/Historysbystudent';
import EditTeachCourse from './lecturer/Teachs/EditTeachCourse/EditTeachCourse';
import CreateTeachCourse from './lecturer/Teachs/CreateTeachCourse/CreateTeachCourse';
import Showstudentincourse from './lecturer/Studentincourse/Showstudentincourse';
import Createstudentincourse from './lecturer/Studentincourse/Createstudentincourse';
import Createstudent from './lecturer/Studentincourse/Createstudent';
import Viewhistorystudent from './lecturer/Historysbystudent/Viewhistorystudent';
import LecturerProfile from './lecturer/Profile/Profile';

// page coursecoordinator
// import CreateRegistrationlink from './coursecoordinator/CreateRegistrationlink/CreateRegistrationlink';
// import Showhistorycourse from './coursecoordinator/Showhistorycourse/Showhistorycourse';
// import Timetreatment from './coursecoordinator/Timetreatment/Timetreatment';
// import ShowRegistrationlink from './coursecoordinator/ShowRegistrationlink/ShowRegistrationlink';

// page student
import Listcourse from './student/Listcourse';
import StudentProfile from './student/Profile/Profile';
import Camera from './student/Cameras';
import Showhistorycourse from './student/Showhistorycourse';
import Timetreatment from './student/Timetreatment';
import Cameras from './student/Cameras';
import Registercourses from './student/Registercourses';
import Checkname from './student/Checkname';
// import Test from './student/Test/Test';

// page parent
// import ShowStudenthistory from './parent/ShowStudenthistory';
// import Studyhistory from './parent/Studyhistory';


// const store = configStore();

export default class App extends Component{

  state = {
    role: localStorage.getItem('role'),
  };

  render(){
      let role = this.state.role;
      console.log(role);
      
      if(role == 1){
        return (
          <body class="hold-transition skin-blue sidebar-mini" >
            <BrowserRouter >
              <AdminHeader></AdminHeader>
              <AdminMenuBar></AdminMenuBar>
              <Route exact path="/" component={ShowCourse} />
              <Route exact path="/admin/ShowCourse" component={ShowCourse} />
              <Route exact path="/admin/course/ImportCourse" component={ImportCourse} />
              <Route exact path="/admin/course/Updatacourse" component={Updatacourse} />
              <Route exact path="/admin/Showlocation" component={Showlocation} />
              <Route exact path="/admin/Editlocation/:buildingID" component={Editlocation} />
              <Route exact path="/admin/Createlocation" component={Createlocation} />
              <Route exact path="/admin/Showimportteacher" component={Showimportteacher} />
              <Route exact path="/admin/Createimportteacher" component={Createimportteacher} />
              <Route exact path="/admin/Showimportstudent" component={Showimportstudent} />
              <Route exact path="/admin/Createimportstudent" component={Createimportstudent} />
              <Route exact path="/admin/EditImportteacher/:lecturerID" component={EditImportteacher} />
              <Route exact path="/admin/EditImportstudent/:studentID" component={EditImportstudent} />
              <Route exact path="/admin/ShowAccountStudent" component={ShowAccountStudent} />
              <Route exact path="/admin/CreateAccountStudent" component={CreateAccountStudent} />
              <Route exact path="/admin/ShowAccountTeacher" component={ShowAccountTeacher} />
              <Route exact path="/admin/CreateAccountTeacher" component={CreateAccountTeacher} />
              <Route exact path="/admin/EditAccountTeacher/:user_id" component={EditAccountTeacher} />
              <Route exact path="/admin/EditAccountStudent/:user_id" component={EditAccountStudent} />
              <Route exact path="/admin/Showteaching/:courseID" component={Showteaching} />
              <Route exact path="/admin/Createteaching/:courseID/" component={Createteaching} /> 
              <Route exact path="/admin/Manageteachersincourses" component={Manageteachersincourses} /> 

              <AdminFooter></AdminFooter>
            </BrowserRouter>
          </body>
        );
      }else if(role == 3 || role == 4 || role == 5 || role == 6){
        return (
          <body class="hold-transition skin-blue sidebar-mini" >
          <BrowserRouter>
            <LecturerHeader></LecturerHeader>
            <LecturerMenuBar></LecturerMenuBar>
            <Route exact path="/" component={Attendancelocation} />
            <Route exact path="/lecturer/Attendancelocation" component={Attendancelocation} />
            <Route exact path="/lecturer/Course" component={Course} />
            <Route exact path="/lecturer/CreateAttendencelocation" component={CreateAttendencelocation} />
            <Route exact path="/lecturer/EditCourse/:teachingID" component={EditCourse} />
            <Route exact path="/lecturer/CreateCourse" component={CreateCourse} />
            <Route exact path="/lecturer/Timetreatment" component={LecturerTimetreatment} />
            <Route exact path="/lecturer/Profilelecturer" component={Profilelecturer} /> 
            <Route exact path="/lecturer/Showhistorycourse" component={Showhistorycourse} /> 
            <Route exact path="/lecturer/Teachs/:courseID/:namecourse" component={Teachs} /> 
            <Route exact path="/lecturer/Historysbystudent/:HistorysbystudentcourseID/:courseCode/:courseName" component={Historysbystudent} /> 
            <Route exact path="/lecturer/EditTeachCourse/:classID" component={EditTeachCourse} /> 
            <Route exact path="/lecturer/CreateTeachCourse/:courseID/:namecourse" component={CreateTeachCourse} /> 
            <Route exact path="/lecturer/Showstudentincourse" component={Showstudentincourse} /> 
            <Route exact path="/lecturer/Createstudentincourse/:courseID/:namecourse" component={Createstudentincourse} /> 
            <Route exact path="/lecturer/Createstudent/:courseID/:namecourse" component={Createstudent} /> 
            <Route exact path="/lecturer/Viewhistorystudent/:studentID/:courseID" component={Viewhistorystudent} /> 
            <Route exact path="/lecturer/Profile" component={LecturerProfile} /> 
            <LecturerFooter></LecturerFooter>
          </BrowserRouter>
          </body>
        );
      }else if(role == 7){
        return (
          <body class="hold-transition skin-blue sidebar-mini" >
          <BrowserRouter>
            <StudentHeader></StudentHeader>
            <StudentMenuBar></StudentMenuBar>
            <Route exact path="/" component={Registercourses} />
            <Route exact path="/student" component={Registercourses} />
            <Route exact path="/student/Listcourse" component={Listcourse} /> 
            <Route exact path="/student/Profile" component={StudentProfile} /> 
            <Route exact path="/student/Camera" component={Camera} /> 
            <Route exact path="/student/Showhistorycourse/:historycourseID/:historyuser_ID" component={Showhistorycourse} /> 
            <Route exact path="/student/Timetreatment" component={Timetreatment} /> 
            <Route exact path="/student/Cameras/:classID" component={Cameras} /> 
            <Route exact path="/student/Checkname/:courseID" component={Checkname} /> 
            <StudentFooter></StudentFooter>
          </BrowserRouter>
          </body>
        );
      }else{
        return (
          // <body class="content hold-transition login-page">
                <BrowserRouter>
                    {/* <AuthMenuBar></AuthMenuBar>
                    <AuthMenuBar></AuthMenuBar> */}
                    <Route exact path="/" component={Auth} />
                    {/* <AuthFooter></AuthFooter> */}
                </BrowserRouter>
          // </body>
         
        );
      }
  // return (
  //   <BrowserRouter>
      {/* <Header></Header>
      <MenuBar></MenuBar>
        <Route exact path="/" component={Content}/>

          <Route exact path="/" component={Auth} /> */}


         

                                    {/* page admin*/}
          {/* <Route exact path="/admin/ShowCourse" component={ShowCourse} />
          <Route exact path="/admin/course/ImportCourse" component={ImportCourse} />
          <Route exact path="/admin/course/Updatacourse" component={Updatacourse} />
          <Route exact path="/admin/Showlocation" component={Showlocation} />
          <Route exact path="/admin/Editlocation/:buildingID" component={Editlocation} />
          <Route exact path="/admin/Createlocation" component={Createlocation} />
          <Route exact path="/admin/Showimportteacher" component={Showimportteacher} />
          <Route exact path="/admin/Createimportteacher" component={Createimportteacher} />
          <Route exact path="/admin/Showimportstudent" component={Showimportstudent} />
          <Route exact path="/admin/Createimportstudent" component={Createimportstudent} />
          <Route exact path="/admin/EditImportteacher/:lecturerID" component={EditImportteacher} />
          <Route exact path="/admin/EditImportstudent/:studentID" component={EditImportstudent} />
          <Route exact path="/admin/ShowAccountStudent" component={ShowAccountStudent} />
          <Route exact path="/admin/CreateAccountStudent" component={CreateAccountStudent} />
          <Route exact path="/admin/ShowAccountTeacher" component={ShowAccountTeacher} />
          <Route exact path="/admin/CreateAccountTeacher" component={CreateAccountTeacher} />
          <Route exact path="/admin/EditAccountTeacher/:user_id" component={EditAccountTeacher} />
          <Route exact path="/admin/EditAccountStudent/:user_id" component={EditAccountStudent} />
          <Route exact path="/admin/Showteaching/:courseID" component={Showteaching} />
          <Route exact path="/admin/Createteaching/:courseID/" component={Createteaching} /> */}





                                    {/* page lecturer*/}
          {/* <Route exact path="/lecturer/Attendancelocation" component={Attendancelocation} />
          <Route exact path="/lecturer/Course" component={Course} />
          <Route exact path="/lecturer/CreateAttendencelocation" component={CreateAttendencelocation} />
          <Route exact path="/lecturer/EditCourse/:teachingID" component={EditCourse} />
          <Route exact path="/lecturer/CreateCourse" component={CreateCourse} />
          <Route exact path="/lecturer/Timetreatment" component={Timetreatment} />
          <Route exact path="/lecturer/Profilelecturer" component={Profilelecturer} /> 
          <Route exact path="/lecturer/Showhistorycourse" component={Showhistorycourse} /> 
          <Route exact path="/lecturer/Teachs/:courseID" component={Teachs} /> 
          <Route exact path="/lecturer/Historysbystudent/:HistorysbystudentcourseID" component={Historysbystudent} /> 
          <Route exact path="/lecturer/EditTeachCourse/:classID" component={EditTeachCourse} /> 
          <Route exact path="/lecturer/CreateTeachCourse/:courseID" component={CreateTeachCourse} /> 
          <Route exact path="/lecturer/Showstudentincourse" component={Showstudentincourse} /> 
          <Route exact path="/lecturer/Createstudentincourse/:courseID" component={Createstudentincourse} /> 
          <Route exact path="/lecturer/Createstudent/:courseID" component={Createstudent} /> 
          <Route exact path="/lecturer/Viewhistorystudent/:studentID/:courseID" component={Viewhistorystudent} /> 
          <Route exact path="/lecturer/Profile" component={Profile} />  */}


          


                                {/* page coursecoordinator*/}
          {/* <Route exact path="/coursecoordinator/CreateRegistrationlink" component={CreateRegistrationlink} /> 
          <Route exact path="/coursecoordinator/Showhistorycourse" component={Showhistorycourse} /> 
          <Route exact path="/coursecoordinator/Timetreatment" component={Timetreatment} /> 
          <Route exact path="/coursecoordinator/ShowRegistrationlink" component={ShowRegistrationlink} />   */}

           

                                    {/* page student */}
                                  
          {/* <Route exact path="/student" component={Registercourses} /> 
          <Route exact path="/student/Listcourse" component={Listcourse} /> 
          <Route exact path="/student/Profile" component={Profile} /> 
          <Route exact path="/student/Camera" component={Camera} /> 
          <Route exact path="/student/Showhistorycourse/:historyclassID/:historyuser_ID" component={Showhistorycourse} /> 
          <Route exact path="/student/Timetreatment" component={Timetreatment} /> 
          <Route exact path="/student/Cameras/:classID" component={Cameras} /> 
          <Route exact path="/student/Checkname/:courseID" component={Checkname} /> 
          <Route exact path="/student/Test" component={Test} />  */}



                                    {/* page parent*/}
          {/* <Route exact path="/parent/ShowStudenthistory" component={ShowStudenthistory} /> 
          <Route exact path="/parent/Studyhistory" component={Studyhistory} />  */}


 {/*    <Containers>

        </Containers> */}
      {/* <Footer></Footer> */}
  //   </BrowserRouter>
  // );
  }
}


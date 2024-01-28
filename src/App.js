import './App.css';
import React, {useState} from 'react'
import {
  BrowserRouter, Routes,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import Login from './component/Login';
import Signup from './component/Signup'
import Navbar from './component/Navbar';
import Blogs from './component/Blogs';
import Alert from './component/Alert'
import User from './component/User';
import Home from './component/Home'
import NoteState from './Context/NoteState';
import Fullarticle from './component/Fullarticle';
import Allblogs from './component/Allblogs';
import Emaillogin from './component/Emaillogin';



function App() {
  const [alert, setalert] = useState(null)
  const [progress, setprogress] = useState(0)
  const showalert=(massage,type)=>{
    setalert(
      {
        msg:massage,
        typ:type
      }
    )
    setTimeout(() => {
      setalert(null)
    }, 3000);
  }
  return (
    <>
      <NoteState setprogress={setprogress} >
        <BrowserRouter>
        <Navbar />
        <LoadingBar height={3} color='#f11946' progress={progress}/>
        <Alert alert={alert}/> 
        <Routes>
              
              <Route exact path="/" element={<Home setprogress={setprogress} showalert={showalert} /> }/>
              <Route exact path="/full-article" element={<Fullarticle setprogress={setprogress} showalert={showalert} /> }/>
              <Route exact path="/home" element={<Blogs setprogress={setprogress} showalert={showalert} /> }/>
              <Route exact path="/login" element={<Login setprogress={setprogress} showalert={showalert} /> }/>
              <Route exact path="/signup" element={<Signup setprogress={setprogress} showalert={showalert} /> }/>
              <Route exact path="/user" element={<User  setprogress={setprogress} />  }/>
              <Route exact path="/Emaillogin" element={<Emaillogin  setprogress={setprogress} showalert={showalert} />  }/>
              <Route exact path="/Allblogs" element={<Allblogs  />  }/>
              
        </Routes>
        
        </BrowserRouter>
      </NoteState>
    </>
  );
}

export default App;
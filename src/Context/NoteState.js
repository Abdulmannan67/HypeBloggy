import NoteContext from "./noteContext";
import { useState } from 'react';
import axios from "axios";


const NoteState = (props) => {



 
  const host = "http://localhost:8000";

  // const host = "https://mynotebook-backend-for-images.onrender.com"


   const [userblog, setuserblog] = useState([]);
   const [msg, setmsg] = useState('');
   const [allblogs, setallblogs] = useState([]);
   const [users, setusers] = useState('');
   const [fullarticle, setfullarticle] = useState({title:"",description:""});




   // get user blogs
   const getuser_blogs= async ()=>{
    const responce = await fetch(`${host}/api/notes/fetchallnotes`,{
    method:'GET',
    headers : {
      "Content-Type" : "application/json",
      "auth-token": localStorage.getItem('token')
    },
  });
  const json = await responce.json()
  setuserblog(json);
}


// get all blogs

const getblogs= async ()=>{
  const responce = await fetch(`${host}/api/notes/allblogs`,{
  method:'GET',
  headers : {
    "Content-Type" : "application/json", 
  },
});
const json = await responce.json()
setallblogs(json);
}



    //update blogs
      const editNote= async (id,title,description,tag)=>{
        const responce = await fetch(`${host}/api/notes/update/${id}`,{
        method:'PUT',
        headers : {
          "Content-Type" : "application/json",
          "auth-token": localStorage.getItem('token')
        },
        body : JSON.stringify({title,description,tag})
        });
        const json = await responce.json();
     
        // Logic to edit in client
        //isme hmne notes dobara s initialize krna prega kyuki y ho nhi rha tha
        const notesec=JSON.parse(JSON.stringify(userblog))
        for (let i = 0; i < notesec.length; i++) {
          const element = notesec[i];
          if (element._id === id) {
            userblog[i].title = title;
            userblog[i].description = description;
            break;
          }
          }
          setuserblog(notesec);
      }
      






      //add blog
     const addnote = async (title,description,tag)=>{
      props.setprogress(40)
          const responce = await fetch(`${host}/api/notes/addnote`,{
          method:'POST',
          headers : {
            "Content-Type" : "application/json",
            "auth-token": localStorage.getItem('token')
          },
          body : JSON.stringify({title,description,tag})
          });
          props.setprogress(60)
          const json = await responce.json();
          props.setprogress(80)
   
          if (json.success===true) {
            setmsg(json.message)
            props.setprogress(100)
            
          } else {
            alert("Enter valid details")
            props.setprogress(100)
          }
        
        const note = {
        "title": title,
        "description": description,
        
      }
      setuserblog(userblog.concat(note))
}



    //delete a note

    const deletenote = async (id)=>{
      props.setprogress(40)
      const responce = await fetch(`${host}/api/notes/delete/${id}`,{
        method:'DELETE',
        headers : {
          "Content-Type" : "application/json",
          "auth-token": localStorage.getItem('token')
        },
        });
        props.setprogress(80)
        const json = await responce.json();
        props.setprogress(100)
      alert(json.Success)
    }


    //get user detail
    const [user, setuser] = useState([])
    const getdetail = async ()=>{
      const responce = await fetch(`${host}/api/auth/getuser`,{
        method:'POST',
        headers : {
          "Content-Type" : "application/json",
          "auth-token": localStorage.getItem('token')
        },
        });
        const json = await responce.json();
      setusers(json);
    }

  
    
  

 
  



  return (
    <NoteContext.Provider value={{addnote, deletenote,allblogs,getblogs, getuser_blogs,userblog,editNote,getdetail,users,setuser ,fullarticle, setfullarticle, msg}}>
      {props.children}
    </NoteContext.Provider>
  )

}
export default NoteState;
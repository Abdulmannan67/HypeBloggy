import Formitem from './Formitem'
import React, { useContext, useState } from "react";
import noteContext from '../Context/noteContext'
import "../style.css"


const Form = (props) => {
  const [newphoto, setnewphoto] = useState([]);
  const context = useContext(noteContext);
   const {post,getallimg ,imgs}= context;
  
  const handlephoto = (e) => {
    setnewphoto( e.target.files[0] );

  };

  const handlesubmit = (e) => {
   
    e.preventDefault();
    post(newphoto);
   
  };

  const seeimage=()=>{
   
    getallimg()
  
  }
    return (
    <>
    <div className='card-formall' style={{display:"flex", justifyContent:"cemter", alignItems:"center",flexDirection:"column"}} >
    <div style={{backgroundColor: "lightblue"}}  className="card-form mx-2 my-2 " >
 
    <form className="card-body d-flex flex-column justify-content-center  align-items-center" onSubmit={handlesubmit} encType="multipart/form-data">
      <input
      className='file'
        type="file"
        accept=".jpg,.png,.jpeg"
        name="photo"
        onChange={handlephoto}
      />
      <input className="btn btn-primary my-2 " type="submit" />
      
    </form>
    <button className="btn btn-primary mb-3" onClick={seeimage} >Refresh Images</button>
    </div>


    <div className='row pt-3 mx-2' >
        <h1 style={{color:"black"}} className='text-center'>Your images</h1>
        <h5 style={{color:"red"}} className='text-center'>upload images can take some time so please wait...</h5>
        {imgs.length===0 && "No images to display"}
        {imgs.map((no)=>{
      return( 
        <div className="col-md-3" key={no._id}>
        <Formitem key={no._id} image={no.img} setprogress={props.setprogress} id={no._id} /> 
        </div>
        )
    })}
    </div>
    </div>

    </>
  );
};

export default Form;

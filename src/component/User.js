import React, { useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
import {useContext} from 'react'
import noteContext from '../Context/noteContext'

function User(props) {
  
    let navigate = useNavigate();
    const context = useContext(noteContext)
    const {users , getdetail}=context; 

    useEffect(() => {
      getdetail();
    }, [])
    
    
    
    const handle=()=>{
      props.setprogress(20)
        localStorage.removeItem('token');
        props.setprogress(40)
        navigate("/")
        props.setprogress(100)
      }
  return (
    <>
    <div className='user' >
    <div id='userup' className="card">
   <div   className="card-body text-center">
    <h1>Hi there , {users.name} </h1>
    <h2>Thanks for using HypesBloggy </h2>
  </div>
 </div>

 <div className="col d-flex justify-content-center mt-5">
    <div>
        <div id='userup'  className="  card text-center pt-2" style={{width:"18rem" }}>
        <i className="fa-4x fa-solid fa-user mx-3">  </i> 
  <div className="card-body">
    <h5 className="card-title">{users.name}</h5>
    <p className="card-text">{users.email}</p>
    <button onClick={handle} className="btn btn-primary " > Logout</button>
  </div>
</div>
    </div>
    </div>
    </div>
    </>
  )
}

export default User
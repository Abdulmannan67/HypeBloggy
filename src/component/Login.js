import React ,{useState}from 'react'
import { useNavigate } from 'react-router-dom';
import "../style.css"


const Login = (props) => {
  // const host ='https://mynotebook-ohw5.onrender.com/';
  // const host = "http://localhost:8000/"
  const host = "http://localhost:8000/"
    const [credential, setCredential] = useState({email: "", password: ""}) 

    let navigate = useNavigate();
    

    const change = (e)=>{
      setCredential({...credential, [e.target.name]: e.target.value})
  }




  const handleForget= async(e)=>{
   e.preventDefault();
   navigate("/Emaillogin")
  
  }


    const handleSubmit = async (e) => {
        e.preventDefault();
        props.setprogress(20)
        const response = await fetch(`${host}api/auth/login`, {
         
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email: credential.email, password: credential.password})
        });
        props.setprogress(40)
        const json = await response.json()
        props.setprogress(60)
        
        if (json.success){
            // Save the auth token and redirect
            localStorage.setItem('token', json.token); 
            props.setprogress(100)
            props.showalert("login Successfully",'success')
            navigate('/home');

        }
        else{
          props.setprogress(100)
            props.showalert("Invalid credentials",'warning');
        }
    }

    

  return (
    <>
    <div className='logincss'>
      <h2 style={{color:"white"}} className='text-center'>Login to continue to Hypes<span style={{color:"#69c782", fontWeight:"bold"}}>Bloggy</span> </h2>
      <div className ="mt-3 mx-4">
        
      <form onSubmit={handleSubmit}  >
      <div style={{backgroundColor: "rgba(0,0,0,0.5) !important"}}  className='border border-secondary rounded p-4'>
  <div style={{color:"white"}}  className="mb-3">
    <label htmlFor="email" className="form-label">Email address</label>
    <input type="email" onChange={change} className="form-control" name="email" value={credential.email} id="email" aria-describedby="emailHelp"/>
    <div id="emailHelp"  className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div style={{color:"white"}}  className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" onChange={change} className="form-control" name="password" value={credential.password} id="password"  autoComplete="on" />
  </div>
  <button type="submit" style={{backgroundColor:"#00a82d"}} className="btn btn-primary">Submit</button>
  <span id='forgetpass' onClick={handleForget} >OTP login</span>
  </div>
</form>
    </div>
    </div>


    </>
  )
}

export default Login
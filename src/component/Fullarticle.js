import React ,{useContext , useEffect} from 'react'
import noteContext from '../Context/noteContext'
import { useNavigate } from 'react-router-dom';

const Fullarticle = () => {

    const context = useContext(noteContext);
    let navigate = useNavigate();
    const{fullarticle}= context;
    useEffect(() => {
      if (!localStorage.getItem('token') && fullarticle.title=="") {
        navigate("/Allblogs")
      }else if(localStorage.getItem('token') && fullarticle.title==""){
        navigate("/home")
      }
    }, [])
    

  return (
    <div style={{display:"flex", alignItems:"center",justifyContent:"center"}} className='my-5 ' >
        <div style={{ padding:"2rem" ,width:"90vw",textAlign:"justify"}}className="cardnote border border-secondary rounded color" >
  <div className="card-body">
    <h5  className="card-title my-4">{fullarticle.title}</h5>
    
    <p style={{color:"#564b4b"}} className="card-text">{fullarticle.description}</p>

    </div>
    </div>
    </div>
    
  )
}

export default Fullarticle
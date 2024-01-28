import React ,{useContext, useEffect} from 'react'
import noteContext from '../Context/noteContext';
import { useNavigate } from 'react-router-dom';
import Allblogitems from './Allblogitems';

const Allblogs = () => {
    const context = useContext(noteContext);
    let navigate = useNavigate();
    const {allblogs,getblogs} = context;
   
useEffect(() => {
    
  getblogs();
  
}, [])

  
   

  return (
    <>
    
    <div className='row pt-3 mx-2' >
        {allblogs.length===0 && "No blogs to display"}
        {allblogs.map((no)=>{
      return <Allblogitems key={no._id}  notes={no}  /> 
    })}
    </div>
    </>
  )
}

export default Allblogs
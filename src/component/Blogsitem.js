import React ,{useContext} from 'react';
import noteContext from '../Context/noteContext'
import {
  WhatsappIcon,EmailIcon,TelegramIcon,
  WhatsappShareButton, EmailShareButton,TelegramShareButton } from "react-share";
import { useNavigate } from 'react-router-dom';
import "../style.css"

const Noteitem = (props) => {
  const context = useContext(noteContext);
  const{deletenote,setfullarticle}= context;
    const {notes , update}=props;
    let navigate = useNavigate();

    const click = ()=>{
      setfullarticle({title:notes.title, description:notes.description})
      navigate("/full-article")
    }
    
    let des = notes.description.slice(0,200)
    let titl = notes.title.slice(0,80)
 
  return (
<>



    <div className='col-md-4 my-3 ' >
        <div style={{backgroundColor:"#69c782", padding:"1rem"}}className="cardnote border border-secondary rounded color" >
  <div className="card-body">
    <h5  className="card-title my-4">{titl}</h5>
    
    {/* <h6 className="card-subtitle mb-2 text-muted">{notes.tag}</h6> */}
    <p style={{textAlign:"justify"}} className=" card-text">{des}</p>
    
    <i className="fa-solid fa-trash mx-3" onClick={()=>{deletenote(notes._id)}} ></i>
    <i className="fa-solid fa-pen-to-square mx-3" onClick={()=>{update(notes)}} ></i> 
    <WhatsappShareButton className='mx-2' url={notes.description}  separator=' ' title={notes.title} > 
  <WhatsappIcon size={32} round={true} />
</WhatsappShareButton>

<EmailShareButton className='mx-2' body={notes.description}  separator=' ' subject={notes.title} > 
  <EmailIcon size={32} round={true} />
</EmailShareButton>

<TelegramShareButton className='mx-2' url={notes.description}  separator=' ' title={notes.title} > 
  <TelegramIcon size={32} round={true} />
</TelegramShareButton>
  
  <button className='button-primary my-2' onClick={click}>Full Article</button>
    
  </div>
</div> 
</div> 

</>
  )
}

export default Noteitem
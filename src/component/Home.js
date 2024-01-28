import React, { useState } from "react";
import SimpleImageSlider from "react-simple-image-slider";
import "../style.css"
import { Link } from "react-router-dom";
const Home = () => {
  const [imageNum, setImageNum] = useState(1);
  const sliderImages = [
     {
        url: "https://images.pexels.com/photos/1410226/pexels-photo-1410226.jpeg",
     },
     {
        url: "https://images.pexels.com/photos/4238524/pexels-photo-4238524.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
     },
     {
        url: "https://images.pexels.com/photos/442574/pexels-photo-442574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
     },
     {
        url: "https://images.pexels.com/photos/4126743/pexels-photo-4126743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
     },
     {
        url: "https://images.pexels.com/photos/3059747/pexels-photo-3059747.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
     },
  ];

  return (
    <>
    <div className='holecard' >
        <div className="cardhome" >
        <div className="image">
        <SimpleImageSlider 
            width={300}
            height={400}
            images={sliderImages}
            showBullets={true}
            showNavs={true}
            autoPlay={true} 
            onStartSlide = {(index, length) => {
               setImageNum(index);
            }}
               autoPlayDelay = {3}
         />
        </div>
  </div>
  <div className="cardhome-body">
  <h1 className="h1home" >Welcome to HypesBloggy -<span style={{color:"green" ,}} > The Ultimate Blogging Platform </span></h1>
    <p className="cardhome-text">Ready to start blogging? Sign up for a free account today and join the HypesBloggy community!
                stay productive.</p>
                {!localStorage.getItem('token')?
                <div id="btsin" className="d-flex">
                
                 <Link to="/signup" className="button-primary">
                 Sign up for free
               </Link>
               <Link id="btlog" to="/login" className="button-primary mx-4">
                 Login to continue
               </Link> </div> : <span></span> } 


               
  </div>
  </div>




  <div className='holecard2' >
        <div className="cardhome" >
        <div className="image">
        <img id="homeimg" src="https://images.pexels.com/photos/760710/pexels-photo-760710.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="img"></img>
        </div>
  </div>
  <div className="cardhome-body">
  <h1 className="h1home2" >Safe and synced</h1>
    <p className="cardhome-text">HypesBloggy is a simple, fast, and secure blogging platform that lets you share your thoughts, opinions, and stories with the world. Whether you want to write about your hobbies, your passions, or your expertise, HypesBloggy has everything you need to create a stunning blog in minutes.</p>
                 
  </div>
  </div>



  <div className='holecard' >
        <div className="cardhome" >
        <div className="image">
        <img id="homeimg2" src="https://images.pexels.com/photos/1410226/pexels-photo-1410226.jpeg" alt="img" ></img>
        </div>
  </div>
  <div className="cardhome-body">
  <h1 className="h1home2" >Sharing made easy</h1>
    <p className="cardhome-text">User can easily share blogs on whatsapp and telegram. Can also send blogs to email.  </p>
                 
  </div>
  </div>




  <div className='holecard2' >
        <div className="cardhome" >
        <div className="image">
        <img id="homeimg1" src="https://images.pexels.com/photos/301943/pexels-photo-301943.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="img" ></img>
        </div>
  </div>
  <div className="cardhome-body">
  <h1 className="h1home2" >Take blogs and take action</h1>
    <p className="cardhome-text">Users can easily create, edit and delete blogs. The app allows for easy organization and customization of blogs, making it a powerful tool for personal and professional use. HypesBloggy offers an innovative and user-friendly solution for managing blogs that is accessible anytime, anywhere.</p>
                 
  </div>
  </div>

  {/* <!--Bottom Footer--> */}
		<div className="bottom section-padding">
			<div className="container">
				<div className="row">
					<div className="col-md-12 text-center">
						<div className="copyright">
							<p>© <span>2024</span> <a href="#" className="transition">HypesBloggy</a> Created by Abdul Mannan </p>
						</div>
					</div>
				</div>
			</div>
		</div>
{/* <!--Bottom Footer--> */}
        
    </>
  )
}

export default Home
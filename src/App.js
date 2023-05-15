import { BrowserRouter,Routes,Route,Link, useNavigate } from 'react-router-dom';
import Home from './view/screen/Home' ;
import './view/style/style.css'
import Pricing from './view/screen/Pricing';
import Facilities from './view/screen/Facilities';
import Review from './view/screen/Review';
import Booking from './view/screen/Booking';
import Register from './view/screen/Register';
import Login from './view/screen/Login';
import { Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import Profile from './view/screen/Profile';
import 'bootstrap/dist/css/bootstrap.min.css';
import {CiFacebook} from "react-icons/ci";
import {AiFillTwitterCircle} from "react-icons/ai";
import axios from 'axios';

function App(){
  const nav =useNavigate()
  const[user,setUser] = useState(localStorage.getItem('user'))

  console.log(user);



  function logout(){
    alert("logout")
    localStorage.clear()
    window.location.reload();
    nav("/")
  }
  return(
    
    <div >
    
      { <div className='link'>
        <Link className='link' to ="/">home</Link>
        <Link className='link' to ="/Facilities">Facilities</Link>
        <Link className='link' to ="/Pricing">Pricing</Link>
        <Link className='link' to ="/Review">Review</Link>
        <Link className='link' to ="/Booking">Booking</Link>
       {
        !user?
        <>
        <Link className='link' to ="/Register">Register</Link>
        <Link className='link' to ="/Login">Login</Link>
        </>
        :<>
        <Button onClick={()=>nav("/profile")}>Profile</Button>
        <Button onClick={logout}>logout</Button>
        </>
       }
        </div> }
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Facilities' element={<Facilities/>}></Route>
        <Route path='/Pricing' element={<Pricing/>} />
        <Route path='/Review' element={<Review/>} />
        <Route path='/Booking' element={<Booking/>}></Route>
        <Route path='/Register' element={<Register/>}></Route>
        <Route path='/Login' element={<Login/>}></Route>
        {!user? <Route path='/' element={<Home/>} />
       : <Route path='/profile' element={<Profile/>} ></Route>
      }
      </Routes>
      
      <footer class="footer-section">
        <div class="container">
            <div class="footer-text">
                <div class="row">
                    <div class="col-lg-4">
                        <div class="ft-about">
                            <div class="logo">
                                <a href="#">
                                    <img src="img/footer-logo.png" alt=""/>
                                </a>
                            </div>
                            <p>We inspire and reach millions of travelers<br /> across 90 local websites</p>
                            <div class="fa-social">
                                <CiFacebook size='10%'/>
                                <AiFillTwitterCircle size='10%'/>
                                <a href="#"><i class="fa fa-tripadvisor"></i></a>
                                <a href="#"><i class="fa fa-instagram"></i></a>
                                <a href="#"><i class="fa fa-youtube-play"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 offset-lg-1">
                        <div class="ft-contact">
                            <h6>Contact Us</h6>
                            <ul>
                                <li>(12) 345 67890</li>
                                <li>info.colorlib@gmail.com</li>
                                <li>856 Cordia Extension Apt. 356, Lake, United State</li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-3 offset-lg-1">
                        <div class="ft-newslatter">
                            <h6>New latest</h6>
                            <p>Get the latest updates and offers.</p>
                            <form action="#" class="fn-form">
                                <input type="text" placeholder="Email"/>
                                <button type="submit"><i class="fa fa-send"></i></button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="copyright-option">
            <div class="container">
                <div class="row">
                    <div class="col-lg-7">
                        <ul>
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">Terms of use</a></li>
                            <li><a href="#">Privacy</a></li>
                            <li><a href="#">Environmental Policy</a></li>
                        </ul>
                    </div>
                    <div class="col-lg-5">
                        <div class="co-text"><p> 
        Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i class="fa fa-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
         </p></div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
     
     
    </div>
  )
}
export default App;








import 'bootstrap/dist/css/bootstrap.min.css';
import {Row,Col,Button,Form,Container,Carousel,} from 'react-bootstrap';
import {AiOutlineWifi} from "react-icons/ai";
import {FaWind} from "react-icons/fa";
import {FaNewspaper} from "react-icons/fa";
import {CiFacebook} from "react-icons/ci";
import {AiFillTwitterCircle} from "react-icons/ai";
import {GoLocation} from "react-icons/go";
import {MdFlatware} from "react-icons/md";
import {IoBedOutline} from "react-icons/io5";
import {GiTowel } from "react-icons/gi";
import {IoMdClock } from "react-icons/io";
import {FaCocktail} from "react-icons/fa";
import Pricing from './Pricing';


function Home(){
    return(
    <>
        
          
    <div>
      {/* <section id="title"/> */}
       <div className="container-fluid navnav"/>
    

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
        <a className="navbar-brand" href="#">Home Stay</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" 
        aria-controls="#navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* <div className="collapse navbar-collapse" id="#navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Facilities">Facilities</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#pricing">Pricing</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#video">Video</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#Reviews">Reviews</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#contact">Contact Us</a>
              </li>
          </ul>
        </div> */}
        </nav>
      </div>
        
      
    

      <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require('../img/hero-1.jpg')}
          alt="First slide"
        />
        
        <Carousel.Caption>
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <div class="hero-text">
                        <h1> Luxury Hotel</h1>
                        <p>Here are the best hotel booking sites, including recommendations for international
                            travel and for finding low-priced hotel rooms.</p>
                        <a href="#" class="primary-btn">Discover Now</a>
                    </div>
                </div>
                
            </div>
        </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require('../img/hero-2.jpg')}
          alt="Second slide"
        />

        <Carousel.Caption>
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <div class="hero-text">
                        <h1>Luxury Hotel</h1>
                        <p>Here are the best hotel booking sites, including recommendations for international
                            travel and for finding low-priced hotel rooms.</p>
                        <a href="#" class="primary-btn">Discover Now</a>
                    </div>
                </div>
                
            </div>
        </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require('../img/hero-3.jpg')}
          alt="Third slide"
        />

        <Carousel.Caption>
           <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <div class="hero-text">
                        <h1>Luxury Hotel</h1>
                        <p>Here are the best hotel booking sites, including recommendations for international
                            travel and for finding low-priced hotel rooms.</p>
                        <a href="#" class="primary-btn">Discover Now</a>
                    </div>
                </div>
                
            </div>
        </div>
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
        
       
     
  
    <section class="aboutus-section spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <div class="about-text">
                        <div class="section-title">
                            <span>About Us</span>
                            <h2>Intercontinental LA <br />Westlake Hotel</h2>
                        </div>
                        <p class="f-para">Sona.com is a leading online accommodation site. We’re passionate about
                            travel. Every day, we inspire and reach millions of travelers across 90 local websites in 41
                            languages.</p>
                        <p class="s-para">So when it comes to booking the perfect hotel, vacation rental, resort,
                            apartment, guest house, or tree house, we’ve got you covered.</p>
                        <a href="#" class="primary-btn about-btn">Read More</a>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="about-pic">
                        <div class="row">
                            <div class="col-sm-6">
                                <img src={require('../img/about-1.jpg')} alt=""/>
                            </div>
                            <div class="col-sm-6">
                                <img src={require('../img/about-2.jpg')} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>


  <section className="white-section"id="features">
    <div className="container-fluid">
      {/* <h1>About</h1> */}
      <p><b>5 ROOMS, ALL EQUIPPED WITH GREAT FACILITIES</b></p>
        <p>Lorem ipsum dolor sit amet,<br/> consectetur adipisicing elit, <br/>
        sed do eiusmod tempor incididunt .</p>
    
      <div className="row">
      <div className="feature-box col-lg-4">
      <i className='icon' ><AiOutlineWifi size='35%'/></i> 
      <h3 className="feature-title">Free Wifi</h3>
 
    </div>
      <div className="feature-box col-lg-4">
       <i className='icon'> <FaWind size='35%'/></i>
      <h3 className="feature-title">Air Conditioner</h3>
     
    </div>
    <div className="feature-box col-lg-4">
    <i className='icon'> <FaNewspaper size='35%'/></i>
      <h3 className="feature-title">Work Tables.</h3>
     
    </div>
      </div>
    
    </div>
      </section>


      <section class="services-section spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-title">
                        <span>What We Do</span>
                        <h2>Discover Our Services</h2>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-4 col-sm-6">
                    <div class="service-item">
                        < GoLocation size='15%'/>
                        <h4>Travel Plan</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna.</p>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6">
                    <div class="service-item">
                        < MdFlatware size='15%'/>
                        <h4>Catering Service</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna.</p>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6">
                    <div class="service-item">
                        < IoBedOutline size='15%'/>
                        <h4>Babysitting</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna.</p>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6">
                    <div class="service-item">
                        < GiTowel size='15%'/>
                        <h4>Laundry</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna.</p>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6">
                    <div class="service-item">
                        < IoMdClock size='15%'/>
                        <h4>Hire Driver</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna.</p>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6">
                    <div class="service-item">
                        <FaCocktail size='15%'/>
                        <h4>Bar & Drink</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

      <section class="hp-room-section">
        <div class="container-fluid">
            <div class="hp-room-items">
                <div class="row">
                    <div class="col-lg-3 col-md-6">
                        <div class="hp-room-item set-bg" data-setbg="img/room/room-b1.jpg">
                            <div class="hr-text">
                                <h3>Double Room</h3>
                                <h2>199$<span>/Pernight</span></h2>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td class="r-o">Size:</td>
                                            <td>30 ft</td>
                                        </tr>
                                        <tr>
                                            <td class="r-o">Capacity:</td>
                                            <td>Max persion 5</td>
                                        </tr>
                                        <tr>
                                            <td class="r-o">Bed:</td>
                                            <td>King Beds</td>
                                        </tr>
                                        <tr>
                                            <td class="r-o">Services:</td>
                                            <td>Wifi, Television, Bathroom,...</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <a href="/Pricing" class="primary-btn" >More Details</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <div class="hp-room-item set-bg1" src={require('../img/H1.jpg')}>
                            <div class="hr-text">
                                <h3>Premium King Room</h3>
                                <h2>159$<span>/Pernight</span></h2>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td class="r-o">Size:</td>
                                            <td>30 ft</td>
                                        </tr>
                                        <tr>
                                            <td class="r-o">Capacity:</td>
                                            <td>Max persion 5</td>
                                        </tr>
                                        <tr>
                                            <td class="r-o">Bed:</td>
                                            <td>King Beds</td>
                                        </tr>
                                        <tr>
                                            <td class="r-o">Services:</td>
                                            <td>Wifi, Television, Bathroom,...</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <a href="/Pricing" class="primary-btn">More Details</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <div class="hp-room-item set-bg2" data-setbg="img/room/room-b3.jpg">
                            <div class="hr-text">
                                <h3>Deluxe Room</h3>
                                <h2>198$<span>/Pernight</span></h2>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td class="r-o">Size:</td>
                                            <td>30 ft</td>
                                        </tr>
                                        <tr>
                                            <td class="r-o">Capacity:</td>
                                            <td>Max persion 5</td>
                                        </tr>
                                        <tr>
                                            <td class="r-o">Bed:</td>
                                            <td>King Beds</td>
                                        </tr>
                                        <tr>
                                            <td class="r-o">Services:</td>
                                            <td>Wifi, Television, Bathroom,...</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <a href="/Pricing" class="primary-btn">More Details</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <div class="hp-room-item set-bg3" data-setbg="img/room/room-b4.jpg">
                            <div class="hr-text">
                                <h3>Family Room</h3>
                                <h2>299$<span>/Pernight</span></h2>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td class="r-o">Size:</td>
                                            <td>30 ft</td>
                                        </tr>
                                        <tr>
                                            <td class="r-o">Capacity:</td>
                                            <td>Max persion 5</td>
                                        </tr>
                                        <tr>
                                            <td class="r-o">Bed:</td>
                                            <td>King Beds</td>
                                        </tr>
                                        <tr>
                                            <td class="r-o">Services:</td>
                                            <td>Wifi, Television, Bathroom,...</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <a href="/Pricing" class="primary-btn">More Details</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    

    <section class="blog-section spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-title">
                        <span>Hotel News</span>
                        <h2>Our Blog & Event</h2>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-4">
                    <div class="blog-item set-bg4" data-setbg="img/blog/blog-1.jpg">
                        <div class="bi-text">
                            <span class="b-tag">Travel Trip</span>
                            <h4><a href="#">Tremblant In Canada</a></h4>
                            <div class="b-time"><i class="icon_clock_alt"></i> 15th April, 2019</div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="blog-item set-bg5" data-setbg="img/blog/blog-2.jpg">
                        <div class="bi-text">
                            <span class="b-tag">Camping</span>
                            <h4><a href="#">Choosing A Static Caravan</a></h4>
                            <div class="b-time"><i class="icon_clock_alt"></i> 15th April, 2019</div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="blog-item set-bg6" data-setbg="img/blog/blog-3.jpg">
                        <div class="bi-text">
                            <span class="b-tag">Event</span>
                            <h4><a href="#">Copper Canyon</a></h4>
                            <div class="b-time"><i class="icon_clock_alt"></i> 21th April, 2019</div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-8">
                    <div class="blog-item small-size set-bg7" data-setbg="img/blog/blog-wide.jpg">
                        <div class="bi-text">
                            <span class="b-tag">Event</span>
                            <h4><a href="#">Trip To Iqaluit In Nunavut A Canadian Arctic City</a></h4>
                            <div class="b-time"><i class="icon_clock_alt"></i> 08th April, 2019</div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="blog-item small-size set-bg8" data-setbg="img/blog/blog-10.jpg">
                        <div class="bi-text">
                            <span class="b-tag">Travel</span>
                            <h4><a href="#">Traveling To Barcelona</a></h4>
                            <div class="b-time"><i class="icon_clock_alt"></i> 12th April, 2019</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    

        <section id="video" className="video-project">
            <h1 className="cen video-h1"></h1>
            <div id="carouselExampleControls" className="carousel slide video-con" data-bs-ride="carousel"/>
           <div className="carousel-inner">
            <div className="carousel-item active container-fluid u">
              <video className="video" autoplay controls muted loop src={require('../img/V1.mp4')}></video>
              <p className="video_title">Lorem, ipsum dolor.</p>
            </div>
            <div className="carousel-item container-fluid u">
              <video className="video" autoplay controls muted loop src={require('../img/V2.mp4')}></video>
              <p className="video_title">Lorem, ipsum dolor.</p>
            </div>
            <div className="carousel-item container-fluid u">
              <video className="video" autoplay controls muted loop src="img/V3.mp4"></video>
              <p className="video_title">Lorem, ipsum dolor.</p>
            </div>
            <div className="carousel-item container-fluid u">
              <video className="video" autoplay controls muted loop src="img/V4.mp4"></video>
              <p className="video_title">Lorem, ipsum dolor.</p>
            </div>
      
          <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr.only"></span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr.only"></span>
          </a>
        </div>
      </section>
     {/* 
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
      */}
      



</>
    )
}
export default Home
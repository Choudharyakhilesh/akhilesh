import axios from "axios";
import { useState } from "react";

function Booking(){
    const[Name,setName]=useState("");
    const[Email,setEmail]=useState("");
    const[Checkin,setCheckin]=useState("");
    const[Checkout,setCheckout]=useState("");
    const[formselect,setformselect]=useState("");
    const[select,setselect]=useState("");
    const[select1,setselect1]=useState("");
    const[select2,setselect2]=useState("");



    async function userbooking(){
       /*  console.log(Name);
        console.log(Email);
        console.log(Checkin);
        console.log(Checkout);
        console.log(formselect);
        console.log(select);
        console.log(select1);
        console.log(select2); */
    
    let params={
        Name:Name,
        Email:Email,
        Checkin:Checkin,
        Checkout:Checkout,
        formselect:formselect,
        select:select,
        select1:select1,
        select2:select2
    
    }
    console.log(params);
    
    let res =await axios.post("booking",params)

    console.log(res.data); 
    
    alert('Booking Successfully')
    }
    return(
  

<section class="contact-section spad">
<div class="container">
    <div class="row">
        <div class="col-lg-4">
            <div class="contact-text">
                <h2>Contact Info</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua.</p>
                <table>
                    <tbody>
                        <tr>
                            <td class="c-o">Address:</td>
                            <td><br></br>856 Cordia Extension Apt. 356, Lake, US</td>
                        </tr>
                        <tr>
                            <td class="c-o">Phone:</td>
                            <td>(12) 345 67890</td>
                        </tr>
                        <tr>
                            <td class="c-o">Email:</td>
                            <td>info.colorlib@gmail.com</td>
                        </tr>
                        <tr>
                            <td class="c-o">Fax:</td>
                            <td>+(12) 345 67890</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="col-lg-7 offset-lg-1">
        

<div class="wow fadeInUp" data-wow-delay="0.2s">
                            <form>
                                <div class="row g-3">
                                    <div class="col-md-6">
                                        <div class="form-floating">
                                            <input type="text" class="form-control" id="name" placeholder="Your Name" value={Name} onChange={(d)=>setName(d.target.value)}/>
                                            <label for="name">Your Name</label>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-floating">
                                            <input type="email" class="form-control" id="email" placeholder="Your Email"value={Email} onChange={(d)=>setEmail(d.target.value)}/>
                                            <label for="email">Your Email</label>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-floating date" id="date3" data-target-input="nearest">
                                            <input type="text" class="form-control datetimepicker-input" id="checkin" placeholder="Check In" data-target="#date3" data-toggle="datetimepicker"value={Checkin} onChange={(d)=>setCheckin(d.target.value)} />
                                            <label for="checkin">Check In</label>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-floating date" id="date4" data-target-input="nearest">
                                            <input type="text" class="form-control datetimepicker-input" id="checkout" placeholder="Check Out" data-target="#date4" data-toggle="datetimepicker" value={Checkout} onChange={(d)=>setCheckout(d.target.value)}/>
                                            <label for="checkout">Check Out</label>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-floating">
                                            <select class="form-select" id="select1" value={formselect} onChange={(d)=>setformselect(d.target.value)}>
                                              <option value="1">Adult 1</option>
                                              <option value="2">Adult 2</option>
                                              <option value="3">Adult 3</option>
                                            </select>
                                            <label for="select1">Select Adult</label>
                                          </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-floating">
                                            <select class="form-select" id="select2"value={select} onChange={(d)=>setselect(d.target.value)}>
                                              <option value="1">Child 1</option>
                                              <option value="2">Child 2</option>
                                              <option value="3">Child 3</option>
                                            </select>
                                            <label for="select2">Select Child</label>
                                          </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="form-floating">
                                            <select class="form-select" id="select3"value={select1} onChange={(d)=>setselect1(d.target.value)}>
                                              <option value="1">Room 1</option>
                                              <option value="2">Room 2</option>
                                              <option value="3">Room 3</option>
                                            </select>
                                            <label for="select3">Select A Room</label>
                                          </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="form-floating">
                                            <textarea class="form-control" placeholder="Special Request" id="message" value={select2} onChange={(d)=>setselect2(d.target.value)} ></textarea>
                                            <label for="message">Special Request</label>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <button class="btn btn-primary w-1001 py-3"  onClick={userbooking}>Book Now</button>
                                    </div>
                                </div>
                            </form>
                        </div>
        </div>
    </div>
    <div class="map">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.0606825994123!2d-72.8735845851828!3d40.760690042573295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e85b24c9274c91%3A0xf310d41b791bcb71!2sWilliam%20Floyd%20Pkwy%2C%20Mastic%20Beach%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1578582744646!5m2!1sen!2sbd"
            height="470"  allowfullscreen=""></iframe>
    </div>
</div>

  


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
                                <a href="#"><i class="fa fa-facebook"></i></a>
                                <a href="#"><i class="fa fa-twitter"></i></a>
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

    </section>

    )
}

export default Booking;
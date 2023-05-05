import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';
import Home from './view/screen/Home' ;
import './view/style/style.css'
import Pricing from './view/screen/Pricing';
import Facilities from './view/screen/Facilities';
import Review from './view/screen/Review';
import Booking from './view/screen/Booking';
import Register from './view/screen/Register';
import Login from './view/screen/Login';
import { Button } from 'react-bootstrap';
import { useState } from 'react';
function App(){
  const[user,setUser] = useState(localStorage.getItem('user'))

  console.log(user);

  function logout(){
    alert("logout")
    localStorage.clear()
    window.location.reload();
  }
  return(
    
    <div >
      <BrowserRouter>
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
        :
        <Button onClick={logout}>logout</Button>
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
        
      </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App;








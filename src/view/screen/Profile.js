import axios from "axios"
import { useEffect, useState } from "react"
import { Container,Row,Col, Button } from "react-bootstrap";

export default function Profile(){
    const[user,setUser] = useState(localStorage.getItem('user'));
    const[book,setBook] = useState('');
    useEffect(()=>{
        async function showdata(){
          let res=await axios.post("showbooking",user).catch(e=>console.log(e))
          let data = res?.data;
          setBook(data)
        }
        showdata()
        },[])
        console.log(book);
    return(
        <>
        <Container>
            <Row className="p-3">
                <Col>
                <table style={{width:"100%"}} className="border">
                <tr> <th className="border">Name</th>
                    <th className="border">Checkin</th>
                    <th className="border">Checkout</th>
                   {/*  <th className="border">Email</th> */}
                   
                    <th className="border">formselect</th>
                    <th className="border">select</th>
                    <th className="border">select1</th>
                    <th className="border">select2</th>
                    </tr>
                { book.length>0&&
            book.map(d=>(

                    <tr>
                        <td className="border">{d.Name}</td>
                    <td className="border">{d.Checkin}</td>
                    <td className="border">{d.Checkout}</td>
                    {/* <td className="border">{d.Email}</td> */}
                    
                    <td className="border">{d.formselect}</td>
                    <td className="border">{d.select}</td>
                    <td className="border">{d.select1}</td>
                    <td className="border">{d.select2}</td>
                    </tr>
            ))
            
                }
                </table>
                </Col>
                <Col>
                <div>
                    <Button>Pay</Button>
                    </div>
                </Col>
            </Row>
        </Container>
        </>
    )
}
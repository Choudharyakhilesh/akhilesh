import axios from "axios"
import { useEffect, useState } from "react"
import { Container,Row,Col, Button } from "react-bootstrap";

export default function Profile(){
    const[user,setUser] = useState(localStorage.getItem('user'));
    const[book,setBook] = useState('');
    const[pay,setPay] = useState('');
    const[payamount,setPayAmount] = useState('');

    useEffect(()=>{
        async function showdata(){
          let res=await axios.post("showbooking",user).catch(e=>console.log(e))
          let data = res?.data;
          setBook(data)
        }
        showdata()
        async function showdata1(){
            let res=await axios.post("showpay",user).catch(e=>console.log(e))
            let data = res?.data;
            console.log(data);
            setPayAmount(data[0].amount)
          }
          showdata1()
        },[])
        console.log(book);

        async function payment(){
            let params = {
                user:user,
                amount:pay
            }

            let res = await axios.post('payment',params).catch(d=>console.log(d))
            let data = res?.data;
            console.log(data);
            setPay("")
        }
        console.log(payamount); 
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
                <div className="border">
                    <label className="m-3">Enter Amount:-{payamount}</label><br/>
                    
                    </div>
                </Col>
                <Col>
                <div className="border">
                    <label className="m-3">Enter Amount:-</label><br/>
                    <input placeholder="enter payment" className="border" value={pay} onChange={(d=>setPay(d.target.value))}/><br/>
                    <Button className="m-3" onClick={payment}>payment</Button>
                    </div>
                </Col>
            </Row>
        </Container>
        </>
    )
}
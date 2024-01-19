import React, {useContext, useState, useEffect, useRef} from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.css';
import Dropdown from 'react-bootstrap/Dropdown';
import axios from "axios";
import Toast from 'react-bootstrap/Toast';
import Table from 'react-bootstrap/Table';
import testjson from "./testjson.json"
import flightTest from "./flightTest.json"
import DropdownButton from 'react-bootstrap/DropdownButton';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import {Link, useNavigate} from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';

import { UserContext } from "./UserContexts/UserContext";

export const UserDetail = (props) => {
    const navigate = useNavigate();


    const {id_user, setId_user} = useContext(UserContext);

    const[paymentInfo, setPaymentInfo] = useState([]);
    const[travelOrder, setTravelOrder] = useState([]);
    const [flightOrder, setFlightOrder] = useState([]);

    const initialRender = useRef(true);

    useEffect(() => {
        if (JSON.parse(localStorage.getItem("ID_USER"))) {
            const data = JSON.parse(localStorage.getItem("ID_USER"));
            setId_user(JSON.parse(data));
        }

    })


    useEffect(() => {

        if (initialRender.current) {
            initialRender.current=false;
            return;
        }
    
        window.localStorage.setItem('ID_USER', JSON.stringify(id_user))
    

        if (id_user != null) {
        
        

            fetch(`http://localhost:8080/fetchFlightOrder/${id_user}`)
                .then((response) => response.json())
                .then((json) => {
            
                setFlightOrder(json)

                })

                .catch((err) => {
                console.log(err.message);
                })

        
            fetch(`http://localhost:8080/fetchTravelOrder/${id_user}`)
                .then((response) => response.json())
                .then((json) => {
              
                setTravelOrder(json)

                })

                .catch((err) => {
                console.log(err.message);
                })
                

            fetch(`http://localhost:8080/fetchPaymentInfo/${id_user}`)
                .then((response) => response.json())
                .then((json) => {
            
        
                setPaymentInfo(json)

                })

                .catch((err) => {
                console.log(err.message);
                })


        }

    },[])


  


    



    const logout =() => {

        localStorage.removeItem('ID_USER')
        navigate('/login')
    }



    return (
        <div>
            <div>
                <Navbar bg="dark" variant="dark" expand="lg">
                    <Nav className="me-auto">
                        <Nav.Item>
                            <Navbar.Brand as={Link} to={"/UserManagement"}>Home</Navbar.Brand>
                        </Nav.Item>

                    
                    </Nav>

                    <Nav>
                        <Nav.Item className="ml-auto">
                            <Nav.Link onClick={logout} as={Link} to={"/login"}>Logout</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar>

            </div>

            <div style = {{width: '85%', marginLeft: 'auto', marginRight: 'auto', paddingTop: '3%'}}>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Confirmation Number</th>
                        <th hidden={true}>user id</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Phone Extension</th>
                        <th>Phone Number</th>
                        <th>Passport Country</th>
                        <th>Gender</th>     
                        <th>Travel Date</th>        
                        <th>Confirmation Email</th>                           
                    </tr>
                </thead>
              
                <tbody>
                    {travelOrder.map(item =>
                        <tr key={item.confirmation_id_id}>
                            <td>{item.confirmation_id}</td>
                            <td hidden={true}>{item.user_id}</td>
                            <td>{item.first_name}</td>
                            <td>{item.last_name}</td>
                            <td>{item.phone_country}</td>
                            <td>{item.phone_number}</td>
                            <td>{item.passport_country}</td>
                            <td>{item.gender}</td>
                            <td>{item.travel_date}</td>
                            <td>{item.confirmation_email}</td>
                        </tr>
                    )}
                </tbody>
            </Table>
            </div>

            
            <div style = {{width: '85%', marginLeft: 'auto', marginRight: 'auto', paddingTop: '3%'}}>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th hidden={true}>ID</th>
                        <th hidden={true}>user id</th>
                        <th>Confirmation Number</th>
                        <th>Traveler Amount</th>
                        <th>Travel Date</th>
                        <th>Flight Fare</th>
                        <th>Tax and Fees</th>
                        <th>Total Price</th>                        
                    </tr>
                </thead>
              
                <tbody>
                    {flightOrder.map(item =>
                        <tr key={item.flight_id}>
                            <td hidden={true}>{item.flight_id}</td>
                            <td hidden={true}>{item.user_id}</td>
                            <td>{item.confirmation_id}</td>
                            <td>{item.traveler_amount}</td>
                            <td>{item.travel_date}</td>
                            <td>{item.currency} ${item.travel_fare}</td>
                            <td>{item.currency} ${item.travel_tax}</td>
                            <td>{item.currency} ${item.travel_total}</td>
                        </tr>
                    )}
                </tbody>
            </Table>
            </div>



            <div style = {{width: '85%', marginLeft: 'auto', marginRight: 'auto', paddingTop: '3%'}}>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th hidden={true}>payment id</th>
                        <th hidden={true}>user id</th>
                        <th>Confirmation Number</th>
                        <th>Name on Card</th>
                        <th>Card Number</th>
                        <th>Expiration_date</th>
                        <th>Country</th>
                        <th>Billing Address</th>
                        <th>City</th>    
                        <th>Postal Code</th>                            
                    </tr>
                </thead>
              
                <tbody>
                    {paymentInfo.map(item =>
                        <tr key={item.payment_id}>
                            <td hidden={true}>{item.payment_id}</td>
                            <td hidden={true}>{item.user_id}</td>
                            <td>{item.confirmation_id}</td>
                            <td>{item.card_owner}</td>
                            <td>{item.card_number}</td>
                            <td>{item.expiration_date}</td>
                            <td>{item.user_country}</td>
                            <td>{item.billing_address}</td>
                            <td>{item.city}</td>
                            <td>{item.postal_code}</td>
                        </tr>
                    )}
                </tbody>
            </Table>
            </div>


        </div>

    );
}
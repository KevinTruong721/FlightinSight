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

import emailjs from '@emailjs/browser';



import { UserContext } from "./UserContexts/UserContext";
import { UserContext1 } from "./UserContexts/UserContext1";
import { UserContext2 } from "./UserContexts/UserContext2";
import { UserContext3 } from "./UserContexts/UserContext3"
import { UserContext4 } from "./UserContexts/UserContext4";
import { UserContext5 } from "./UserContexts/UserContext5";
import { UserContext6 } from "./UserContexts/UserContext6";
import { UserContext7 } from "./UserContexts/UserContext7";
import { UserContext8 } from "./UserContexts/UserContext8";
import { UserContext9 } from "./UserContexts/UserContext9";

export const Payment = (props) => {

    <script src = "https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>

    //const [firstName, setFirstName] = useState([]);
    //const [lastName, setLastName] = useState([]);
    const [countryList, setCountryList] = useState([]);
    const [passport, setPassport] = useState([]);
    const [gender, setGender] = useState([]);
    const [date_birth, setDate_birth] = useState([]);
    //const [cardOwner, setCardOwner] = useState([])
    //const [cardNumber, setCardNumber] = useState([])
    const [expirationDate, setExpirationDate] = useState([])
    //const [securityCode, setSecurityCode] = useState([])
    const [countryList1, setCountryList1] = useState([])
    //const [billingAddress, setBillingAddress] = useState([])
    //const [city, setCity] = useState([])
    //const [postalCode, setPostalCode] = useState([])
    //const [email, setEmail] = useState([])


    const {id_user, setId_user} = useContext(UserContext);
    const {dCount, setDCount} = useContext(UserContext1)
    const {dCode, setDCode} = useContext(UserContext2);
    const {dDate, setDDate} = useContext(UserContext3);
    const {dTime, setDTime} = useContext(UserContext4);
    const {dStop, setDStop} = useContext(UserContext5);
    const {dTotal, setDTotal} = useContext(UserContext6);
    const {dFare, setDFare} = useContext(UserContext7);
    const {dTax, setDTax} = useContext(UserContext8);
    const {dCurrency, setDCurrency} = useContext(UserContext9);



    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [country_list, setCountry_list] = useState([]);
    const [countryTitle1, setCountryTitle1] = useState("Afghanistan")
    const [countryTitle2, setCountryTitle2] = useState("Afghanistan +93")
    const [countryTitle3, setCountryTitle3] = useState("Afghanistan")

    const [daySelect, setDaySelect] = useState("Day")
    const [monthSelect, setMonthSelect] = useState("Month")
    const [yearSelect, setYearSelect] = useState("Year")
    const [day, setDay] = useState([]);
    const [month, setMonth] = useState([]);
    const [year, setYear] = useState([]);
    const [yearE, setYearE] = useState([]);

    const [monthExpiration, setMonthExpiration] = useState("Month");
    const [yearExpiration, setYearExpiration] = useState("Year");

    var cn1;

    const [confirmationNumber, setConfirmationNumber] = useState([]);

    const [paymentInfo, setPaymentInfo] = useState({
        firstName: "",
        lastName: "",
        phoneNumber: "",
        cardOwner: "",
        cardNumber: "",
        securityCode: "",
        billingAddress: "",
        city: "",
        postalCode: "",
        email: ""
      })

      const {firstName, lastName, phoneNumber, cardOwner, cardNumber, securityCode, billingAddress, city, postalCode, email} = paymentInfo;


      const changeHandler = (e) => {
        setPaymentInfo({...paymentInfo, [e.target.name]: e.target.value})
      }


      const ModalContent = (e) => {
            return (
                <Modal  show={show} 
                onHide={handleClose} 
                aria-labelledby="contained-modal-title-vcenter"
                centered
                backdrop="static"
                keyboard={false}
                >
                    <center>
                        <Modal.Header closeButton>
                            <Modal.Title>Confirmation</Modal.Title>
                        </Modal.Header>
                        
                        <Modal.Body>
                            <div>
                                An email confirmation has been sent to {email}
                            </div>
                            
                        </Modal.Body>
                        
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose} as={Link} to={"/flightdetail"}>
                                Close
                            </Button>

                        </Modal.Footer>
                    </center>

                </Modal> 
            );
    }

      const completeBooking = async () => {
        //console.log(id_user);
        // console.log(firstName);
        // console.log(lastName);
        // console.log(phoneNumber);
        // console.log(cardOwner);
        // console.log(cardNumber);
        // console.log(securityCode);
        // console.log(billingAddress);
        // console.log(city);
        // console.log(postalCode);
        // console.log(email);
        // console.log("gender is " + gender)

        var date1 = yearSelect+"-"+monthSelect+"-"+daySelect;
        var expDate = monthExpiration+"-"+yearExpiration;
        var user_id = parseInt(id_user);

        console.log("user id " + user_id)

        axios.post("http://localhost:8080/insertTravelOrder", null, {params: {
                user_id,
                first_name: firstName,
                last_name: lastName,
                phone_country: countryTitle2,
                phone_number: phoneNumber,
                passport_country: countryTitle1,
                gender,
                birth_date: date1,
                travel_date: dDate,
                confirmation_email: email
        }})
        
        await new Promise(resolve => setTimeout(resolve, 1000)); // 1 sec
    
        axios.get("http://localhost:8080/getConfirmationNumber", {params: {
            user_id,
            travel_date: dDate
        }})

        .then((response) => {
            //setConfirmationNumber(json[0].confirmation_id);
            //var cn = json[0].confirmation_id;

            console.log("grrteH" + response.data);
            
            setConfirmationNumber(response.data);
            var cn = response.data;
            cn1 = cn;

            axios.post("http://localhost:8080/insertFlightOrder", null, {params: {
                user_id,
                confirmation_id: cn,
                traveler_amount: dCount,
                departure_arrival: dCode, 
                travel_date: dDate,
                currency: dCurrency,
                travel_fare: dFare,
                travel_tax: dTax,
                travel_total: dTotal,
        }})

            axios.post("http://localhost:8080/insertPaymentInfo", null, {params: {
                user_id,
                confirmation_id: cn,
                card_owner: cardOwner,
                card_number: cardNumber,
                expiration_date: expDate,
                user_country: countryTitle3,
                billing_address: billingAddress,
                city,
                postal_code: postalCode     
        }})


        emailjs.init("OY20XQyLcq_H5zJd6");

        const params = {
            sendername: "FlightinSight",
            to: email,
            subject: "Flight Confirmation",
            message:
            "Your confirmation number: " + cn + "\n" +   
            dCount + "\n" + 
            dCode + "\n" + 
            dDate + "\n" +
            dTime + "\n" +
            dStop
        }

         var serviceID = "service_sivltgb";
         var templateID = "template_hlw71e7"

         emailjs.send(serviceID, templateID, params)
         .then(res => {
         })
         .catch();


        setShow(handleShow);


        })

      }


     

    const initialRender = useRef(true);

    useEffect(() => {


        if (JSON.parse(localStorage.getItem("ID_USER"))) {
            const data = JSON.parse(localStorage.getItem("ID_USER"));
            setId_user(JSON.parse(data));
        }

        if (localStorage.getItem("DCOUNT")) {
            const dataName = localStorage.getItem("DCOUNT");
            setDCount(dataName);
        }

        if (localStorage.getItem("DCODE")) {
            const dataName = localStorage.getItem("DCODE");
            setDCode(dataName);
        }

        if (localStorage.getItem("DDATE")) {
            const dataName = localStorage.getItem("DDATE");
            setDDate(dataName);
        }
        if (localStorage.getItem("DTIME")) {
            const dataName = localStorage.getItem("DTIME");
            setDTime(dataName);
        }
        if (localStorage.getItem("DSTOP")) {
            const dataName = localStorage.getItem("DSTOP");
            setDStop(dataName);
        }
        if (localStorage.getItem("DTOTAL")) {
            const dataName = localStorage.getItem("DTOTAL");
            setDTotal(dataName);
        }
        if (localStorage.getItem("DFARE")) {
            const dataName = localStorage.getItem("DFARE");
            setDFare(dataName);
        }
        if (localStorage.getItem("DTAX")) {
            const dataName = localStorage.getItem("DTAX");
            setDTax(dataName);
        }

        if (localStorage.getItem("DCURRENCY")) {
            const dataName = localStorage.getItem("DCURRENCY");
            setDCurrency(dataName);
        }

    }, [])



    useEffect(() => {

        if (initialRender.current) {
            initialRender.current=false;
            return;
        }
    
        window.localStorage.setItem('ID_USER', JSON.stringify(id_user))
        window.localStorage.setItem('DCOUNT', dCount)
        window.localStorage.setItem('DCODE', dCode)
        window.localStorage.setItem('DDATE', dDate)
        window.localStorage.setItem('DTIME', dTime)
        window.localStorage.setItem('DSTOP', dStop)
        window.localStorage.setItem('DTOTAL', dTotal)
        window.localStorage.setItem('DFARE', dFare)
        window.localStorage.setItem('DTAX', dTax)
        window.localStorage.setItem('DCURRENCY', dCurrency)

    

        fetch(`http://localhost:8080/fetchCountryList`)
        .then((response) => response.json())
        .then((json) => {
            setCountry_list(json);
          
        })

        fetch(`http://localhost:8080/fetchDayList`)
        .then((response) => response.json())
        .then((json) => {
            setDay(json);
          
        })

        fetch(`http://localhost:8080/fetchMonthList`)
        .then((response) => response.json())
        .then((json) => {
            setMonth(json);
          
        })

        fetch(`http://localhost:8080/fetchYearList`)
        .then((response) => response.json())
        .then((json) => {
            setYear(json);
          
        })

        fetch(`http://localhost:8080/fetchExpirationYearList`)
        .then((response) => response.json())
        .then((json) => {
            setYearE(json);
          
        })

    
    }, [id_user], [dCount], [dCode], [dDate], [dTime], [dStop], [dTotal], [dFare], [dTax], [dCurrency]);
    

    
      const logout = () => {
        localStorage.removeItem('ID_USER')
        localStorage.removeItem('DCOUNT')
        localStorage.removeItem('DCODE')
        localStorage.removeItem('DDATE')
        localStorage.removeItem('DTIME')
        localStorage.removeItem('DSTOP')
        localStorage.removeItem('DTOTAL')
        localStorage.removeItem('DFARE')
        localStorage.removeItem('DTAX')
        localStorage.removeItem('DCURRENCY')
      }

    return (
        <div>
            {show ? <ModalContent/> : null}


        <div>
        <Navbar bg="dark" variant="dark" expand="lg">
                <Nav className="me-auto">
                    <Nav.Item>
                        <Navbar.Brand as={Link} to={"/flightdetail"}>Flights</Navbar.Brand>
                    </Nav.Item>

                
                </Nav>

                <Nav>
                    <Nav.Item className="ml-auto">
                        <Nav.Link onClick={logout} as={Link} to={"/"}>Logout</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar>
            </div>

            <div style={{display: 'inline-flex', marginLeft: '32%'}}>
            <div style={{backgroundColor: 'lightgrey', width: "630px", height: "600px", marginTop: '2%', marginLeft: 'auto', marginRight: "auto"}}>
                <div style={{marginLeft: '2%', marginTop: '2%', fontWeight: 'bold'}}>
                    Who's Travelling?

                </div>

                <div style = {{width: '30%', paddingLeft: '3%', paddingTop: '3%', display: "inline-block"}}>  
                    <a>
                        First name
                    </a>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Control
                            type={"text"}
                            name="firstName"
                            value={firstName}
                            onChange={changeHandler}
                            />
                        </Form.Group>
                    </Form>
                </div>

                

                <div style = {{width: '30%', paddingLeft: '3%', paddingTop: '3%', display: "inline-block"}}>  
                    <a>
                        Last name
                    </a>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Control
                            type={"text"} 
                            name="lastName"
                            value={lastName}
                            onChange={changeHandler}
                            />
                        </Form.Group>
                    </Form>
                </div>

                <div style = {{width: '100%', paddingLeft: '3%', paddingTop: '2%'}}>
                    <a>
                        Country/Territory Code
                    </a>
                    <DropdownButton title={countryTitle2} variant="light">
                        <div style={{overflowY:"auto"}}>
                            {country_list.map(country => (
                            <Dropdown.Item key = {country.country_id} onClick={() => {setCountryTitle2(country.country_name + " +" + country.country_extension)}}>{country.country_name} +{country.country_extension}</Dropdown.Item>
                            ))}
                        </div>
                    </DropdownButton>
                </div>

                <div style = {{width: '90%', paddingLeft: '3%', paddingTop: '5%', display: "inline-block"}}>  
                    <a>
                        Phone number
                    </a>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Control
                            type={"text"} 
                            placeholder="In case we need to reach you" 
                            name="phoneNumber"
                            value={phoneNumber}
                            onChange={changeHandler}
                            />
                        </Form.Group>
                    </Form>
                </div>

                <div style = {{width: '100%', paddingLeft: '3%', paddingTop: '3%'}}>
                    <a>
                        Passport
                    </a>
                    <DropdownButton title={countryTitle1} variant="light">
                        <div style={{overflowY:"auto"}}>
                            {country_list.map(country => (
                            <Dropdown.Item key = {country.country_id} onClick={() => {setCountryTitle1(country.country_name)}}>{country.country_name}</Dropdown.Item>
                            ))}
                        </div>
                    </DropdownButton>
                </div>

                <div style = {{width: '100%', paddingLeft: '3%', paddingTop: '3%'}}>
                    <div style={{paddingTop: '2%'}}>
                        <a>
                            Gender
                        </a>
                    </div>
                  
                    <Form.Check
                    inline
                    label="Male"
                    type='radio'
                    name='group1'
                    onClick={() => setGender("Male")}
                
                    />
                    <Form.Check
                    inline
                    label="Female"
                    type='radio'
                    name='group1'
                    onClick={() => setGender("Female")}
                    />
                </div> 

                <div style={{width: '100%',paddingLeft: '3%', paddingTop: '3%'}}>
                    <div style={{paddingTop: '2%'}}>
                        <a>
                            Date of birth
                        </a>
                    </div>
                    
                    <div style = {{display: 'inline-block', width: '12%', paddingLeft: '0%', paddingTop: '3%'}}>
                        <DropdownButton title={daySelect} variant="light">
                            <div style={{overflowY:"scroll", height: '300px'}}>
                                {day.map(dayinfo => (
                                <Dropdown.Item key = {dayinfo.day_id} onClick={() => {setDaySelect(dayinfo.day)}}>{dayinfo.day}</Dropdown.Item>
                                ))}
                            </div>
                        </DropdownButton>
                    </div>

                    <div style = {{display: 'inline-block', width: '15%', paddingLeft: '0%', paddingTop: '3%'}}>
                        <DropdownButton title={monthSelect} variant="light">
                            <div style={{overflowY:"auto"}}>
                                {month.map(monthinfo => (
                                <Dropdown.Item key = {monthinfo.month_id} onClick={() => {setMonthSelect(monthinfo.month)}}>{monthinfo.month}</Dropdown.Item>
                                ))}
                            </div>
                        </DropdownButton>
                    </div>

                    <div style = {{display: 'inline-block', width: '15%', paddingLeft: '1%', paddingTop: '3%'}}>
                        <DropdownButton title={yearSelect} variant="light">
                            <div style={{overflowY: "scroll", height: '300px'}}>
                                {year.map(yearinfo => (
                                <Dropdown.Item key = {yearinfo.year_id} onClick={() => {setYearSelect(yearinfo.year)}}>{yearinfo.year}</Dropdown.Item>
                                ))}
                            </div>
                        </DropdownButton>
                    </div>
                </div>
                


                
            </div>
    
            <div style={{backgroundColor: 'lightgrey', width: "400px", height: "400px", marginTop: '2%', marginLeft: '5%', marginRight: "auto"}}>
                <div style={{marginLeft: '2%', marginTop: '2%', fontWeight: 'bold'}}>
                    One-way flight
                </div>
                <div style={{marginLeft: '2%'}}>
                    
                
                <div>
                    {dCount}
                </div>

                <hr></hr>

                <div>
                    {dCode}
                </div>

                <div>
                    {dDate}
                </div>

                <div>
                    {dTime}
                </div>

                <div>
                    {dStop}
                </div>

                <hr></hr>
                 
                <div>
                    Your price summary
                </div>

                <div>
                    Flight&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{dCurrency} ${dFare}
                </div>

                <div>
                    Taxes & Fees&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{dCurrency} ${dTax}
                </div>
                
                <hr></hr>

                <div>
                    &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Total: {dCurrency} ${dTotal}
                </div>
                </div>

            </div>
            </div>



            <div style={{backgroundColor: 'lightgrey', width: "600px", height: "850px", marginTop: '2%', marginLeft: 'auto', marginRight: "auto"}}>
                <div style={{marginLeft: '2%', marginTop: '2%', fontWeight: 'bold'}}>
                    How would you like to pay?
                </div>

                <div style = {{width: '90%', paddingLeft: '3%', paddingTop: '3%', display: "inline-block"}}>  
                    <a>
                        Name on the card
                    </a>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Control
                            type={"text"}
                            name="cardOwner"
                            value={cardOwner}
                            onChange={changeHandler}
                            />
                        </Form.Group>
                    </Form>
                </div>

                <div style = {{width: '60%', paddingLeft: '3%', paddingTop: '3%', display: "inline-block"}}>  
                    <a>
                        Debit/Credit card number
                    </a>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Control
                            type={"text"}
                            name="cardNumber"
                            value={cardNumber}
                            onChange={changeHandler}
                            />
                        </Form.Group>
                    </Form>
                </div>

                <div style={{width: '100%',paddingLeft: '3%', paddingTop: '1%'}}>
                    <div style={{paddingTop: '2%'}}>
                        <a>
                            Expiration date
                        </a>
                    </div>
                    
                    <div style = {{display: 'inline-block', width: '12%', paddingLeft: '0%', paddingTop: '3%'}}>
                        <DropdownButton title={monthExpiration} variant="light">
                            <div style={{overflowY:"auto"}}>
                                {month.map(monthinfo => (
                                <Dropdown.Item key = {monthinfo.month_id} onClick={() => {setMonthExpiration(monthinfo.month)}}>{monthinfo.month}</Dropdown.Item>
                                ))}
                            </div>
                        </DropdownButton>
                    </div>

                    <div style = {{display: 'inline-block', width: '25%', paddingLeft: '4%', paddingTop: '3%'}}>
                        <DropdownButton title={yearExpiration} variant="light">
                            <div style={{overflowY: "scroll", height: '300px'}}>
                                {yearE.map(yearinfo => (
                                <Dropdown.Item key = {yearinfo.year_id} onClick={() => {setYearExpiration(yearinfo.year)}}>{yearinfo.year}</Dropdown.Item>
                                ))}
                            </div>
                        </DropdownButton>
                    </div>

                </div>

                <div style = {{width: '100%', paddingLeft: '3%', paddingTop: '5%', display: "inline-block"}}>  
                    <a>
                        Security code
                    </a>
                    <Form style={{width: '15%'}}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Control
                            type={"text"}
                            name="securityCode"
                            value={securityCode}
                            onChange={changeHandler}
                            />
                        </Form.Group>
                    </Form>
                </div>
    
                
                <hr></hr>

                <div style = {{width: '100%', paddingLeft: '3%', paddingTop: '2%'}}>
                    <a>
                        Country/Territory Code
                    </a>
                    <DropdownButton title={countryTitle3} variant="light">
                        <div style={{overflowY:"auto"}}>
                            {country_list.map(country => (
                            <Dropdown.Item key = {country.country_id} onClick={() => {setCountryTitle3(country.country_name)}}>{country.country_name}</Dropdown.Item>
                            ))}
                        </div>
                    </DropdownButton>
                </div>


                <div style = {{width: '90%', paddingLeft: '3%', paddingTop: '3%', display: "inline-block"}}>  
                    <a>
                        Billing address
                    </a>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Control
                            type={"text"}
                            name="billingAddress"
                            value={billingAddress}
                            onChange={changeHandler}
                            />
                        </Form.Group>
                    </Form>
                </div>

                <div style = {{width: '100%', paddingLeft: '3%', paddingTop: '2%', display: "inline-block"}}>  
                    <a>
                        City
                    </a>
                    <Form style={{width: '45%'}}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Control
                            type={"text"}
                            name="city"
                            value={city}
                            onChange={changeHandler}
                            />
                        </Form.Group>
                    </Form>
                </div>

                <div style = {{width: '100%', paddingLeft: '3%', paddingTop: '2%', display: "inline-block"}}>  
                    <a>
                        Postal code
                    </a>
                    <Form style={{width: '35%'}}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Control
                            type={"text"}
                            name="postalCode"
                            value={postalCode}
                            onChange={changeHandler}
                            />
                        </Form.Group>
                    </Form>
                </div>
                

            </div>

            <div style={{backgroundColor: 'lightgrey', width: "600px", height: "175px" ,marginTop: '2%', marginLeft: 'auto', marginRight: "auto", marginBottom: '2%'}}>
                <div style={{marginLeft: '2%', marginTop: '2%', fontWeight: 'bold'}}>
                    Confirmation
                </div>

                <div style={{marginLeft: '2%', marginTop: '2%'}}>
                    Please enter the email address where you would like to receive your confirmation.
                </div>

                <div style = {{width: '90%', paddingLeft: '3%', paddingTop: '3%', display: "inline-block"}}>  
                    <a>
                        Email address
                    </a>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Control
                            type={"email"}
                            name="email"
                            value={email}
                            onChange={changeHandler}
                            />
                        </Form.Group>
                    </Form>
                </div>
            </div>

              
            <div style={{paddingLeft: '32%', width: '100%', paddingBottom: '2%', display: "inline-block"}}>
            <Button style={{width: '20%', height: '60px'}} variant="primary" onClick={() => {completeBooking()}}>Complete booking</Button>
            </div>
              

        </div>

    );

}
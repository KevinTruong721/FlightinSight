import React, {useContext, useState, useEffect, useRef} from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.css';
import Dropdown from 'react-bootstrap/Dropdown';
import axios from "axios";

import Toast from 'react-bootstrap/Toast';
import Table from 'react-bootstrap/Table';
import DropdownButton from 'react-bootstrap/DropdownButton';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import {Link, useNavigate} from 'react-router-dom';

import { UserContext } from "./UserContexts/UserContext";
import { UserContext1 } from "./UserContexts/UserContext1";
import { UserContext2 } from "./UserContexts/UserContext2";
import { UserContext3 } from "./UserContexts/UserContext3";
import { UserContext4 } from "./UserContexts/UserContext4";
import { UserContext5 } from "./UserContexts/UserContext5";
import { UserContext6 } from "./UserContexts/UserContext6";
import { UserContext7 } from "./UserContexts/UserContext7";
import { UserContext8 } from "./UserContexts/UserContext8";
import { UserContext9 } from "./UserContexts/UserContext9";

//https://stackoverflow.com/questions/66399129/using-usestate-to-store-state-for-an-array-of-objects
//https://stackoverflow.com/questions/68075223/how-to-map-through-the-json-array-of-objects-in-react
//https://www.youtube.com/watch?v=x7niho285qs

import testjson from "./testjson.json"
import flightTest from "./flightTest.json"
import flightTest1 from "./flightTest1.json"


export const FlightDetail = () => {


  const [data, setData] = useState([]);
  const [price, setPrice] = useState([]);
  const [flightPrice, setFlightPrice] = useState([])
  const [taxFees, setTaxFees] = useState([])
  const [connectionCount, setConnectionCount] = useState([]);
  const [airlineName, setAirlineName] = useState([]);
  const [departureCode, setDepartureCode] = useState([]);
  const [departureCity, setDepartureCity] = useState([]);
  const [departureTime, setDepartureTime] = useState([]);

  const [arrivalCode, setArrivalCode] = useState([]);
  const [arrivalCity, setArrivalCity] = useState([]);
  const [arrivalTime, setArrivalTime] = useState([]);
  const [currency, setCurrency] = useState([]);
  const [duration, setDuration] = useState([]);

  const [classData, setClassData] = useState([]);
  const [classTitle, setClassTitle] = useState("Economy");
  const [classId, setClassId] = useState([]);


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



  const [iata, setIata] = useState([]);

  const navigate = useNavigate();

  var today = new Date();
  var dd = String(today.getDate() + 1).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0');
  var yyyy = today.getFullYear();

  today = yyyy + '-' + mm + '-' + dd;

  const [searchInfo, setSearchInfo] = useState({
    searchFrom: "",
    searchTo: "",
    searchDate: today,

  })

  const [adultCount, setAdultCount] = useState(1);
  const [childrenCount, setChildrenCount] = useState(0);
  const [travellerCount, setTravellerCount] = useState(1);

  const {searchFrom, searchTo, searchDate} = searchInfo;

  const changeHandler = (e) => {
    setSearchInfo({...searchInfo, [e.target.name]: e.target.value})
  }

  const adultincrementCounter = () => {
    setAdultCount(adultCount+1);
    setTravellerCount(travellerCount+1);

  }

  const adultdecrementCounter = () => {
    if (adultCount <= 1) {
      setAdultCount(1);
      setTravellerCount(1);
    }
    else {
      setAdultCount(adultCount-1);
      setTravellerCount(travellerCount-1);
    }
  }


  const childrenincrementCounter = () => {
    setChildrenCount(childrenCount+1);
    setTravellerCount(travellerCount+1);
  }

  const childrendecrementCounter = () => {
    if (childrenCount <= 0) {
      setChildrenCount(0);
      
    }
    else {
      setChildrenCount(childrenCount-1);
      setTravellerCount(travellerCount-1)
    }
  }

  function searchButton() {

    var className;

    if (classId === 1) {
      className = "economy"
    }

    else if (classId === 2) {
      className = "premium"
    }

    else if (classId === 3) {
      className = "business"
    }

    else {
      className = "first";
    }
   
  const url = 'https://priceline-com-provider.p.rapidapi.com/v2/flight/roundTrip?sid=iSiX639&adults='+adultCount+'&departure_date='+searchDate+'&destination_airport_code='+searchTo+'&cabin_class='+className+'&origin_airport_code='+searchFrom+'&children='+childrenCount+'';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'b032000ef0mshd7a8d8f9d3cead0p1ba251jsncfbdc7446d68',
        'X-RapidAPI-Host': 'priceline-com-provider.p.rapidapi.com'
      }
    };
 

      fetch(url, options)
      .then((response) => response.json())
      .then((json) => {
        //console.log(json);

         for (const key in json.getAirFlightRoundTrip.results.result.itinerary_data) {
      if (json.getAirFlightRoundTrip.results.result.itinerary_data.hasOwnProperty(key)) {
        const priceDetails = json.getAirFlightRoundTrip.results.result.itinerary_data[key].price_details;
        const total_fare = priceDetails.display_total_fare;
        const currency_type = priceDetails.display_currency;

        const base = priceDetails.display_base_fare;
        const taxes = priceDetails.display_taxes_and_fees;

        const connection_count = json.getAirFlightRoundTrip.results.result.itinerary_data[key].slice_data.slice_0.info.connection_count;
        const duration_time = json.getAirFlightRoundTrip.results.result.itinerary_data[key].slice_data.slice_0.info.duration;



        const airline = json.getAirFlightRoundTrip.results.result.itinerary_data[key].slice_data.slice_0.airline.name;

        const departure_code = json.getAirFlightRoundTrip.results.result.itinerary_data[key].slice_data.slice_0.departure.airport.code;
        const departure_city = json.getAirFlightRoundTrip.results.result.itinerary_data[key].slice_data.slice_0.departure.airport.city;
        const departure_time = json.getAirFlightRoundTrip.results.result.itinerary_data[key].slice_data.slice_0.departure.datetime.time_12h;

        const arrival_code = json.getAirFlightRoundTrip.results.result.itinerary_data[key].slice_data.slice_0.arrival.airport.code;
        const arrival_city = json.getAirFlightRoundTrip.results.result.itinerary_data[key].slice_data.slice_0.arrival.airport.city;
        const arrival_time = json.getAirFlightRoundTrip.results.result.itinerary_data[key].slice_data.slice_0.arrival.datetime.time_12h;
        




        setPrice(prevCounts => ({
          ...prevCounts,
          [key]: total_fare,
        }));

        setFlightPrice(prevCounts => ({
          ...prevCounts,
          [key]: base,
        }));


        setTaxFees(prevCounts => ({
          ...prevCounts,
          [key]: taxes,
        }));


        setCurrency(prevCounts => ({
          ...prevCounts,
          [key]: currency_type,
        }));
  
        setConnectionCount(prevCounts => ({
          ...prevCounts,
          [key]: connection_count,
        }));

        setDuration(prevCounts => ({
          ...prevCounts,
          [key]: duration_time,
        }));


  
        setAirlineName(prevCounts => ({
          ...prevCounts,
          [key]: airline,
        }));

        setDepartureCode(prevCounts => ({
          ...prevCounts,
          [key]: departure_code,
        }));

        setDepartureCity(prevCounts => ({
          ...prevCounts,
          [key]: departure_city,
        }));

        setDepartureTime(prevCounts => ({
          ...prevCounts,
          [key]: departure_time,
        }));

        setArrivalCode(prevCounts => ({
          ...prevCounts,
          [key]: arrival_code,
        }));

        setArrivalCity(prevCounts => ({
          ...prevCounts,
          [key]: arrival_city,
        }));

        setArrivalTime(prevCounts => ({
          ...prevCounts,
          [key]: arrival_time,
        }));
        


      
        }
      }
        
      });

    // console.log("class name " + className);
    // console.log("counter update is " + adultCount )
    // console.log("children count is " + childrenCount)
    // console.log("leaving from " + searchFrom);
    // console.log("going to " + searchTo);
    // console.log("date " + searchDate);


  }

  const initialRender = useRef(true);


  useEffect(() => {

    localStorage.removeItem('DCOUNT')
    localStorage.removeItem('DCODE')
    localStorage.removeItem('DDATE')
    localStorage.removeItem('DTIME')
    localStorage.removeItem('DSTOP')
    localStorage.removeItem('DTOTAL')
    localStorage.removeItem('DFARE')
    localStorage.removeItem('DTAX')
    localStorage.removeItem('DCURRENCY')
  

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


    fetch(`http://localhost:8080/fetchClassData`)
    .then((response) => response.json())
    .then((json) => {

        setClassData(json);
      
    })



    
    // fetch(`http://localhost:8080/fetchIata`)
    // .then((response) => response.json())
    // .then((json) => {
    //     console.log(json)
      
    // })

    

    
    

  }, []);

 
  const removeContext = () => {
    window.location.reload();
  }

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

  const currentInfo = (total_price,
    flight_price,
    tax_fees,
    departure_city,
    departure_code,
    arrival_city,
    arrival_code,
    airline_name,
    departure_time,
    arrival_time,
    duration,
    connectionCount,
    currency
    ) => {
    
    var ticket_count = travellerCount + ' ticket: ' + adultCount + ' adult and ' + childrenCount + ' children'
    var flight_date = searchDate;
    var city_code = departure_city + ' (' + departure_code + ')' + ' to ' +  arrival_city + ' (' + arrival_code + ')'
    var flight_time = departure_time + ' - ' + arrival_time + ' (' + duration + ')'  
    var connect = connectionCount + ' stop'
    
    // console.log(ticket_count);
    // console.log(city_code);
    // console.log(flight_date);
    // console.log(flight_time);
    // console.log(connect);
    // console.log(total_price);
    // console.log(flight_price);
    // console.log(tax_fees);
    // console.log(currency);

    setDCount(ticket_count);
    setDCode(city_code);
    setDDate(flight_date);
    setDTime(flight_time);
    setDStop(connect);
    setDTotal(total_price);
    setDFare(flight_price);
    setDTax(tax_fees);
    setDCurrency(currency);

    navigate('/Payment');

  }
  

  return (
    <>
      <div>

        <div>
        <Navbar bg="dark" variant="dark" expand="lg">
                <Nav className="me-auto">
                    <Nav.Item>
                        <Navbar.Brand onClick={removeContext} as={Link} to={"/flightdetail"}>Flights</Navbar.Brand>
                    </Nav.Item>

                
                </Nav>

                <Nav>
                    <Nav.Item className="ml-auto">
                        <Nav.Link onClick={logout} as={Link} to={"/"}>Logout</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar>

        </div>

        <div style={{paddingLeft: '10%'}}>
          <div style = {{width: '20%', paddingLeft: '3%', paddingTop: '3%', display: "inline-block"}}>  
            <Form>
              
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                      <Form.Control
                        
                          type={"text"} 
                          placeholder="Leaving from" 
                          name="searchFrom" 
                          value = {searchFrom} 
                          onChange={changeHandler}
                          
                        />
                  </Form.Group>
            </Form>
          </div>

          <div style = {{width: '20%', paddingLeft: '1%', paddingTop: '3%', display: "inline-block"}}>  
            <Form>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                      <Form.Control
                          type={"text"} 
                          placeholder="Going to" 
                          name="searchTo" 
                          value = {searchTo} 
                          onChange={changeHandler}
                        />
                  </Form.Group>
            </Form>
          </div>

          <div style={{paddingLeft: '1%', width: '15%', display: "inline-block"}}>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Control
                        type="date"
                        autoFocus
                        name="searchDate"
                        min={new Date().toISOString().split("T")[0]}
                        value = {searchDate}
                        onChange = {changeHandler}
                    />
                </Form.Group>
            </Form>
          </div>


          <div style={{paddingLeft: '2%', width: '5%', display: "inline-block"}}>
            <Dropdown>
              <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
                {travellerCount} Travellers
              </Dropdown.Toggle>

              <Dropdown.Menu>
                
                  <div> 
                  Adults
                  <Button style={{marginLeft: '18px'}} variant="outline-primary" onClick={adultdecrementCounter}>-</Button>
                  {adultCount}
                  <Button variant="outline-primary" onClick={adultincrementCounter}>+</Button>
                  </div>

                  <div>
                    Children
                    <Button style={{marginLeft: '5px'}} variant="outline-primary" onClick={childrendecrementCounter}>-</Button>
                    {childrenCount}
                    <Button variant="outline-primary" onClick={childrenincrementCounter}>+</Button>
                  </div>
                  
                
              </Dropdown.Menu>
            </Dropdown>
          </div>

          <div style={{paddingLeft: '7%', paddingRight: '8%', width: '5%', display: "inline-block"}}>
            <DropdownButton title={classTitle} variant="outline-dark">
              <div style={{overflowY:"auto"}}>
                {classData.map(class_data => (
                  <Dropdown.Item key = {class_data.class_id} onClick={() => {setClassTitle(class_data.class_name) ; setClassId(class_data.class_id)}}>{class_data.class_name}</Dropdown.Item>
               ))}
              </div>
           </DropdownButton>

          </div>


          <div style={{paddingLeft: '5%', width: '2%', display: "inline-block"}}>
            <Button variant="primary" onClick={searchButton}>Search</Button>
          </div>
        </div>

        <div  style = {{width: '70%', marginLeft: 'auto', marginRight: 'auto', paddingTop: '3%'}}>
                <Table striped bordered hover >
                
                    <tbody>
                      {Object.keys(price).map(key => (
                        <tr key={key}>
                            <td style = {{width: '10%'}}>
                              <div>
                                <div style={{display: "inline-block", float: 'left'}}>{departureTime[key]} - {arrivalTime[key]}</div>
                                <div style={{display: "inline-block", marginLeft: '30%'}}>{duration[key]} {'('} {connectionCount[key]} stop {')'} </div>
                                <Button variant= "outline-dark" style={{display: "inline-block", float: 'right'}} onClick={(e) => currentInfo(
                                    price[key],
                                    flightPrice[key],
                                    taxFees[key],
                                    departureCity[key],
                                    departureCode[key],
                                    arrivalCity[key],
                                    arrivalCode[key],
                                    airlineName[key],
                                    departureTime[key],
                                    arrivalTime[key],
                                    duration[key],
                                    connectionCount[key],
                                    currency[key]

                                  
                                  )}> {'>'} </Button>
                                <div style={{display: "inline-block", float: 'right', fontWeight: "bold", fontSize: "110%", paddingRight: '5%'}}>{currency[key]} ${price[key]}</div>
                              
                              </div>

                              <div style={{float: 'left'}}>
                                <div>
                                  <div style={{display: "inline-block", float: 'left', paddingTop: '5%'}}>{departureCity[key]} {departureCode[key]} - {arrivalCity[key]} {arrivalCode[key]}</div>
                                </div>

                                <div >
                                  <div style={{display: "inline-block", float: 'left', paddingTop: '5%'}}>{airlineName[key]}  </div>
                                </div>
                              </div>

                            </td>
                        </tr>
                      ))}
                    </tbody>
                </Table>
            </div>

      </div>
    </>
  )
}
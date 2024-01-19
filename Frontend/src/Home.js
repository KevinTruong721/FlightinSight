import React from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.css';

import {Link, useNavigate} from 'react-router-dom';

import "./Homepage.css";

import Button from 'react-bootstrap/Button';

export const Home = () => {

  const navigate = useNavigate();

  const login = () => {
    navigate('/login');
  }


  return (
      <div>
         <div>
        <Navbar style={{fontWeight: 'bold'}} bg="white" variant="black" expand="lg">
                <Nav className="me-auto">
                    <Nav.Item>
                        <Navbar.Brand  as={Link} to={"/"}>FlightInSight</Navbar.Brand>
                    </Nav.Item>
                </Nav>

                <Nav>
                    <Nav.Item className="ml-auto">
                        <Nav.Link as={Link} to={"/login"}>Login</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar>

        </div>

        

        <div className="homecontainer"> 
        <div className="box">
        <h1 className="hometext"> All your flights, in one easy to reach place. </h1>  
         <Button className="homepagebutton" variant="primary" size="lg" onClick={login}>
            View Flights Now
          </Button>     
        </div>

        

        </div>

        

      </div>
  
  )
}


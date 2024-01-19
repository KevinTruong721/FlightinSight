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

export const UserManagement = (props) => {
    const navigate = useNavigate();

    const [userList, setUserList] = useState([]);
    const {id_user, setId_user} = useContext(UserContext);

    useEffect(() => {

        localStorage.removeItem('ID_USER');

        fetch(`http://localhost:8080/fetchUserList`)
        .then((response) => response.json())
        .then((json) => {

            console.log(json)
            setUserList(json);
    
        })

        .catch((err) => {
            console.log(err.message);
        })

    },[])

    const logout =() => {

        localStorage.removeItem('ID_USER')
        navigate('/login')
    }

    const userDetails = (userId) => {
        setId_user(userId);
        window.localStorage.setItem('ID_USER', JSON.stringify(id_user))
        navigate('/UserDetail');
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

            <div style = {{width: '50%', marginLeft: 'auto', marginRight: 'auto', paddingTop: '3%'}}>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th hidden={true}>ID</th>
                        <th>Email Address</th>
                        <th hidden={true}>Password</th>
                        <th>Role</th>
                        <th>User Details</th>
                    </tr>
                </thead>
              
                <tbody>
                    {userList.map(item =>
                        <tr key={item.user_id}>
                            <td hidden={true}>{item.user_id}</td>
                            <td>{item.user_email} {item.user_email}</td>
                            <td hidden={true}>{item.user_password}</td>
                            <td >{item.role}</td>
                            <td style={{width: '30%'}}>
                                <Button onClick={(e) => userDetails(item.user_id)}>View User Details</Button>
                            </td>
                        
                        </tr>
                    )}
                </tbody>
            </Table>
            </div>

        </div>

    );
}
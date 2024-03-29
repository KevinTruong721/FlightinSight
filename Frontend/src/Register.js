import React, {useContext, useState, useEffect, useRef} from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.css';
import axios from "axios";
import {useNavigate} from "react-router-dom";
import Toast from 'react-bootstrap/Toast';


export const Register = (props) => {

    const navigate = useNavigate();

    const effectRan = useRef(false);

    const [showA, setShowA] = useState(false);
    const [showB, setShowB] = useState(false);
    const [showC, setShowC] = useState(false);

    const toggleShowA = () => setShowA(!showA);
    const toggleShowB = () => setShowB(!showB);
    const toggleShowC = () => setShowB(!showC);

    const[user, setUser] = useState({
        user_email: "",
        user_password: "",
    })


    const {user_email, user_password} = user;

    useEffect(() => {
        const timer = setTimeout(() => {
          setShowA(false);
        }, 3000);

        return () => clearTimeout(timer);
    });  

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowB(false);
        }, 3000);
        return () => clearTimeout(timer);
    })

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowC(false);
        }, 3000);
        return () => clearTimeout(timer);
    })



    const changeHandler = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }


    const handleRegister = async (e) => {

        let regEmail = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;

        if (user_email === "" || user_password === "") {
            setShowA(true);
        }

        else if(!regEmail.test(user_email)){
          setShowC(true);
        }

        else {
            await axios.post("http://localhost:8080/addUser", null, {params: {
                user_email,
                user_password
            }})
                navigate('/login')
            
        }
    } 

    const loginPage = async(e) => {
        e.preventDefault();
        navigate('/login')
    }

    return (
        <div>
            <div>
                <center>
                    <Toast show={showA} onClose={toggleShowA} bg='danger'>
                        <Toast.Header>
                            <img className="rounded me-2" alt="" />
                            <strong className="me-auto">Field(s) are missing. Please fill in all fields</strong>
                        </Toast.Header>
                    </Toast>
                </center>
            </div>

            <div>
                <center>
                    <Toast show={showB} onClose={toggleShowB} bg='danger'>
                        <Toast.Header>
                            <img className="rounded me-2" alt="" />
                            <strong className="me-auto">Account already exists. Please try again</strong>
                        </Toast.Header>
                    </Toast>
                </center>
            </div>

            <div>
                <center>
                    <Toast show={showC} onClose={toggleShowC} bg='danger'>
                        <Toast.Header>
                            <img className="rounded me-2" alt="" />
                            <strong className="me-auto">Invalid email address. Please try again</strong>
                        </Toast.Header>
                    </Toast>
                </center>
            </div>

            <div style={{paddingTop: '2%'}}>
                <center>
                    <h1>FlightInSight</h1>
                </center>
            </div>

            <Form>
                <div style = {{width: '25%', marginLeft: 'auto', marginRight: 'auto', paddingTop: '3%'}}>
                    <label htmlFor="email">Email address</label>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control
                                type={"email"} 
                                placeholder="Enter email" 
                                name="user_email" 
                                value = {user_email} 
                                onChange={changeHandler}
                            />
                    </Form.Group>
                </div>

                <div style = {{width: '25%', marginLeft: 'auto', marginRight: 'auto', paddingTop: '1%'}}>
                    <label htmlFor="password">Password</label>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control
                                type={"password"} 
                                placeholder="************" 
                                name = "user_password" 
                                value = {user_password} 
                                onChange={changeHandler}
                            />
                    </Form.Group>
                </div>

                <div style = {{display: 'flex', alignItems: 'center', justifyContent: 'center',margin: 'auto', paddingTop: '1%'}}>
                    <div>
                        <Button variant="primary" onClick={handleRegister}>Register</Button>
                    </div>
                </div>
            </Form>

            <div style = {{display: 'flex', alignItems: 'center', justifyContent: 'center',margin: 'auto', paddingTop: '1%'}}>
                <Button variant="secondary" onClick={loginPage}>Already have an account? Sign in here!</Button>
            </div>
        </div>        
    )
}
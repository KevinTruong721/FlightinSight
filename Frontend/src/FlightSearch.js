import React, {useContext, useState, useEffect, useRef} from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.css';
import axios from "axios";
import {useNavigate} from "react-router-dom";
import Toast from 'react-bootstrap/Toast';

import flightTest from './flightTest.json';

import Table from 'react-bootstrap/Table';

export const FlightSearch = (props) => {

    const initialRender = useRef(true);

    const [currency, setCurrency] = useState([]);

    useEffect(() => {

        if (initialRender.current) {
            initialRender.current=false;
            return;
        }

        setCurrency(flightTest.results.totals.total);

        console.log("the total is " + currency);
    }, [])

    return (
        <div>
            {/* <div  style = {{width: '50%', marginLeft: 'auto', marginRight: 'auto'}}>
                <Table className="text-center" striped bordered hover >
                    <thead>
                        <tr>
                            <th hidden={true}>ID</th>
                            <th>Ticker Symbol</th>
                            <th style = {{width: '20%'}}>Delete row</th>
                        </tr>
                    </thead>
                
                    <tbody>
                        {ticker_s.map((item) =>
                            <tr key={item.ticker_symbol}>
                                <td hidden={true}>{item.user_id}</td>
                                <td >{item.ticker_symbol}</td>
                                <td>
                                  
                                </td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            </div> */}

        </div>
    )


}
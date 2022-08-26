import React from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import { Link } from "react-router-dom";
import './style.css';

function Add() {

    const navigate = useNavigate();

    const handleSubmit = (e) =>{
        e.preventDefault();
        const data = {
            first_name: e.target.first_name.value,
            last_name: e.target.last_name.value,
            email: e.target.email.value
        }

        axios.post("http://localhost:1313/users",data)
        .then(res=>navigate("/"))
    }

    return (
        <div className='edit'>
            <form onSubmit={handleSubmit}>
                <input className='input' type="text" name='first_name' placeholder='First name'/> <br/>
                <input className='input' type="text" name='last_name' placeholder='Last name'/> <br/>
                <input className='input' type="email" name='email' placeholder='Email'/> <br/>
                <input className='submit' type="submit" />
                <Link className='link' to="/">Go Back</Link>
            </form>
        </div>
    );
};

export default Add;
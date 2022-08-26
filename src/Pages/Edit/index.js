import React, { useState,useEffect } from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import axios from 'axios';
import { Link } from "react-router-dom";
import './style.css';

function Edit() {

    const location = useLocation();    
    const [data, setData] = useState(undefined);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:1313/users/"+location.state)
        .then(res => 
            setData(res.data))
    }, [])
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        const data = {
            first_name: e.target.first_name.value,
            last_name: e.target.last_name.value,
            email: e.target.email.value
        }

        axios.put("http://localhost:1313/users/"+location.state,data)
        .then(res=>navigate("/"))
    }


    return (
        <div className='edit'>
            {!data?"Loading...":
                <form onSubmit={handleSubmit}>
                    <input className='input' type="text" defaultValue={data.first_name} name='first_name' placeholder='First name'/> <br/>
                    <input className='input' type="text" defaultValue={data.last_name} name='last_name' placeholder='Last name'/> <br/>
                    <input className='input' type="email" defaultValue={data.email} name='email' placeholder='Email'/> <br/>
                    <input className='submit' type="submit" />
                    <Link className='link' to="/">Go Back</Link>
                </form>
            }
        </div>
    );
};

export default Edit;
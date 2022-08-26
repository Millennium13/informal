import React,{useEffect,useState} from 'react';
import axios from 'axios';
import {Link, useLocation} from 'react-router-dom';
import './style.css';

function View() {

    const [data, setData] = useState(undefined);
    const location = useLocation();

    useEffect(() => {
        axios.get("http://localhost:1313/users/"+location.state)
        .then(res => setData(res.data));
    })

    return (
        <div>
            {!data?"Loading...":
                <div className='edit'>
                    <h1 className='infos'>Id: {data.id}</h1>
                    <h1 className='infos'>First name: {data.first_name}</h1>
                    <h1 className='infos'>Last name: {data.last_name}</h1>
                    <h1 className='infos'>Email: {data.email}</h1>
                    <Link className='link' to="/">Go Back</Link>
                </div>
            }
        </div>
    );
};

export default View;
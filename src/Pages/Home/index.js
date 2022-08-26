import React, { useEffect,useState } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import './style.css'

function Home() {

    const [malumot, setMalumot] = useState([]);
    const [render, setRender] = useState(false);
    const url = "http://localhost:1313/users"

    useEffect(() => {
        axios.get(url)
        .then((res) => {
            setMalumot(res.data);
        }) .catch(e=>console.log(e));
    }, [render]);

    const handleDelete = (id) => {

        const result = window.confirm("Haqiqattan o'chirib yubormoqchimisiz?")
        
        if(result){
            axios.delete(url+"/"+id).then(res=>setRender(!render))
        }        
    }

    return (
        <div className='table'>
            <Link className='inc' to="Add">Increment</Link>
            <table width="95%" cellSpacing={0}>
                <thead>
                    <tr className='tr'>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email Address</th>
                        <th style={{textAlign:'center'}}>Edit</th>
                        <th style={{textAlign:'center'}}>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {malumot.map((val, index) => {
                        return(
                        <tr className='tr_1' key={index}>
                            <td>{index+1}</td>
                            <td className='first'><Link className='first_1' to="view" state={val.id}>{val.first_name}</Link></td>
                            <td>{val.last_name}</td>
                            <td>{val.email}</td>
                            <td className='td_edit'><Link className='edit_1' to="/edit" state={val.id}>Edit</Link></td>
                            <td className='td_btn'><button className='btn' onClick={() => handleDelete(val.id)}>Delete</button> </td>
                        </tr>
                    )
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default Home;
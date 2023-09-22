import React, { useContext } from 'react';
import './user.css'
import { usersContext } from '../App';
const User = ({user}) => {
    const {users,setUsers} = useContext(usersContext);
    const {name,email,id,phone,company} =user;


    const handleUserId =(id)=>{
        const deleteUser =users.filter(user => user.id !==id);
        setUsers(deleteUser);
    }
    
    return (
        <div className='user'>
            <h1>Name : {name}</h1>
            <p>Company Name : {company}</p>
            <p>E-mail address : {email}</p>
            <p>Phone Number : {phone}</p>
            <button onClick={()=>handleUserId(id)}>Delete</button>
        </div>
    );
};

export default User;
import React, { useContext } from 'react';
import './users.css'
import User from './User'
import { usersContext } from '../App';

const Users = ({handleUserId}) => {

    const {users} = useContext(usersContext)

    return (
        <div className='users'>
            {
                users.map(user=><User key={user.id} user ={user} ></User>)
            }
        </div>
    );
};

export default Users;
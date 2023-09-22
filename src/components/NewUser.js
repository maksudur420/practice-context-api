import React, { useContext, useState } from 'react';
import { usersContext } from '../App';

const NewUser = () => {
    const {users,setUsers} =useContext(usersContext)

    const [formData,setFormData] =useState({name:"",company:"",email:"",phone:""})
    

    const handleInputChange = (event) => {
        const { name, value } = event.target;
    
        // Use the spread operator to create a copy of the formData object
        // and update the specific field with the new value
        setFormData({...formData,
            [name]: value,
          } 
        );
        
      };

    const handleSubmit =(e)=>{
        e.preventDefault();
        setFormData({name:"",company:"",email:"",phone:""});
        setUsers([...users,formData])
      }

    return (
        <div>
            <form action="" onSubmit={handleSubmit} method="post">
                <label htmlFor="name">
                    Name : <input type="text" name="name" id="name" onChange={handleInputChange} value={formData.name} />
                </label>
                <label htmlFor="company">
                    Company : <input type="text" name="company" id="company" onChange={handleInputChange} value={formData.company}  />
                </label>
                <label htmlFor="email">
                    Email : <input type="email" name="email" id="email" onChange={handleInputChange} value={formData.email} />
                </label>
                <label htmlFor="phone">
                    Phone : <input type="number" name="phone" id="phone" onChange={handleInputChange} value={formData.phone}  />
                </label>
                <label htmlFor="submit">
                    <input type="submit" name="submit" id="submit"  />
                </label>
            </form>
        </div>
    );
};

export default NewUser;
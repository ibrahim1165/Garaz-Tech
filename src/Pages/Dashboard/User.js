import React from 'react';
import { toast } from 'react-toastify';

const User = ({user,refetch}) => {
    const {email,role} = user;
    const makeAdmin =()=>{
        fetch(`https://garaz-tech.onrender.com/user/admin/${email}`,{
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res=>{
            if(res.status === 403){
                toast.error('Failed to Make an admin');
            } return res.json()
        })
        
        .then(data=>{
            if (data.modifiedCount > 0) {
                toast.success(`Successfully made an admin`);
            }
            console.log(data)
            refetch()
        })

    }
    return (
        <tr>
            <th>1</th>
            <td>{email}</td>
            <td>{role !== 'admin' && <button onClick={makeAdmin} class="btn btn-xs">Make Admin</button>}</td>
            <td><button class="btn btn-xs">Remove User</button></td>
        </tr>
    );
};

export default User;
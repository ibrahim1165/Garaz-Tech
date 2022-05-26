import React from 'react';

const MyorderData = ({ order,index , DeleteBtn}) => {
    const { address, email, phone, quantity, service,_id } = order
    return (
             <tr>
                <th>{index+1}</th>
                <td>{service}</td>
                <td> {email}</td>
                <td>{phone}</td>
                <td> {quantity}</td>
                <td> {address}</td>
                <td> <button className="btn btn-outline btn-warning btn-sm" onClick={()=> DeleteBtn(order._id)}>Delete</button></td>

            </tr>
    );
};

export default MyorderData;
import React from 'react';

const AlOrderDisplay = ({ order,index }) => {
    const { address, email, id, phone, quantity, service } = order
    return (

            <tr>
                <th>{index+1}</th>
                <td>{service}</td>
                <td> {email}</td>
                <td>{phone}</td>
                <td> {quantity}</td>
                <td> {address}</td>
            </tr>
        
    );
};

export default AlOrderDisplay;
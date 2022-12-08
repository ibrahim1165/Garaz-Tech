import React from 'react';
import { Link } from 'react-router-dom';

const MyorderData = ({ order,index , DeleteBtn}) => {
    const { address, email, phone, quantity, service,_id,price,paid } = order
    return (
             <tr>
                <th>{index+1}</th>
                <td>{service}</td>
                <td> {email}</td>
                <td>{phone}</td>
                <td> {quantity}</td>
                <td> {address}</td>
                <td> <button className="btn btn-outline btn-warning btn-sm" onClick={()=> DeleteBtn(order._id)}>Delete</button></td>
                <td> {(price && !paid) && <Link to={`/dashboard/payment/${_id}`}><button className='btn btn-outline btn-sm btn-success'>pay</button></Link>}
                {(price && !paid) && <Link to={`/dashboard/payment/${_id}`}><button className='btn btn-outline btn-sm btn-success'>pay</button></Link>}
                </td>

            </tr>
    );
};

export default MyorderData;
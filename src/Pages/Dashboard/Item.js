import React, { useState } from 'react';

const Item = ({service}) => {
    const { name, price, description,availablequantity, img } = service;
    const [services,setServices] = useState([])
    const deletebtn = id=>{
        const proceed =window.confirm('Are you sure you want to delete')
        if(proceed){
            const url =`http://localhost:5000/service/${id}`;
            fetch(url,{
                method: 'DELETE',  
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
            })
            const remaing = services.filter(service => service._id!==id) 
            setServices(remaing)
        }
    }
    return (
        <div>
            <div class="card card-compact w-96 bg-white shadow-lg">
                <figure><img className="" src={img} alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title">Service: {name}</h2>
                    <p>Price: ${price}</p>
                    <p>availableQuantity: {availablequantity}</p>
                    <p>Description: <span className="text-sm text-gray-500">{description}</span></p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary btn-outline">
                            <button onClick={deletebtn}>Delete</button>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Item;
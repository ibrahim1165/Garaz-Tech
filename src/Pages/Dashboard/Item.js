import React from 'react';

const Item = ({service , DeleteBtn}) => {
    console.log(service)
    const {name, price, description,availablequantity, img,_id } = service;
    return (
        <div>
            <div class="card card-compact lg:w-96 bg-white shadow-lg">
                <figure><img className="" src={img} alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title">Service:{name}</h2>
                    <p>Price: ${price}</p>
                    <p>availableQuantity: {availablequantity}</p>
                    <p>Description: <span className="text-sm text-gray-500">{description}</span></p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary btn-outline">
                            <button onClick={()=>DeleteBtn(service._id)}>Delete</button>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Item;
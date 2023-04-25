import React, { useEffect, useState } from 'react';
import Item from './Item';

const ManageItem = () => {
    const [services, setServices]= useState([])
    useEffect(()=>{
        fetch('https://garaz-tech.onrender.com/service')
        .then(res =>res.json())
        .then(data =>setServices(data))
    },[])

    const DeleteBtn = (id) => {
        const proceed = window.confirm("Are you sure you want to delete");
        if (proceed) {
          const url = `https://garaz-tech.onrender.com/service/${id}`;
          fetch(url, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              console.log("sucess", data);
              const remaing = services.filter((item) => item._id !== id);
              setServices(remaing);
            });
        }
      };
    return (
        <div>
            <div className=" text-center">
            <h1 className="text-4xl m-4 text-orange-500">
                Our Services</h1>
                <p className="text-5xl font-bold ">WE PROVIDE BEST CUSTOM <br />MOTORCYCLE</p>
            </div>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-2 gap-4 mt-8 my-12 mx-auto px-8 lg:px-4">
                {
                    services.map(service =><Item
                    key={service.id}
                    service={service}
                    DeleteBtn={DeleteBtn}
                    ></Item>)
                }
            </div>
        </div>
    );
};

export default ManageItem;
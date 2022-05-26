import axios from 'axios';
import React,{useEffect, useState} from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import MyorderData from './MyorderData';

const MyOrder = () => {
    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([]);
    useEffect(()=>{
        const getOrder = async()=>{
            const email = user.email;
            const url =`http://localhost:5000/order/${email}`;
            try{

                const {data}=  await axios.get(url);
                setOrders(data)
                console.log(data)
            }
            catch(error){
                console.log(error.message);
                if(error.response.status === 401 || error.response.status === 403){
                   
                }
            }

        }
        getOrder()
       
        
    },[user])
    const DeleteBtn = (id) => {
        const proceed = window.confirm("Are you sure you want to delete");
        if (proceed) {
          const url = `http://localhost:5000/order/${id}`;
          fetch(url, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              console.log("sucess", data);
              const remaing = orders.filter((item) => item._id !== id);
              setOrders(remaing);
            });
        }
      };



    return (
        <div>
            <div>
            <h2>My Order {orders.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Service Name</th>
                            <th>Email</th>
                            <th>Mobile</th>
                            <th>Quantity</th>
                            <th>Address</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                   orders.map((order,index)=><MyorderData
                   key={order._id}
                   order={order}
                   index={index}
                   DeleteBtn={ DeleteBtn}
                   
                   ></MyorderData>)
               }


                    </tbody>
                </table>
            </div>
        </div>
           
        </div>
    );
};

export default MyOrder;
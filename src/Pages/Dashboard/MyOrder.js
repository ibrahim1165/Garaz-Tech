import axios from 'axios';
import React,{useEffect, useState} from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init'

const MyOrder = () => {
    const [user] = useAuthState (auth);
    const [orders, setOrders] = useState([]);
    useEffect(()=>{
        // const url =`http://localhost:5000/order`;
        // fetch(url)
        // .then(res=>res.json())
        // .then(data=>setOrders(data))

        const getOrder = async()=>{
            const email = user.email;
            const url =`http://localhost:5000/order?email=${email}`;
            try{

                const {data}=  await axios.get(url);
                setOrders(data)
            }
            catch(error){
                console.log(error.message);
                if(error.response.status === 401 || error.response.status === 403){
                   
                }
            }

        }
        getOrder()
       
        
    },[user])
    return (
        <div>
            <h2>MyOrder: {orders?.length}</h2>
        </div>
    );
};

export default MyOrder;
import React, { useEffect, useState } from 'react';

const useAdmin = user => {
    const [admin,setAdmin] = useState(false);
    const [addLoading, setAddLoading] = useState(true);
    useEffect(()=>{
        const email = user?.email
        fetch(`https://assaingment-12-servicer.up.railway.app/admin/${email}`,{
            method:'GET',
            headers: { 
                'Content-Type':'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
        })
        .then(res=>res.json())
        .then(data=>{
            setAdmin(data.admin);
            setAddLoading(false);
        })
    },[])
    return [admin,addLoading]
};

export default useAdmin;
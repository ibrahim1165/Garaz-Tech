import React, { useEffect, useState } from 'react';

const UserService = id => {
    const [service,setService] = useState({})
    useEffect(() => {
        const url = `https://assaingment-12-servicer.up.railway.app/service/${id}`
        fetch(url).then(res => res.json())
        .then(data => setService(data))
    }, [id])
    return [service, setService]
    
};

export default UserService;
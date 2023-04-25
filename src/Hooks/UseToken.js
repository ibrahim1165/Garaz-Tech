import React, { useEffect, useState } from 'react';

const UseToken = user => {
    const [token, setToken] = useState('')
    useEffect(()=>{
        const email= user?.user?.email;
        const currentUser ={email:email};
        if(email){
            fetch(`https://garaz-tech.onrender.com/user/${email}`,{
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(currentUser)
            })
            .then(res=>res.json())
            .then(data=>{
                console.log('data inside useToken', data);
                const accessToken = data.token;
                localStorage.setItem('accessToken', accessToken);
                setToken(accessToken);
            })

        }
    },[user])
    return [token]
};

export default UseToken;
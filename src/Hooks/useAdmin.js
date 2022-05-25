import React, { useEffect, useState } from 'react';

const useAdmin = user => {
    const [admin,setAdmin] = useState(false);
    const [addLoading, setAddLoading] = useState(true);
    useEffect(()=>{
        const email = user?.user?.email
    },[])
    return (
        <div>
            
        </div>
    );
};

export default useAdmin;
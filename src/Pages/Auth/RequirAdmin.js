import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../Hooks/useAdmin';
import Loading from '../Sherd/Loading'

const RequirAdmin = ({children}) => {
    const [user,loading] = useAuthState(auth);
    const [admin,addLoading]= useAdmin(user)
    const location = useLocation()
    if(loading || addLoading) {
        return <Loading></Loading>
    }
    if(user||admin){
        signOut(auth)
        return <Navigate to="/login" state={{from:location}} replace ></Navigate>
    }
    return children;
};

export default RequirAdmin;
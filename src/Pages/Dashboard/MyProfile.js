import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    const img = user?.photoURL;
    console.log(img)
    return (
        <div className="text-center mt-12">
            <div class="avatar">
                <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src={img} alt="" />
                </div>
            </div>

            <p>Name: {user.displayName}</p>
            <p>userId: {user.metadata?.createdAt}</p>
            <p>Email: {user.email}</p>

        </div>
    );
};

export default MyProfile;
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    const img = user?.photoURL;
    // {
    //     user.photoURL ? <img src={user?.photoURL} alt="" /> : <img src="https://findicons.com/files/icons/61/dragon_soft/128/user.png" alt="" />
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
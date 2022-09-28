import React from 'react';
import './Profile.css';

const Profile = ({image}) => {
    return (
        <div>
            <div className='profileAddress'>
                <img src={image} className='profileImage' />
                <div className='profileNameAddr'>
                    <h3 className='profileName'>Zahid hasan</h3>
                    <address>Sydney, Australia</address>
                </div>
            </div>

            <div className='profileUnits'>
                <div>
                   <h3>75 <span>kg</span> </h3>
                    <span>Weight</span>
                </div>
                <div>
                   <h3>75 <span>kg</span> </h3>
                    <span>Weight</span>
                </div>
                <div>
                   <h3>75 <span>kg</span> </h3>
                    <span>Weight</span>
                </div>

            </div>
        </div>
    );
};

export default Profile;
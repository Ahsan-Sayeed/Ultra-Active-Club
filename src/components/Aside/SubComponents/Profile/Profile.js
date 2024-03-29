import React from 'react';
import './Profile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationPin } from '@fortawesome/free-solid-svg-icons';

const Profile = ({image}) => {
    return (
        <div>
            <div className='profileAddress'>
                <img src={image} className='profileImage' />
                <div className='profileNameAddr'>
                    <h3 className='profileName'>Zahid hasan</h3>
                    <address><FontAwesomeIcon icon={faLocationPin}  size="sm" color='rgb(194,204,211)'/> Sydney, Australia</address>
                </div>
            </div>

            <div className='profileUnits'>
                <div>
                   <h3 className='numbers'>75<span className='unit'>kg</span> </h3>
                    <span>Weight</span>
                </div>
                <div>
                   <h3 className='numbers'>6.5<span className='unit'>ft</span> </h3>
                    <span>Height</span>
                </div>
                <div>
                   <h3 className='numbers'>25<span className='unit'>yr</span> </h3>
                    <span>Age</span>
                </div>

            </div>
        </div>
    );
};

export default Profile;
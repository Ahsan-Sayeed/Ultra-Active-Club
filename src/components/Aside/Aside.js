import React from 'react';
import './Aside.css';
import image from '../../Assets/img1.jpg';
import Profile from './SubComponents/Profile/Profile';
import Break from './SubComponents/Break/Break';
import Details from './SubComponents/Details/Details';
const Aside = () => {
    return (
        <div className='asideContainer'>
             <Profile image={image}/>
              <Break />
              <Details/>
            <button className='activityBtn'>Activity Completed</button>
        </div>
    );
};

export default Aside;
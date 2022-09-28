import React from 'react';
import './Aside.css';
import image from '../../Assets/img1.jpg';
import Profile from './SubComponents/Profile/Profile';

const Aside = () => {
    return (
        <div className='asideContainer'>
             <Profile image={image}/>
             {/* <Break />
            <Details/> */}
            as
            <button>Activity Completed</button>
        </div>
    );
};

export default Aside;
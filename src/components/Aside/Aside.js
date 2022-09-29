import React, { useState } from 'react';
import './Aside.css';
import image from '../../Assets/img1.jpg';
import Profile from './SubComponents/Profile/Profile';
import Break from './SubComponents/Break/Break';
import Details from './SubComponents/Details/Details';
import { getFromLocalStorage, storeToLocalStorage } from '../../utilities/localStoreage';

const Aside = ({getTime}) => {
    const [breakTime,setBreakTime] = useState(getFromLocalStorage('break-time')?getFromLocalStorage('break-time'):'10');
    storeToLocalStorage('break-time',breakTime);
    return (
        <div className='asideContainer'>
             <Profile image={image}/>
              <Break getBreakTime={setBreakTime}/>
              <Details breakTime={ breakTime.slice(0,2)} getTime={getTime}/>
            <button className='activityBtn'>Activity Completed</button>
        </div>
    );
};

export default Aside;
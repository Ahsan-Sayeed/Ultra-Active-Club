import React, { useState } from 'react';
import './Aside.css';
import image from '../../Assets/img1.jpg';
import Profile from './SubComponents/Profile/Profile';
import Break from './SubComponents/Break/Break';
import Details from './SubComponents/Details/Details';
import { getFromLocalStorage, storeToLocalStorage } from '../../utilities/localStoreage';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Aside = ({getTime}) => {
    const [breakTime,setBreakTime] = useState(getFromLocalStorage('break-time')?getFromLocalStorage('break-time'):'10');
    storeToLocalStorage('break-time',breakTime);

    const notify = () => toast.success('Activity Completed', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });;

    return (
        <div className='asideContainer'>
             <Profile image={image}/>
              <Break getBreakTime={setBreakTime}/>
              <Details breakTime={ breakTime.slice(0,2)} getTime={getTime}/>
            <button className='activityBtn' onClick={notify}>Activity Completed</button>
            <ToastContainer
                position="top-center"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    );
};

export default Aside;
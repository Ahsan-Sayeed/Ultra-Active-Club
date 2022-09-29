import React, { useEffect, useState } from 'react';
import './Details.css';

const time = [];
const Details = ({breakTime,getTime}) => {
    const [total,setTotal] = useState(0);

    useEffect(()=>{
        time.push(getTime);
        setTotal(time.reduce((prev,curr)=>prev+curr,0));
    },[getTime]);
    return (
        <div>
            <h2>Exercise Details</h2>
            <div className="profileUnits">
                <div className='centerAlign'>
                    <p className='exerciseText'>Exercise time</p>
                </div>
                <div className='centerAlign'>
                    <p className='exerciseTime'>{total} seconds</p>
                </div>
            </div>
            <div className="profileUnits">
                <div className='centerAlign'>
                    <p className='exerciseText'>Break time</p>
                </div>
                <div className='centerAlign'>
                    <p className='exerciseTime'>{breakTime} seconds</p>
                </div>
            </div>
        </div>
    );
};

export default Details;
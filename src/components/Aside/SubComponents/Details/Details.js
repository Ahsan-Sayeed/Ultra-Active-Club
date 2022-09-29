import React from 'react';
import './Details.css';

const Details = ({breakTime}) => {
    return (
        <div>
            <h2>Exercise Details</h2>
            <div className="profileUnits">
                <div className='centerAlign'>
                    <p className='exerciseText'>Exercise time</p>
                </div>
                <div className='centerAlign'>
                    <p className='exerciseTime'>200 seconds</p>
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
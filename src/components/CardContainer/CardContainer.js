import React from 'react';
import './CardContainer.css';
import Card from '../Card/Card';
const CardContainer = () => {
    return (
        <div className='cardContainer'>
            <div>
                <h2>ULTRA-ACTIVE-CLUB</h2>
                <p>Select today's exercise</p>
                <div className='cards'>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                </div>
            </div>
        </div>
    );
};

export default CardContainer;
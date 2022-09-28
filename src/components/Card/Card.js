import React from 'react';
import './Card.css';
import image from '../../Assets/img1.jpg'

const Card = () => {
    return (
        <div className='Card'>
            <img src={image} className='CardImage'/>
            <h3 >Dumble</h3>
            <p className='CardDesc' style={{ marginTop:'-6px'}}>Amet minim mollit non deserunt
                ullamco est sit aliqua dolor do
                amet sint.
            </p>
            <span>For Age : <b>20-25</b></span>
            <span style={{margin:'8px 0'}}>Time required : <b>30s</b></span>
            <button className='CardBtn'>Add to list</button>
        </div>
    );
};

export default Card;
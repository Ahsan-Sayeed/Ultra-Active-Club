import React, { useState } from 'react';
import './Card.css';
import img from '../../Assets/img1.jpg'

const Card = ({title,desc,id,forAge,time,image,setGetTime}) => {
    const [isAdded,setIsAdded] = useState('');

    const handleClick = (e,time)=>{
        setIsAdded(e.target.parentElement.id);
        setGetTime(Number(time.slice(0,2)));
    }
    return (
        <div className='Card' id={id}>
            <img src={img} className='CardImage'/>
            <h3 >{title}</h3>
            <p className='CardDesc' style={{ marginTop:'-6px'}}>{desc}</p>
            <span>For Age : <b>{forAge}</b></span>
            <span style={{margin:'8px 0'}}>Time required : <b>{time}</b></span>
            <button className='CardBtn' 
                onClick={(e)=>handleClick(e,time)}
                style={id==isAdded?{backgroundColor:'violet'}:null}
                >{id==isAdded?'Added':'Add to list'}</button>
        </div>
    );
};

export default Card;
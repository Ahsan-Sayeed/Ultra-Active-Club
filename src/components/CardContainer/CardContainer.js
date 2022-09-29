import React, { useEffect,useState } from 'react';
import './CardContainer.css';
import Card from '../Card/Card';
import data from '../../utilities/db.json';
const CardContainer = ({setGetTime}) => {

    return (
        <div className='cardContainer'>
            <div>
                <h2>ULTRA-ACTIVE-CLUB</h2>
                <p>Select today's exercise</p>
                <div className='cards'>
                    {
                        data.map((value,index)=>{
                            return(<Card 
                                key={index}
                                title={value.title} 
                                desc={value.desc} 
                                id={value.id} 
                                forAge={value.forAge}
                                time={value.time} 
                                image={value.img}
                                setGetTime={setGetTime} 
                                />);
                        })
                    }
                

                </div>
            </div>
        </div>
    );
};

export default CardContainer;
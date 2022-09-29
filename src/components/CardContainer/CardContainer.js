import React, { useEffect,useState } from 'react';
import './CardContainer.css';
import Card from '../Card/Card';
import data from '../../utilities/db.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell, faLocationPin } from '@fortawesome/free-solid-svg-icons';
const CardContainer = ({setGetTime}) => {

    return (
        <div className='cardContainer'>
            <div>
                <div className='header'>
                    <h2 className='title'><FontAwesomeIcon icon={faDumbbell}  size="lg" color='rgb(238,130,150)'/> ULTRA-ACTIVE-CLUB</h2>
                    <p className='selectToday'>Select today's exercise</p>
                </div>
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
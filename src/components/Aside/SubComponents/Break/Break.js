import React, { useState } from 'react';
import './Break.css';
import { storeToLocalStorage ,getFromLocalStorage } from '../../../../utilities/localStoreage';

const Break = ({getBreakTime}) => {
    const Breaktime = [10,20,30,40,50];
    const [select,setSelect] = useState(getFromLocalStorage('select')?getFromLocalStorage('select'):0);

    const handleClick = (e)=>{
        getBreakTime(e.target.innerText);
        setSelect(e.target.id);
        storeToLocalStorage('select',e.target.id);
    }

    return (
        <div>
            <h2>Add A Break</h2>
            <div className='profileUnits' style={{padding:'12px 0'}}>
               {
                Breaktime.map((v,i)=>(<div key={i} id={i} style={i==select?{backgroundColor:"violet",color:'white'}:{backgroundColor:"white"}} className='timeStamp' onClick={(e)=>handleClick(e)}>
                    {v}s
                </div>))
               } 
                
            </div>
        </div>
    );
};

export default Break;
import React from 'react';

const storeToLocalStorage = (select,id)=>{
    const obj = {};
    obj[select] = id;
    const database = JSON.parse(localStorage.getItem('database'));
   
    if(database){
        database[select] = id;
        localStorage.setItem('database',JSON.stringify(database))
    }
    else{
        localStorage.setItem('database',JSON.stringify(obj));
    }
}

const  getFromLocalStorage = (select)=>{
    return JSON.parse(localStorage.getItem('database'))?.[select];
 }

export {storeToLocalStorage,getFromLocalStorage};
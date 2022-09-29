import './App.css';
import CardContainer from './components/CardContainer/CardContainer';
import Aside from './components/Aside/Aside';
import { useState } from 'react';
function App() {
  const [getTime,setGetTime] = useState(0);
  return (
    <div className='container'>
      <CardContainer setGetTime={setGetTime}/>
      <Aside getTime={getTime}/>
    </div>
  );
}

export default App;

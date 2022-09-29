import './App.css';
import CardContainer from './components/CardContainer/CardContainer';
import Aside from './components/Aside/Aside';
import Questions from './components/Questions/Questions';
import { useState } from 'react';
function App() {
  const [getTime,setGetTime] = useState(0);
  return (
    <div >
      <div className='container'>
      <CardContainer setGetTime={setGetTime}/>
      <Aside getTime={getTime}/>
      </div>

      <Questions />
    </div>
  );
}

export default App;

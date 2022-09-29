import React from 'react';
import './Questions.css';

const Questions = () => {
    return (
        <div>
        <div className='questionContainer'>
            <h1 className='questionHeading'>Questions</h1>
            <div>
                <h2>Q.1 How does react works?</h2>
                <p>Ans: ReactJS divides the UI into isolated reusable pieces of code known as components. 
                    React components work similarly to JavaScript functions as they accept 
                    arbitrary inputs called properties or props. It's possible to have as many components 
                    as necessary without cluttering your code.</p>
            </div>
            <div>
                <h2>Q.2 What is the difference between props and state?</h2>
                <p>Ans: Props are used to pass data from one component to another. 
                    The state is a local data storage that is local to the component only and cannot be passed to other components.</p>
            </div>
            <div>
                <h2>Q.3 What are the uses of useEffect except data load?</h2>
                <p>Ans:  By using this Hook, you tell React that your component needs to do something after render.
                     React will remember the function you passed,
                     and call it later after performing the DOM updates.</p>
                     <em>The useEffect Hook lets you run additional code after React has already updated the DOM. Such as,</em>
                     <ul>
                        <li><em>Add an event listener for a button.</em></li>
                        <li><em>Perform an action when state or props change.</em></li>
                        <li><em>Clean up event listeners when the component unmounts.</em></li>
                     </ul>
            </div>
            </div>
        </div>
    );
};

export default Questions;
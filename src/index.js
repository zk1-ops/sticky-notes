import React from 'react';
import ReactDOM from 'react-dom/client';
import Inputs from './components/Inputs';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div className='container mt-5'>
      <h1>Post It Simulator!</h1>
      <Inputs/>
    </div>
);



import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
// const name = "Muneeb Ullah"
// const date = new Date().toLocaleDateString();


root.render(
  <>
  <App/>
    {/* <h1>My Name is {name}</h1>
    <p>{`Today Date is ${date}`}</p>
    <p>{`Today is ${time}`}</p> */}
  </>
  // getElementById('root')

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

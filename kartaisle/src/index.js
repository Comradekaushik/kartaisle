import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


import HeaderHome from './components/HeaderHome';
import Topbar from './components/Topbar';
import Filterbar from './components/Filterbar';
import CollectionArray from './components/CollectionArray';

import reportWebVitals from './reportWebVitals';


import Array from './test-components/mappedcomponents';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <HeaderHome/>
    <Topbar/>
    <Filterbar/>
    <CollectionArray/>

    {/* <Array/> */}

    
  </>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

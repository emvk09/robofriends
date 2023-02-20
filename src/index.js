import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'tachyons';
import Card from './Card.js'
import { robots } from './Robots';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Card id= {robots[0].ID} name={robots[0].NAME} username={robots[0].USERNAME} email={robots[0].EMAIL}/>
    <Card id= {robots[1].ID} name={robots[1].NAME} username={robots[1].USERNAME} email={robots[1].EMAIL}/>
    <Card id= {robots[2].ID} name={robots[2].NAME} username={robots[2].USERNAME} email={robots[2].EMAIL}/>
    <Card id= {robots[3].ID} name={robots[3].NAME} username={robots[3].USERNAME} email={robots[3].EMAIL}/>
    </div>
); 
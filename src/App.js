import React from "react";
import CardList from './CardList'
import Seabx from './SearchBox'
import { details } from './Details';

const App= function (){
    return(
        <div className="tc">
            <h1>Robofriends</h1>
            <Seabx/>
            <CardList det= {details}/>
        </div>
    );
}

export default App;
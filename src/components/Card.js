import React from 'react';

const Card= function anynamne(props){
    return(
        <div className= 'tc bg-light-green dib br3 pa1 ma3 grow bw2 shadow-5'>
            <img alt='robots' src={`https://robohash.org/${props.id}}?200x200`} />
            <div>
                <h1>{props.name}</h1>
                <h4>{props.email}</h4>
            </div>
        </div>
    );
}

export default Card;
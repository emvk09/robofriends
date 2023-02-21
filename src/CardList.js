import React from 'react';
import Card from './Card';

// if we give ({det}) instead of props, then we can write det[0] directly
const CardList= (props) =>{  
    return(
        <div>
            {
                props.det.map(function (userinfo, i){
                    return (<Card key={i} id= {props.det[i].ID} name={props.det[i].NAME} username={props.det[i].USERNAME} email={props.det[i].EMAIL}/>);
                })
            }
        </div>
    );
}


// const CardList= (props) =>{
//     return(
//         <div>
//             <Card id= {props.det[0].ID} name={props.det[0].NAME} username={props.det[0].USERNAME} email={props.det[0].EMAIL}/>
//             <Card id= {props.det[1].ID} name={props.det[1].NAME} username={props.det[1].USERNAME} email={props.det[1].EMAIL}/>
//             <Card id= {props.det[2].ID} name={props.det[2].NAME} username={props.det[2].USERNAME} email={props.det[2].EMAIL}/>
//             <Card id= {props.det[3].ID} name={props.det[3].NAME} username={props.det[3].USERNAME} email={props.det[3].EMAIL}/>
//             <Card id= {props.det[4].ID} name={props.det[4].NAME} username={props.det[4].USERNAME} email={props.det[4].EMAIL}/>
//             <Card id= {props.det[5].ID} name={props.det[5].NAME} username={props.det[5].USERNAME} email={props.det[5].EMAIL}/>
//         </div>
//     );
// }

export default CardList;
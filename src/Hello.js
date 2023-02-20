import React, {Component} from 'react';
import './Hello.css'

// class Hello extends Component{
//     render(){
//         return(
//             <div className='font1 tc'>
//                 <h1>Hello World</h1>
//                 <h2>{this.props.greeting}</h2>
//             </div>
//         );
//     }
// }

const Hello= function anyname(props){
    return(
        <div className='font1 tc'>
            <h1>Hello World</h1>
            <h2>{props.greeting}</h2>
        </div>
    );
}

export default Hello;
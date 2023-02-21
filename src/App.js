import React from "react";
import CardList from './CardList'
import SearchBox from './SearchBox'
// import { details } from './Details';

// 1. constructor()
// 2. render()
// 3. componentDidMount()
// 4. render()

class App extends React.Component{
    constructor(){
        super()
        this.state= {
            searchfield: "",
            statdetails: []
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response =>{
            return response.json();
        })
        .then(users =>{
            this.setState({statdetails: users})
        })
    }

    search= (event) => {
        this.setState({ searchfield: event.target.value });
    }

    render(){
        const filteredDetails= this.state.statdetails.filter((contents) =>{
            return contents.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })

        //LOADING

        if  (this.state.statdetails.length === 0){ 
            return <h1>LOADING...........</h1>
        }
        else{
            return(
                <div className="tc">
                    <h1 className="f2">RoboFriends</h1>
                    <SearchBox sea= {this.search}/>           
                    <CardList det= {filteredDetails}/>
                </div>  // we are giving the details array not directly from the original
                        // database, but only after filtering it
            );          // before, det was, {this.state.statdetails}
        }
        }
}

export default App;
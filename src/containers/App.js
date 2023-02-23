import React from 'react';
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
// import ErrorBoundary from '../components/ErrorBoundary'
// import { detailslist } from './Details';

// 1. constructor()
// 2. render()
// 3. componentDidMount()
// 4. render()

class App extends React.Component{
    constructor(){
        super()
        this.state= {
            searchfield: "",
            statedetailslist: [] // after we fetch the data, statedetailslist array wil be the array with every objects
            // statedetailslist: detailslist
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) =>{          // fetch method reduces the data used on page updates. it is AJAX
            return response.json();
        })
        .then((onlinedetailslist) =>{
            this.setState({statedetailslist: onlinedetailslist})
        })
    }

    search= (event) =>{      
        this.setState({ searchfield: event.target.value });
    }

    render(){
        const filtereddetailslist= this.state.statedetailslist.filter((eachobjects) =>{
            return eachobjects.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })  // here, actually the list itself is returned, but the contents of the list, i.e, the ojects are filtered 

        //LOADING
        if(this.state.statedetailslist.length === 0){ 
            return <h3 className="tc">Loading...........</h3>
        }
        else{
            return(
                <div className="tc">
                    <h1 className="f2">RoboFriends</h1>
                    <SearchBox sea= {this.search}/> 
                    <Scroll>
                        
                            <CardList det= {filtereddetailslist} />
                        
                    </Scroll>        
                    
                </div>  // we are giving the detailslist array not directly from the original
                        // database, but only after filtering it
            );          // before, det= {this.state.statedetailslist}
        }
        }
}

export default App;
import React from 'react';

class ErrorBoundary extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            hasError: false
        }
    }

    componentDidCatch(error,info){
        this.setState({ hasError: true })
    }

    render(){
        if(this.state.hasError){
            return <h1>Error 404</h1>
        }
        return this.props.childern
    }
}

export default ErrorBoundary;
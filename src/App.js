import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    // Blueprint (features, parts, pieces)
    constructor() {
        super();
        
        this.state = {
            resource: "https://facebook.github.io/react/docs/thinking-in-react.html",
            title: "Thinking in React",
        };
    }
    
    // Event handlers (not every component will need this, choose wisely)
    
    
    render() {
        return (
            <div>
                A Title
                <br/>
                <a href="{this.state.resource}" target="_blank">{this.state.title}</a>
            </div>
        );
    }
}

export default App;

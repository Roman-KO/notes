import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    // Blueprint (features, parts, pieces)
    constructor() {
        super();
        
        this.state = {};
    }
    
    // Event handlers (not every component will need this, choose wisely)
    
    
    render() {
        return (
            <div>
                A Title
                <br/>
                <a href="http://www.google.com" target="_blank">A Link</a>
            </div>
        );
    }
}

export default App;

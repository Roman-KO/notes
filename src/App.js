import React, { Component } from 'react';
import './App.css';
import Subject from './Subject';
import resources from './resources.json';

class App extends Component {
    // Blueprint (features, parts, pieces)
    constructor(props) {
        super(props);
        
        // console.log(Json);
        this.state = {
            resources: resources
        }
        
        this.addNewResource = this.addNewResource.bind(this);
    }
    
    addNewResource(subject, x){
        // const tempState = this.state;
        // tempState.resources[subject].resources.push(x);
        // this.setState(tempState);
        
        let tempState = this.state;
        tempState.resources[subject].resources.push(x);
        this.setState(tempState);
        
        fetch('../resources.json', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                tempState
            })
        });
        
    }
    
    render() {
        return (
            <div>
                {this.state.resources.map(
                    (x, index) => {
                        // console.log(x);
                        return(
                            <Subject index={index} addResource={this.addNewResource} items={x} key={index} />
                        )
                    }
                )}
            </div>
        );
    }
}

export default App;

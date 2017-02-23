import React, { Component } from 'react';
import './App.css';
import Subject from './Subject';
import AddNewSubject from './AddNewSubject';
import resources from './resources.json';

class App extends Component {
    constructor(props) {
        super(props);
                
        this.state = {
            subject: '',
            resources: resources,
        }
        
        this.addNewResource = this.addNewResource.bind(this);
        this.addNewSubject = this.addNewSubject.bind(this);
    }
    
    addNewResource(subject, x){
        let tempState = this.state;
        tempState.resources[subject].resources.push(x);
        this.setState(tempState);
    }
    addNewSubject(subject, x) {
		const tempState = this.state;
		const newSubject = {
			subject: subject,
			resources: []
		}
		tempState.resources.push(newSubject);
		this.setState(tempState);
	}

    render() {
        return (
            <div>
                {this.state.resources.map(
                    (x, index) => {
                        return(
                            <Subject index={index} addResource={this.addNewResource} items={x} key={index} />
                        )
                    }
                )}
                <br />
                <hr />
                <br />
                <AddNewSubject addSubject={this.addNewSubject}/>
            </div>
        );
    }
}

export default App;

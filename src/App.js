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
        this.removeResource = this.removeResource.bind(this);
        this.removeSubject = this.removeSubject.bind(this);
    }
    
    addNewResource(subject, x){
        console.log(x);
        console.log(subject);
        let tempState = this.state;
        tempState.resources[subject].resources.push(x);
        this.setState(tempState);
    }
    
    addNewSubject(subject) {
		const tempState = this.state;
		const newSubject = {
			subject: subject,
			resources: []
		}
		tempState.resources.push(newSubject);
		this.setState(tempState);
	}
    
    removeSubject(subject) {
        delete this.state.resources[subject];
		this.setState(this.state);
	}
    
    removeResource(subject, resource) {
        delete this.state.resources[subject].resources[resource.i];
        this.setState(this.state);
    }

    render() {
        return (
            <div>
                {this.state.resources.map(
                    (x, index) => {
                        return(
                            <Subject
                                index={index}
                                addResource={this.addNewResource}
                                removeResource={this.removeResource}
                                removeSubject={this.removeSubject}
                                items={x}
                                key={index}
                            />
                        )
                    }
                )}
                <br />
                <AddNewSubject addSubject={this.addNewSubject}/>
            </div>
        );
    }
}

export default App;

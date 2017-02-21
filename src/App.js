import React, { Component } from 'react';
import './App.css';
import Subject from './Subject';
import AddNewSubject from './AddNewSubject';
import resources from './resources.json';

class App extends Component {
    constructor(props) {
        super(props);
        
        // console.log(Json);
        
        this.state = {
            resources: resources,
        }
        
        //this.handleEventClick = this.addNewSubject.bind(this);
        this.addNewResource = this.addNewResource.bind(this);
        this.addNewSubject = this.addNewSubject.bind(this);
        //this.handleTypingNew = this.handleTypingNew.bind(this);
    }
    
    addNewResource(subject, x){
        let tempState = this.state;
        tempState.resources[subject].resources.push(x);
        this.setState(tempState);
        
        // fetch('../resources.json', {
        //     method: 'POST',
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({
        //         tempState
        //     })
        // });
    }
    addNewSubject(subject, x) {
        console.log('parent', subject);
	//	e.preventDefault();
		
		const tempState = this.state;
		const newSubject = {
			subject: this.state.subject,
			resources: []
		}
				
		tempState.resources.push(newSubject);
		this.setState(tempState);
		
		console.log(tempState);
		// console.log(newSubject);
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
                <br />
                <hr />
                <br />
                <AddNewSubject addSubject={this.addNewSubject}/>
            </div>
        );
    }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import Subject from './Subject';
import resources from './resources.json';

class App extends Component {
    constructor(props) {
        super(props);
        
        
        // console.log(Json);
        
        this.state = {
            resources: resources,
        }
        
        this.handleEventClick = this.addNewSubject.bind(this);
        this.addNewResource = this.addNewResource.bind(this);
        this.addNewSubject = this.addNewSubject.bind(this);
        this.handleTypingNew = this.handleTypingNew.bind(this);
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
    
    handleTypingNew(e) {
		const target = e.target;
		const value = target.value;
		const name = target.name;
		
		this.setState({
			[e.target.name]: e.target.value
		})
	}
    
    addNewSubject(e) {
        e.preventDefault();
        
        const tempState = this.state;
        const newSubject = {
            subject: this.state.subject,
            resources: []
        }
                
        this.setState.tempState;
        tempState.resources.push(newSubject);
        
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
                <form className="new-form">
					<label htmlFor="subject"></label>
					<input
						name="subject"
                        onChange={this.handleTypingNew}
						value={this.state.subject}
						type="text"
                        placeholder="Subject"
					/>
                    <label htmlFor="title"></label>
                    <input
                        name="title"
                        onChange={this.handleTypingNew}
                        value={this.state.title}
                        type="text"
                        placeholder="Title"
                    />
                    <label htmlFor="url"></label>
					<input
						name="url"
						onChange={this.handleTypingNew}
						value={this.state.url}
						type="text"
                        placeholder="url ex: google.com"
					/>
                    <button onClick={this.addNewSubject}>
						Submit
					</button>
				</form>
            </div>
        );
    }
}

export default App;

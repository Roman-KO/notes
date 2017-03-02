import React, { Component } from 'react';
import './App.css';
import Note from './Note';
import NewNote from './NewNote';
import resources from './resources.json';

class App extends Component {
    constructor(props) {
        super(props);
                
        this.state = {
            note: '',
            resources: resources,
        }
        
        this.addnewItem = this.addnewItem.bind(this);
        this.addNewnote = this.addNewnote.bind(this);
        this.removeItem = this.removeItem.bind(this);
        this.removeNote = this.removeNote.bind(this);
    }
    
    addnewItem(note, x){
        let tempState = this.state;
        tempState.resources[note].resources.push(x);
        this.setState(tempState);
    }
    
    addNewnote(note) {
		const tempState = this.state;
		const newnote = {
			note: note,
			resources: []
		}
		tempState.resources.push(newnote);
		this.setState(tempState);
	}
    
    removeNote(note) {
        delete this.state.resources[note];
		this.setState(this.state);
	}
    
    removeItem(note, resource) {
        delete this.state.resources[note].resources[resource.i];
        this.setState(this.state);
    }

    render() {
        return (
            <div>
                {this.state.resources.map(
                    (x, index) => {
                        return(
                            <Note
                                index={index}
                                addItem={this.addnewItem}
                                removeItem={this.removeItem}
                                removeNote={this.removeNote}
                                items={x}
                                key={index}
                            />
                        )
                    }
                )}
                <br />
                <NewNote addnote={this.addNewnote}/>
            </div>
        );
    }
}

export default App;

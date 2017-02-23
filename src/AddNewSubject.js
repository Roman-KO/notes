import React, { Component } from 'react';

export default class AddNewSubject extends Component {
	constructor() {
		super();
		this.state = {
			subject: ''
		}
		
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleTypingNew = this.handleTypingNew.bind(this);
	}

	handleTypingNew(e) {
		this.setState({
			[e.target.name]: e.target.value
		})
	}
	
	handleSubmit(e){
		e.preventDefault();
		if (this.state.subject === '') {
			alert('Please enter a subject.');
		} else {
			this.props.addSubject(this.state.subject);
			// reset subject after submit
			this.setState({subject: ''});
		}
	}
	
	render() {
		return (
			<form className="new-form">
				<label htmlFor="subject">Add New Subject</label>
				<input
					name="subject"
					onChange={this.handleTypingNew}
					value={this.state.subject}
					type="text"
					placeholder="subject"
				/>
				<button onClick={this.handleSubmit}>
					Submit
				</button>
			</form>
		)
	}
}
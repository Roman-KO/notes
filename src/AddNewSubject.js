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
		const target = e.target;
		const value = target.value;
		const name = target.name;
		
		this.setState({
			[e.target.name]: e.target.value
		})
	}
	
	handleSubmit(e){
		e.preventDefault();
		this.props.addSubject(this.state.subject);
	}
	
	render() {
		return (
			<form className="new-form">
				<label htmlFor="subject"></label>
				<input
					name="subject"
					onChange={this.handleTypingNew}
					value={this.state.subject}
					type="text"
					placeholder="Subject"
				/>
				<button onClick={this.handleSubmit}>
					Submit
				</button>
			</form>
		)
	}
}
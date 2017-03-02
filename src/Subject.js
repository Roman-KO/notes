import React, { Component } from 'react';

export default class SubjectToo extends Component {
	constructor(props) {
		super(props);
		
		this.handleDeleteResource = this.handleDeleteResource.bind(this);
		this.handleDeleteSubject = this.handleDeleteSubject.bind(this);
		this.handleTyping = this.handleTyping.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		
		this.state = {
			isClicked: false,
			styleDiv: 'unfun',
			title: '',
			url: '',
		}
	}
	
	handleDeleteResource(x) {
		const subject = this.props.index;
		const resource = x;
		
		this.props.removeResource(subject, resource);
	}
	handleDeleteSubject(x) {
		this.props.removeSubject(x);
	}
	
	handleTyping(e) {
		const target = e.target;
		const value = target.value;
		const name = target.name;
		
		this.setState({
			[name]: value
		})
	}
	
	handleSubmit(e){
		e.preventDefault();
		const newResource = {
			title: this.state.title,
			url: this.state.url
		}
		this.props.addResource(this.props.index, newResource);
	}
	
	render() {
		return(
			<div>
				<h2>
					{this.props.items.subject}
					<button
						className="delete"
						onClick={() => {
								this.handleDeleteSubject(this.props.index)
							}
						}>
						x
					</button>
				</h2>
				<ul>
				{this.props.items.resources.map(
					(x, i) => {
						return(
							<li key={i}>
								<a href="{x.url}"
									target="_blank"
									className={this.state.styleDiv}
								>
									{x.title}
								</a>
								<button
									className="delete"
									onClick={() => {
											this.handleDeleteResource({i})
										}
									}>
									x
								</button>
							</li>
						)
					}
				)}
				</ul>
				<form>
					<input
						name="url"
						onChange={this.handleTyping}
						value={this.state.url}
						type="text"
						placeholder="URL"
					/>
					<input
						name="title"
						onChange={this.handleTyping}
						value={this.state.title}
						type="text"
						placeholder="Title"
					/>
					<button onClick={this.handleSubmit}>
						Submit
					</button>
				</form>
				<hr />
			</div>
		)
	}
}
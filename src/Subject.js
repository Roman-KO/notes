import React, { Component } from 'react';

export default class Subject extends Component {
	constructor(props) {
		super(props);
		
		this.handleClick = this.handleClick.bind(this);
		
		this.state = {
			isClicked: false,
			styleDiv: 'unfun'
		}
	}
	
	handleClick() {
		this.setState(prevState => ({
			isClicked: !prevState.isClicked,
			styleDiv: 'fun'
		}));
		console.log(this.state.isClicked);
		
		setTimeout(() => {
			console.log(this.state.isClicked);
			this.setState({
				isClicked: false,
				styleDiv: 'unfuntoo'})
		}, 2000)
	}
	
	render() {
		return(
			<div>
				<h2 onClick={this.handleClick}>{this.props.items.subject}</h2>
				<ul>
					{this.props.items.resources.map(
						(resource, i) => {
							return(
								<li key={i}>
									<a href="{resource.url}" target="_blank" className={this.state.styleDiv}>{resource.title}</a>
								</li>
							)
						}
					)}
				</ul>
			</div>
		)
	}
}
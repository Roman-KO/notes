import React, { Component } from 'react';

export default class Subject extends Component {
	constructor(props) {
		super(props);
	}
	
	// Event Handlers
	render() {
		return(
			<div>
				<h2>{this.props.items.subject}</h2>
				<ul>
					{this.props.items.resources.map(
						(resource) => {
							return(
								<li>
									<a href="{resource.url}" target="_blank">{resource.title}</a>
								</li>
							)
						}
					)}
				</ul>
			</div>
		)
	}
}
import React, { Component } from 'react';

export default class Subject extends Component {
	constructor(props) {
		super(props);
	}
	
	// Event Handlers
	render() {
		return(
			<div>
				{this.props.subject}
				<ul>
					<li>
						<a href=""></a>
					</li>
				</ul>
			</div>
		)
	}
}
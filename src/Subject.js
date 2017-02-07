import React, { Component } from 'react';

export default class Subject extends Component {
	constructor(props) {
		super(props);
	}
	
	// Event Handlers
	render() {
		return(
			<div>
				{this.props.items.subject}
				<ul>
					{this.props.items.resources.map(
						(resource) => {
							return(
								<li>
									<a href="{resource.url}">{resource.title} s</a>
								</li>
							)
						}
					)
				}
				</ul>
			</div>
		)
	}
}
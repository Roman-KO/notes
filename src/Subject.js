import React, { Component } from 'react';

export default class SubjectToo extends Component {
	constructor(props) {
		super(props);
		
		this.handleClick = this.handleClick.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
		this.handleTyping = this.handleTyping.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		
		this.state = {
			isClicked: false,
			styleDiv: 'unfun',
			title: '',
			url: '',
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
	
	handleDelete(x, i) {
		// const tempProps = this.props.items;
		let fun = () => {
			// console.log(x.x.title);
			// console.log(this.props.items.resources[0].title);
			
			if(this.props.items.resources[i] === x.x.index){
				let yep = x.x.title;
				console.log(yep);
				
				// delete this.props.items.resources[i];
				// console.log(this.props.items.resources[i].title);
			} else {
				console.log("bananas: " + this.props.items.resources);
			}
		}
		fun();
	}
	
	handleTyping(e) {
		const target = e.target;
		const value = target.value;
		const name = target.name;
		
		this.setState({
			// title: e.target.value,
			// url: e.target.value,
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
				<h2 onClick={this.handleClick}>
					{this.props.items.subject}
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
											this.handleDelete({x}, {i})}
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
					/>
					<input
						name="title"
						onChange={this.handleTyping}
						value={this.state.title}
						type="text"
					/>
					<button onClick={this.handleSubmit}>
						Submit
					</button>
				</form>
			</div>
		)
	}
}
import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList'
import React, { Component } from 'react'

class App extends Component {
	constructor() {
		super()
		this.state = {
			items: [],
			currentItem: { text: '', key: '' },
		}
	}
	handleInput = e => {
		console.log('Hello Input')
	}
	addItem = () => {
		console.log('Hello Add Item')
	}
	render() {
		return (
			<div className="App">
				<TodoList addItem={this.addItem} />

			</div>
		);
	}
}
export default App;

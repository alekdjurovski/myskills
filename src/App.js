import React, { Component } from 'react';
import CardList from './CardList';
import {skills} from './myskills';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import './App.css';



class App extends Component {
	constructor(){
		super()
		this.state = {
		skills: skills,
		searchfield: '' 
    }
}

onSearchChange = (event) => {
	this.setState({ searchfield: event.target.value })
}

	render() {
	const filterSkills = this.state.skills.filter(skills =>{
		return skills.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
	})
	console.log(filterSkills);
	
	return (
		<div className="tc">
			<h1 className='f2'>My Skills</h1>
			<SearchBox searchChange={this.onSearchChange} />
			<Scroll>
				<CardList skills={filterSkills}/>
			</Scroll>
		</div>
	);
	}
	
}

export default App;
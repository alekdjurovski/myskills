import React, { Component } from 'react';
import CardList from './CardList';
import {skills} from './myskills';
import SearchBox from './SearchBox';



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
			<h1>My Skills</h1>
			<SearchBox searchChange={this.onSearchChange} />
			<CardList skills={filterSkills}/>
		</div>
	);
	}
	
}

export default App;
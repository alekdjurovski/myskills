import React from 'react';
import CardList from './CardList';
import {skills} from './myskills';
import SearchBox from './SearchBox';

const App = () => {
	return (
		<div>
			<h1>My Skills</h1>
			<SearchBox />
			<CardList skills={skills}/>
		</div>
	);
}

export default App;
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Card from './Card';
import CardList from './CardList';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';
import { skills } from './myskills';

ReactDOM.render(<CardList skills = {skills} />
	, document.getElementById('root'));
registerServiceWorker();

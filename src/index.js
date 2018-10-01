import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './Card';
import CardList from './CardList';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';
import { skills } from './myskills'

ReactDOM.render(<div>
					<Card id={skills[0].id} name={skills[0].name} email={skills[0].email} />,
					<Card id={skills[1].id} name={skills[1].name} email={skills[1].email}/>,
					<Card id={skills[2].id} name={skills[2].name} email={skills[2].email}/>,
					<Card id={skills[3].id} name={skills[3].name} email={skills[3].email}/>
				</div>
	, document.getElementById('root'));
registerServiceWorker();

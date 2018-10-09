import React from 'react';
import Card from './Card';
// import skills from './myskills';

const CardList = ({skills}) => {
	const cardComponent = skills.map((user, i) => {
		return <Card key={i} id={skills[i].id} name={skills[i].name} email={skills[i].email} />
	})
	return (
		<div> {cardComponent} </div>
	); 
}

export default CardList;
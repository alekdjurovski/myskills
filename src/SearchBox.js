import React from 'react'

const SearchBox = ({searchfield, searchChange}) => {
	return (
		<div>
			<input 
				type='search' 
				placeholder='search my skills' 
				className='pa3 ba b--green bg-lightest-blue'
				onChange={searchChange}
			/>
		</div>
	)
}

export default SearchBox;
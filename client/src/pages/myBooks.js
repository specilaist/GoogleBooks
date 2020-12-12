import React from 'react';
import Books from '../../../model/booksOrm';
import API from '../utils/api';
import MyCards from './components/Book Cards/myCards'
import Paper from 'mat'

const MyBooks = () =>{

	const books = API.getMyBooks
	
	const renderMyCards = () => {
		return books.map((books) => {
			return <MyCards
			key={books.id}
			key={books.title}
			key={books.}
			key={books.}
			key={books.} />

		})
	}
	
	const deleteCard = () => {
		const myBooks = API.getMyBooks
	}

	return (
		<div>
			{renderMyCards}
		</div>
	)
};

export default MyBooks;
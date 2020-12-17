import React from 'react';
import { useState, useEffect } from 'react';
import API from '../utils/api';
import MyCards from './components/Book Cards/myCards'

const MyBooks = () =>{
	let [ books, setBooks ] = useState()

	useEffect(() => {
		API.getMyBooks().then(({data}) => setBooks(data));
	}, []);

	console.log(books)
	
	const renderMyCards = () => {
		return books.map((books) => {
			return <MyCards
			key={books.id} />
		});
	}
	
	// const deleteCard = () => {
	// 	const myBooks = API.getMyBooks
	// }

	return (
		<div>
			{renderMyCards}
		</div>
	)
};

export default MyBooks;
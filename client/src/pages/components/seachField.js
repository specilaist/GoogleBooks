import React from 'react';
import { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import axios from 'axios';
import API from '../../utils/api';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function SearchField() {
	const classes = useStyles();
	
	const [ search, setSearch ] = useState('');
	const [Searched, setSearched] = useState('');

	const handleChange = (event) => {
		setSearch(event.target.value);
	}


	const handleSearch = async () => {
		// event.preventDefault();
		// console.log(search);
		// API.getSearched(search)
		await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}`)
			.then((results =>
				results.data.items.filter(
				  result =>
				    result.volumeInfo.title &&
				    result.volumeInfo.infoLink &&
				    result.volumeInfo.authors &&
				    result.volumeInfo.description &&
				    result.volumeInfo.imageLinks &&
				    result.volumeInfo.imageLinks.thumbnail
				)
			))
			.catch(e => console.log(e));
	}

	// useEffect(

	// )

	
	return(
		<Card>
			<p className="">
				<h2>Select A Book To Search:</h2>
			</p>
			<TextField className=""
			id="outlined-search" 
			label="Search field" 
			type="search"
			value={search}
			variant="outlined"
			onChange={handleChange}/>
			<Button className="" variant="contained" color="primary" onClick={handleSearch}>
  				Submit
			</Button>
		</Card>
	)
};
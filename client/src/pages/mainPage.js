import React from 'react';
import { setState, useEffect } from 'react';
import SearchField from './components/seachField';
import SearchBooks from './components/Book Cards/searchBooks';
import Paper from '@material-ui/core/Paper';
import API from '../utils/api';

const MainPage = ()  => {
	// const [ searched, setSearched ] = setState();

	return(
		<Paper>
			<SearchField/>
			<SearchBooks/>
		</Paper>
	)
}

export default MainPage;
import axios from 'axios';

export default {
	getSearched: function(){
		return axios.get('/')
	},
	getLiked: function(){
		return axios.get('/likedbooks')
	},
	getMyBooks: function(){
		return axios.get('/mybooks')
	},
	newLikedBooks: function(){
		return axios.post('/likedbooks')
	},
	newMyBooks: function(){
		return axios.post('/mybooks')
	},
	deleteMyBook: function(deletedMyBook){
		return axios.delete(`/mybooks/${deletedMyBook}`)
	},
	deleteMyLiked: function(deletedLiked){
		return axios.delete(`/likedbooks/${deletedLiked}`)
	}
};

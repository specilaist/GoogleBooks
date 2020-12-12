require('dotenv')
	.config();
const mongoose = require('mongoose');
const db = require('./');

const seedDb = async () => {

	console.log('Yeee');

  mongoose.connect('mongodb+srv://Eban:tE5d3dEgqYhlxpG6@cluster0.dihjf.mongodb.net/googleBooks?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
    .then(() => console.log('Yee'))
    .catch(e => console.log(e));
	
	mongoose.set('debug', true);

	try {
		console.log(db)
		const call = await db.Books.create({
			bookAuthor: 'Jack London',
			bookTitle: 'Call of the Wild',
			bookSummary: 'great book',
			liked: true,
			mine: true
		}) 
	} catch (e) {
		throw new Error(e)
	}
};

seedDb().then(() => console.log('Yee')).catch(e => console.log(e));
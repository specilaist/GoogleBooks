require('dotenv')
	.config();
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://Eban:tE5d3dEgqYhlxpG6@cluster0.dihjf.mongodb.net/googleBooks?retryWrites=true&w=majority',  {
  useNewUrlParser: true,
	useUnifiedTopology: true
})
	.then(() => console.log('Working Connection'))
	.catch(e => console.log(e));

mongoose.set('debug', true);

const PORT = process.env.PORT || 3001;

const app = express();

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

app.listen(PORT, () => {
  console.log('Server started listening on PORT http://localhost:3001');
});



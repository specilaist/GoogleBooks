import React from "react";
import "./style.css";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

function SearchCards(props) {
  const classes = makeStyles();

  return (
    <div className="card row">
      <div className="img-container col-3">
        <img placeholder="Searched Book" alt={props.title} src={props.image} />
      </div>
      <div className="content col-9">
        <ul>
          <li>
            <strong>Book Name:</strong> {props.title}
          </li>
          <li>
            <strong>Subtitles:</strong> {props.substitles}
          </li>
          <li>
            <strong>Book Summary:</strong> {props.summary}
          </li>
          <li>
            <strong>Pages:</strong> {props.page}
          </li>
          <li>
            <strong>Link:</strong> {props.link}
          </li>
        </ul>
      </div>
      <div className={classes.root}>
        <Button variant="contained" color="primary" className="like" onClick={() => {alert('Book Liked')}}>Like</Button>
        <Button variant="contained" color="secondary" className="myBook" onClick={() => {alert('Added to MyBooks')}}>Mine</Button>
      </div>
    </div>
  );
}

export default SearchCards;

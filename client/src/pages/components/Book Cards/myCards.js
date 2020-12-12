import Axios from "axios";
import react from "react";
import { useState, setState } from "react";
import "./style.css";
import API from '../../../utils/api';

function BookCards(props) {
	const deleteCard = () => {
		const myBooks = API.getMyBooks
	}

  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.title} src={props.image}/>
      </div>
      <div className="content">
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
      <span className="delete" onClick={}>𝘅</span>
    </div>
  );
}

export default BookCards;

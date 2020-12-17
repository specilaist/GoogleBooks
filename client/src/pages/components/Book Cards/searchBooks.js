import React from "react";
import "./style.css";

function SearchCards(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.title} src={props.image} />
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
    </div>
  );
}

export default SearchCards;

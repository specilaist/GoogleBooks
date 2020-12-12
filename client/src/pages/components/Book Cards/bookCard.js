import react from 'react';
import { useState, setState } from 'react';

function BookCards(){

	return (
		<div className="card">
			<div className="img-container">
				<img className="" />
			</div>
			<div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Code Used:</strong> {props.code}
          </li>
          <li>
            <strong>Website:</strong> {props.website}
          </li>
          <li>
            <strong>GitHub:</strong> {props.github}
          </li>
        </ul>
      </div>

    </div>
	)
}

export default BookCards;
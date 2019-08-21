import React from 'react';
import './ErrorMessage.css';

export default function ErrorMessage(props) {
  return (
    <div className="ErrorMessage">
      <div className="ErrorMessage__content">
        {props.message}
      </div>
      <button onClick={e => props.showError(null)}>Close</button>
    </div>
  )
}



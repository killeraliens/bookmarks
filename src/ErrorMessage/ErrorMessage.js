import React from 'react';
import './ErrorMessage.css';


export default function ErrorMessage(props) {
  return (
    <div className="ErrorMessage">
      <div className="ErrorMessage__content">
        {props.message}
      </div>
      <button aria-label="close error" onClick={() => props.showError(null)}>Close</button>
    </div>
  )
}



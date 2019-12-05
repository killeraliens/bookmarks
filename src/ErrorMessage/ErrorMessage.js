import React from 'react';
import './ErrorMessage.css';


export default function ErrorMessage(props) {
  return (
    <div className="ErrorMessage">
      <div className="ErrorMessage__content">
        <p>{props.message}</p>
      </div>
      <button aria-label="close error" onClick={() => props.showError(null)}>Close</button>
    </div>
  )
}

ErrorMessage.defaultProps = {
  message: 'uh - oh there was a problem'
}



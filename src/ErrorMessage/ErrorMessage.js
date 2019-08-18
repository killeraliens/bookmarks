import React from 'react';
import './ErrorMessage.css';

export default function ErrorMessage(props) {
  return (
    <div className="ErrorMessage">
      <div className="ErrorMessage__content">
        {props.message}
      </div>
    </div>
  )
}

ErrorMessage.defaultProps = {
  message: 'Something went wrong'
}


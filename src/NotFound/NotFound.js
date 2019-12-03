import React from 'react';
import PropTypes from 'prop-types';

export default function NotFound(props) {
  return (
    <div className="NotFound">
      {props.message}
    </div>
  )
}

NotFound.defaultProps = {
  message: 'Page not found'
}

NotFound.propTypes = {
  message: PropTypes.string.isRequired
}

import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

class Fab extends Component {
  render() {

    return(
      <div className="Fab">
          <button><FontAwesomeIcon icon={faPlus} /></button>
      </div>
    )
  }
}


export default Fab;

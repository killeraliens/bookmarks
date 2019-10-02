import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

class Fab extends Component {

  render() {
    return(
      <div className="Fab">
        <Link to='/add-bookmark'>
          <button><FontAwesomeIcon icon={faPlus} /></button>
        </Link>
      </div>
    )
  }
}


export default Fab;

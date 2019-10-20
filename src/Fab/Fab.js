import React, { Component } from 'react';
import './Fab.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { withRouter } from 'react-router-dom';

class Fab extends Component {

  render() {
    return(
      <div className="Fab">
          <button
            aria-label="add new bookmark"
          >
            <FontAwesomeIcon icon={faPlus} onClick={() => {this.props.history.push('/add-bookmark')}}/>
          </button>
      </div>
    )
  }
}


export default withRouter(Fab);

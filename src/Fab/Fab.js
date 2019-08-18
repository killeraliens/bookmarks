import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

class Fab extends Component {
  handleClick(e) {
    this.props.showAddBookmark(true)
  }

  render() {

    return(
      <div className="Fab">
          <button onClick={(e) => this.handleClick(true)}><FontAwesomeIcon icon={faPlus} /></button>
      </div>
    )
  }
}


export default Fab;

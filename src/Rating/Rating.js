import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

class Rating extends Component {

  render() {
    const stars = Array(this.props.rating).fill().map((star, i) => {
      return <FontAwesomeIcon key={i} icon={faStar}/>
    });

    return(
      <div className="Rating">
        Rating
        {stars}
      </div>
    )
  }
}

Rating.defaultProps = {
  rating: 1
}

export default Rating;

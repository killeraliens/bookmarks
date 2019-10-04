import React, {Component} from 'react';
import Rating from '../Rating/Rating';
import './Bookmark.css'

class Bookmark extends Component {
  static defaultProps = {
    onClickDelete: () => {}
  }

  render() {
    return(
      <div className="Bookmark">
        <h2 className="Bookmark__title">
          {this.props.title}
        </h2>
         <div className="Bookmark__url">
          {this.props.url}
        </div>
         <div className="Bookmark__description">
          {this.props.description}
        </div>
        <Rating rating={this.props.rating}/>
        <button type="button" onClick={() => this.props.onClickDelete(this.props.id)}>Delete</button>
      </div>
    )
  }
}

export default Bookmark;

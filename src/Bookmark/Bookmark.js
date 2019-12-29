import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Rating from '../Rating/Rating';
import config from '../config'
import BookmarksContext from '../BookmarksContext'
import './Bookmark.css'

function deleteBookmarkReq(id, callback) {
  const options = {
    method: 'DELETE',
    // mode: 'no-cors',
    headers: {
      "Content-Type": "application/json",
       "Authorization": `Bearer ${config.API_KEY}`
    }
  }

  return fetch(`${config.API_ENDPOINT}/${id}` , options)
  .then(res => {
    if (res.status !== 204 ) {
     throw new Error(res.message)
    }
    return callback(id);
  })
  .catch(err => {
    //what to do here? How do i setState error, or what do i do with this.
    return err
  })
}


class Bookmark extends Component {
  // static defaultProps = {
  //   onClickDelete: () => {}
  // }
  static contextType = BookmarksContext

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
        <button
          type="button"
          onClick={() => deleteBookmarkReq(this.props.id, this.context.deleteBookmark) }
        >
          Delete
        </button>
        <Link to={`/edit-bookmark/${this.props.id}`}>Edit Bookmark</Link>
      </div>

    )
  }
}

export default Bookmark;

import React, {Component} from 'react';
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

  fetch(`${config.API_ENDPOINT}/${id}` , options)
  .then(res => {
    if (!res.ok) {
      //this method does not throw error if the res is null (401). Why teach this method.
      // return res.json().then(err => {
      //   throw err
      // })
     throw new Error(res.message)
    }
    console.log('ok')
    return res.json()
  })
  .then(data => {
    console.log({data});
    callback(id);
  })
  .catch(err => {
    console.log('error caught ', err)
  })
}


class Bookmark extends Component {
  // static defaultProps = {
  //   onClickDelete: () => {}
  // }

  render() {
    return(
      <BookmarksContext.Consumer>
      {context => {
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
              onClick={() => {deleteBookmarkReq(this.props.id, context.deleteBookmark)} }
            >
              Delete
            </button>
          </div>
        )
      }}
      </BookmarksContext.Consumer>

    )
  }
}

export default Bookmark;

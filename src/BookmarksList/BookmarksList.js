import React, {Component} from 'react';
import './BookmarksList.css'
;import Bookmark from '../Bookmark/Bookmark';

class BookmarksList extends Component {
  render() {
    const bookmarks = this.props.bookmarks.map((bookmark, i) => {
      return <Bookmark key={i} {...bookmark}/>
    })
    return(
      <div className="BookmarksList">
        <h1>Your Bookmarks</h1>
        {bookmarks}
      </div>
    )
  }
}

export default BookmarksList;

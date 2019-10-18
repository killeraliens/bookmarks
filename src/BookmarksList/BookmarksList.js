import React, {Component} from 'react';
import './BookmarksList.css'
;import Bookmark from '../Bookmark/Bookmark';
import BookmarksContext from '../BookmarksContext';

class BookmarksList extends Component {
  static contextType = BookmarksContext;

  render() {
    const bookmarks = this.context.bookmarks.map((bookmark, i) => {
      return <Bookmark key={bookmark.id} {...bookmark}/>
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

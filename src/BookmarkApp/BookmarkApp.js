import React, { Component } from 'react';
import BookmarksList from '../BookmarksList/BookmarksList';
import Fab from '../Fab/Fab';

class BookmarkApp extends Component {
  render() {

    return(
      <div className="BookmarkApp">
          <Fab showAddBookmark={this.props.showAddBookmark}/>
          <BookmarksList bookmarks={this.props.bookmarks}/>
      </div>
    )
  }
}


export default BookmarkApp;

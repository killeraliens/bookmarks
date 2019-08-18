import React, { Component } from 'react';
import BookmarksList from '../BookmarksList/BookmarksList';
import Fab from '../Fab/Fab';

class BookmarkApp extends Component {
  render() {

    return(
      <div className="BookmarkApp">
          <BookmarksList bookmarks={this.props.bookmarks}/>
          <Fab />
      </div>
    )
  }
}


export default BookmarkApp;

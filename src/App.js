import React, { Component } from 'react';
import AddBookmark from './AddBookmark/AddBookmark';
import BookmarkApp from './BookmarkApp/BookmarkApp';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bookmarks: [
        {title: 'A title sample', url: 'http://goatsguide.com', description: 'my fav events site', rating: 5},
        {title: 'Another title sample', url: 'https://bandcamp.com/killeraliens/wishlist', description: 'albums i want', rating: 3}
      ]
    }
  }

  componentDidMount() {
    const apiKey= `$2a$10$eVQZnoWBeXGtzLS6GBVEYeQf2aALJxuHZyi01BvbL1jDSu5mKmRR2`;
    const rootUrl = `https://thinkful-list-api.herokuapp.com/v3/`;
  }

  render() {
    const loadingSquare = <div className="loadingsquare"></div>;
    return (
      <div className='App'>
        <AddBookmark />
        <BookmarkApp bookmarks={this.state.bookmarks}/>
      </div>
    )
  }
}

export default App;

import React, { Component } from 'react';
import AddBookmark from './AddBookmark/AddBookmark';
import BookmarkApp from './BookmarkApp/BookmarkApp';
import ErrorMessage from './ErrorMessage/ErrorMessage';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bookmarks: [
        {title: 'A title sample', url: 'http://goatsguide.com', description: 'my fav events site', rating: 5},
        {title: 'Another title sample', url: 'https://bandcamp.com/killeraliens/wishlist', description: 'albums i want', rating: 3}
      ],
      showAddBookmark: false,
      errMessage: null
    }
  }

  componentDidMount() {
    const apiKey= `$2a$10$jHBJKSk2Pbmf87E0YSjwk.AT3s22WIGNOQsQWcn/qy5Zwz5O3Sr5q`;
    const getUrl = `https://tf-ed-bookmarks-api.herokuapp.com/v3/bookmarks`;
    const options = {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-type': 'application/json'
      }
    }
    fetch(getUrl, options)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(response.statusText)
    })
    .then(responseJson => {
      this.setState({
        bookmarks: responseJson,
        errMessage: null
      })
    })
    .catch(err => this.setState({ errMessage: err.message}));
  }

  showAddBookmark(show) {
    // console.log('show add bookmark', {show})
    this.setState({ showAddBookmark: show })
  }

  render() {
    const loadingSquare = <div className="loadingsquare"></div>;
    const page = this.state.showAddBookmark
     ? <AddBookmark showAddBookmark={(e) => this.showAddBookmark(false)}/>
     : <BookmarkApp bookmarks={this.state.bookmarks} showAddBookmark={(e) => this.showAddBookmark(true)}/>;
    const errorMessage = this.state.errMessage
      ? <ErrorMessage message={this.state.errMessage}/>
      : null;
    return (
      <div className='App'>
        { page }
        { errorMessage }
      </div>
    )
  }
}

export default App;

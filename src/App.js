import React, { Component } from 'react';
import AddBookmark from './AddBookmark/AddBookmark';
import BookmarkApp from './BookmarkApp/BookmarkApp';
import ErrorMessage from './ErrorMessage/ErrorMessage';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bookmarks: [],
      showAddBookmark: false
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
        error: null
      })
    })
    .catch(err => this.setState({ error: err.message}));
  }

  showAddBookmark(show) {
    // console.log('show add bookmark', {show})
    this.setState({ showAddBookmark: show })
  }

  addBookmark(bookmark) {
    console.log('bookmark adding to app state');
    this.setState({
      bookmarks: [...this.state.bookmarks, bookmark],
      showAddBookmark: false
    });
  }

   handleShowError(show) {
    this.setState({
      error: show
    })
  }

  render() {
    const loadingSquare = <div className="loadingsquare"></div>;
    const page = this.state.showAddBookmark
     ? <AddBookmark showAddBookmark={(e) => this.showAddBookmark(false)} handleAddBookmark={bookmark => this.addBookmark(bookmark)} />
     : <BookmarkApp bookmarks={this.state.bookmarks} showAddBookmark={(e) => this.showAddBookmark(true)}/>;
    const errorMessage = this.state.error
      ? <ErrorMessage message={this.state.error} showError={e=> this.handleShowError(null)}/>
      : null;
    return (
      <div className='App'>
        { errorMessage }
        { page }
      </div>
    )
  }
}

export default App;

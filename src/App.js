import React, { Component } from 'react';
import config from './config';
import BookmarksContext from './BookmarksContext';
import AddBookmark from './AddBookmark/AddBookmark';
import EditBookmark from './EditBookmark/EditBookmark'
import Fab from './Fab/Fab';
import BookmarksList from './BookmarksList/BookmarksList';
import ErrorMessage from './ErrorMessage/ErrorMessage';
import NotFound from './NotFound/NotFound'
import { Route, Switch } from 'react-router-dom';

class App extends Component {

  state = {
    bookmarks: [],
    error: null
  }

  fetchBookmarks = () => {
    const apiKey = config.API_KEY;
    const getUrl = config.API_ENDPOINT;
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

        return response.json().then(error => Promise.reject(error))
      })
      .then(responseJson => {
        this.setState({
          bookmarks: responseJson,
          error: null
        })
      })
      .catch(error => {
        console.log(error)
        this.setState({ error })
      });
  }

  componentDidMount() {
    // this.interval = setInterval(() => {
      this.fetchBookmarks()
    // }, 1000)
  }

  // componentWillUnmount() {
  //   clearInterval(this.interval);
  // }

  addBookmark = (bookmark) => {
    console.log('bookmark adding to app state');
    this.setState({
      bookmarks: [...this.state.bookmarks, bookmark]
    });
  }

  deleteBookmark = (id) => {
    const newBookmarks = this.state.bookmarks.filter(bookmark => bookmark.id !== id);
    console.log('deleting bookmark, curr count at', this.state.bookmarks.count)
    this.setState({
      bookmarks: newBookmarks
    }, () => {console.log('new count at', this.state.bookmarks.count)})
  }

  updateBookmark = (updatedBookmark) => {
    //const bmIndex = this.state.bookmarks.findIndex(bm => bm.id === id)
    //const bmArr = [...this.state.bookmarks]
    const newBookmarks = this.state.bookmarks.map(bm => bm.id !== updatedBookmark.id ? bm : updatedBookmark)

    this.setState({
      bookmarks: newBookmarks
    })
  }

  handleShowError(show) {
    this.setState({
      error: show
    })
  }

  render() {
    const error = this.state.error
      ? <ErrorMessage message={this.state.error.message} showError={()=> this.handleShowError(null)}/>
      : null;

    const contextValue = {
      bookmarks: this.state.bookmarks,
      addBookmark: this.addBookmark,
      deleteBookmark: this.deleteBookmark,
      updateBookmark: this.updateBookmark
    };

    return (
      <div className='App'>
        { error }
        <BookmarksContext.Provider value={contextValue}>
          <Fab />
          <Switch>
            <Route
              exact
              path='/'
              component={BookmarksList}
            />
            <Route
              path='/add-bookmark'
              component={AddBookmark}
            />
            <Route
              path='/edit-bookmark/:bookmarkId'
              component={EditBookmark}
            />
            <Route
              component={NotFound}
            />
          </Switch>
        </BookmarksContext.Provider>
      </div>
    )
  }
}

export default App;

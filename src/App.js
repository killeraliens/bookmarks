import React, { Component } from 'react';
import AddBookmark from './AddBookmark/AddBookmark';
import BookmarkApp from './BookmarkApp/BookmarkApp';
import ErrorMessage from './ErrorMessage/ErrorMessage';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bookmarks: []
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

  addBookmark = (bookmark) => {
    console.log('bookmark adding to app state');
    this.setState({
      bookmarks: [...this.state.bookmarks, bookmark]
    });

  }

   handleShowError(show) {
    this.setState({
      error: show
    })
  }

  render() {
    const { error } = this.state
      ? <ErrorMessage message={this.state.error} showError={e=> this.handleShowError(null)}/>
      : null;

    return (
      <div className='App'>
        { error }
        <Switch>
          <Route
            exact
            path='/'
            render={(routeProps) => {
              return(
                <BookmarkApp
                  bookmarks={this.state.bookmarks}
                  {...routeProps}
                />
              )
            }}
          />
          <Route
            path='/add-bookmark'
            render={(routeProps) => {
              return(
                <AddBookmark
                  handleAddBookmark={this.addBookmark}
                  onClickCancel={() => routeProps.history.push('/')}
                  {...routeProps}
                />
              )
            }}
          />
        </Switch>
      </div>
    )
  }
}

export default App;

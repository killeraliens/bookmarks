import React, { Component } from 'react';
import BookmarksContext from '../BookmarksContext'
import NotFound from '../NotFound/NotFound'
import config from '../config';
import context from '../testHelpers';

class EditBookmark extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     title: ``,
  //     url: ``,
  //     description: ``,
  //     rating: 1
  //   }
  // }
  static contextType = BookmarksContext;

  state = {
    title: "",
    url: "",
    description: "",
    rating: 1,
    error: null,
    loading: false
  }

  componentDidMount() {
    const { bookmarkId } = this.props.match.params
    const options = {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${config.API_KEY}`,
      }
    }
    fetch(`${config.API_ENDPOINT}/${bookmarkId}`, options)
      .then(res => {
        if (!res.ok) {
          throw new Error(res.error)
        }
        return res.json()
      })
      .then(resJson => {
        let bookmark = { ...resJson }
        let { id, loading, ...bookmarkState } = bookmark

        this.setState({
          ...bookmarkState,
          error: null
        })
      })
      .catch(error => {
        console.log(error)
        this.setState({ error })
      })
  }

  updateState = (e) => {
    const { name, value } = e.target
    let newState = { ...this.state, [name]: value }

    return this.setState(newState)
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { bookmarkId } = this.props.match.params
    let thisState = { ...this.state }
    let { error, loading, ...patchBody } = thisState
    const options = {
      method: 'PATCH',
      headers: {
        'Authorization': `Bearer ${config.API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(patchBody)
    }
    fetch(`${config.API_ENDPOINT}/${bookmarkId}`, options)
      .then(res => {
        if(!res.ok) {
          throw new Error('Could not update your bookmark')
        }

        this.setState({
          title: "",
          url: "",
          description: "",
          rating: 1,
          error: null,
          loading: false
        })
        this.context.updateBookmark(bookmarkId, patchBody)
        //this.props.history.push(`/${bookmarkId}`)
        this.props.history.push(`/`)
      })
      .catch(error => {
        this.setState({ error })
      })
  }

  render() {
    const { error } = this.state

    if (error) {
      const message = error.message
        ? error.message
        : error.status
      return <NotFound message={message} />
    }

    return(
      <div className="EditBookmark">
        { error }
        <form className='EditBookmark__form' onSubmit={this.handleSubmit}>
          <h1>Edit Bookmark</h1>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Name your bookmark"
            value={this.state.title}
            onChange={this.updateState}
          />
          <label htmlFor="url">Url</label>
          <input
            type="text"
            name="url"
            id="url"
            placeholder="Url"
            value={this.state.url}
            onChange={this.updateState}
          />
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            id="description"
            placeholder="Describe your bookmark"
            value={this.state.description}
            onChange={this.updateState}
          />
          <label htmlFor="rating">Rating</label>
          <input
            type="number"
            name="rating"
            id="rating"
            max="5"
            min="1"
            value={this.state.rating}
            onChange={this.updateState}
          />
          <div className="AddBookmark__buttons">
            <button
              type="button"
              aria-label="cancel new bookmark"
              onClick={() => this.props.history.push('/')}
            >
              Cancel
            </button>
            <button
              type="submit"
              aria-label="submit new bookmark"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default EditBookmark;

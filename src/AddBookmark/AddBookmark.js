import React, { Component } from 'react';
import './AddBookmark.css';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import {Link} from 'react-router-dom';

class AddBookmark extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      url: "",
      description: "",
      rating: 1
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    //const newBookmark = (({title, url, description, rating}) => ({title, url, description, rating}))(this.state);
    const bookmarkState = this.state;
    const createBookmark = (props) => props;
    const newBookmark = createBookmark(bookmarkState);
    const options = {
      method: "POST",
      body: JSON.stringify(newBookmark),
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer $2a$10$jHBJKSk2Pbmf87E0YSjwk.AT3s22WIGNOQsQWcn/qy5Zwz5O3Sr5q"
      }
    };
    const url = 'https://tf-ed-bookmarks-api.herokuapp.com/v3/bookmarks';

    fetch(url, options)
    .then(res => {
      if(!res.ok) {
        //console.log('error about to be thrown');
        throw new Error(res.statusText)
      }
      //console.log('post successful');
      return res.json();
    })
    .then(data => {
      this.setState({
        title: "",
        url: "",
        description: "",
        rating: 1,
        error: null
      });
      //console.log(data);
      //console.log(newBookmark);
      this.props.history.push('/')
      this.props.handleAddBookmark(newBookmark);
    })
    .catch(err => {
        this.setState({
          error: err.message
        });
    });

  }

  titleChanged(title) {
    console.log('title changed');
    this.setState({
      title
    });
  }

  urlChanged(url) {
    this.setState({
      url
    });
  }

  descriptionChanged(description) {
    this.setState({
      description
    });
  }

  ratingChanged(rating) {
    this.setState({
      rating
    })
  }

  handleShowError(show) {
    // console.log('handling error');
    this.setState({
      error: show
    })
  }

  render() {
    //console.log('is there an error', this.state.error);
    const error = this.state.error
      ? <ErrorMessage message={this.state.error} showError={(e) => this.handleShowError(null)}/>
      : null;

    return(
      <div className="AddBookmark">
        {error}
        <form className='AddBookmark__form' onSubmit={e => this.handleSubmit(e)}>
          <h1>Add A Bookmark</h1>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Name your bookmark"
            value={this.state.title}
            onChange={e => this.titleChanged(e.target.value)}
          />
          <label htmlFor="url">Url</label>
          <input
            type="text"
            name="url"
            id="url"
            placeholder="Url"
            value={this.state.url}
            onChange={e => this.urlChanged(e.target.value)}
          />
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            id="description"
            placeholder="Describe your bookmark"
            value={this.state.description}
            onChange={e => this.descriptionChanged(e.target.value)}
          />
          <label htmlFor="rating">Rating</label>
          <input
            type="number"
            name="rating"
            id="rating"
            max="5"
            min="1"
            value={this.state.rating}
            onChange={e => this.ratingChanged(e.target.value)}
          />
          <div className="AddBookmark__buttons">
            {/*<button onClick={(e) => this.props.showAddBookmark(false)}>Cancel</button>*/}
            <Link to='/'><button>Cancel</button></Link>
            <button type="submit" >Save</button>
          </div>

        </form>
      </div>
    )
  }
}

export default AddBookmark;

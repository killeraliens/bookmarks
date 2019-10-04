import React, { Component } from 'react';
import './AddBookmark.css';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import {Link} from 'react-router-dom';

class AddBookmark extends Component {
  static defaultProps = {
    handleAddBookmark: () => {}
  }

  state = {
    title: "",
    url: "",
    description: "",
    rating: 1,
    error: null
  }


  handleSubmit(e) {
    e.preventDefault();
    //const newBookmark = (({title, url, description, rating}) => ({title, url, description, rating}))(this.state);
    const {title, url, description, rating} = this.state ;
    const newBookmark = {
      title: title,
      url: url,
      description: description,
      rating: rating
    }
    //const newBookmark = Object.assign({}, )


    const options = {
      method: "POST",
      body: JSON.stringify(newBookmark),
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer $2a$10$jHBJKSk2Pbmf87E0YSjwk.AT3s22WIGNOQsQWcn/qy5Zwz5O3Sr5q"
      }
    };
    const fetchUrl = 'https://tf-ed-bookmarks-api.herokuapp.com/v3/bookmarks';

    fetch(fetchUrl, options)
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
      this.props.history.push('/')
      console.log('data', data)
      this.props.handleAddBookmark(data);
    })
    .catch(err => {
        this.setState({
          error: err.message
        });
    });

  }

  updateState = (e) => {
    const {name, value} = e.target
    let newState = { ...this.state, [name]: value}

    return this.setState(newState)
  }


  handleShowError(show) {
    this.setState({
      error: show
    })
  }

  render() {
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
            <button type="button" onClick={this.props.onClickCancel}>Cancel</button>
            <button type="submit" >Save</button>
          </div>

        </form>
      </div>
    )
  }
}

export default AddBookmark;

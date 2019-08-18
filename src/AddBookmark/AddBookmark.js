import React, { Component } from 'react';
import './AddBookmark.css';

class AddBookmark extends Component {
  render() {
    return(
      <div className="AddBookmark">
        <form className='AddBookmark__form'>
          <h1>Add A Bookmark</h1>
          <label htmlFor="title">Title</label>
          <input type="text" name="title" id="title" placeholder="Name your bookmark"/>
          <label htmlFor="url">Url</label>
          <input type="text" name="url" id="url" placeholder="Url"/>
          <label htmlFor="description">Description</label>
          <textarea name="description" id="description" placeholder="Describe your bookmark"/>
          <label htmlFor="rating">Rating</label>
          <input type="number" name="rating" id="rating" max="5" min="1"/>

          <div className="AddBookmark__buttons">
            <button>Cancel</button>
            <button type="submit">Save</button>
          </div>

        </form>
      </div>
    )
  }
}

export default AddBookmark;

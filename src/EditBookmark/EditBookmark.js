import React, { Component } from 'react';
import BookmarksContext from '../BookmarksContext'

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
  state = {
      title: ``,
      url: ``,
      description: ``,
      rating: 1
  }

  static contextType = BookmarksContext;

  componentDidMount() {
    const { bookmarkId } = this.props.match.params
    //console.log(this.props)
  }

  render() {
    return(
      <div className="EditBookmark">
      </div>
    )
  }
}

export default EditBookmark;

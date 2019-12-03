import React, { Component } from 'react';
import BookmarksContext from '../BookmarksContext'
import NotFound from '../NotFound/NotFound'

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
    // if(!bookmarkId) {
    //   this.setState({notFound: true})
    // }
    //console.log(this.props)
  }

  render() {
    return(
      <div className="EditBookmark">
        <h2>Edit Bookmark</h2>
      </div>
    )
  }
}

export default EditBookmark;

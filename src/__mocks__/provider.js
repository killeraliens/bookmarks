import context from '../testHelpers.js';

export const BookmarksContext = ({
  Consumer(props) {
    return props.children(context)
  }
})

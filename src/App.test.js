import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import { MemoryRouter } from 'react-router';
//import toJson from 'enzyme-to-json'
import App from '../src/App';
import BookmarksList from './BookmarksList/BookmarksList';
import Bookmark from './Bookmark/Bookmark';
import NotFound from './NotFound/NotFound';
import EditBookmark from './EditBookmark/EditBookmark'
import AddBookmark from './AddBookmark/AddBookmark';
import context from './testHelpers'
import BookmarksContext from './BookmarksContext'



describe('App Component', ()=>{

  it('renders without crashing', () => {
    mount(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    )
  })

  it('has classname App', () => {
    const wrapper = mount(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    )
    expect(wrapper.find('div').first().hasClass('App')).to.equal(true)
  })


  it('route / renders BookmarksList component', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/']}>
        <App/>
      </MemoryRouter>
    )
    expect(wrapper.find(BookmarksList)).to.have.lengthOf(1)
  })

  it('route /add-bookmark renders AddBookmark component', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/add-bookmark']}>
        <App />
      </MemoryRouter>
    )
    expect(wrapper.find(AddBookmark)).to.have.lengthOf(1)
  })

  //I would like context injection here so it doesn't fail with id 1 but does with 66
  //(using __mocks__ folder not explicit component imports)
  it('route /edit-bookmark/id renders EditBookmark component', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/edit-bookmark/1']}>
        <App>
          <BookmarksContext.Provider value={context} />
        </App>
      </MemoryRouter>
    )
    expect(wrapper.find(EditBookmark)).to.have.lengthOf(1)
    expect(wrapper.find(NotFound)).to.have.lengthOf(0)

  })

  it('route /nonexistentpaths renders NotFound component', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/nonexistentpath']}>
        <App />
      </MemoryRouter>
    )
    expect(wrapper.find(NotFound)).to.have.lengthOf(1)
  })

})





import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import { expect } from 'chai';
//import {BrowserRouter} from 'react-router-dom';
import { MemoryRouter } from 'react-router';
import toJson from 'enzyme-to-json'
import App from '../src/App';
import Fab from './Fab/Fab'
import BookmarksList from './BookmarksList/BookmarksList';
import NotFound from './NotFound/NotFound';
import EditBookmark from './EditBookmark/EditBookmark'
import Bookmark from './Bookmark/Bookmark'

import BookmarksContext from './BookmarksContext';
import context from './testHelpers'

//jest.mock('./__mocks__/provider');

describe('App Component', ()=>{

  it('mounts without crashing', () => {
    mount(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    )
  })

  it('/ renders BookmarksList ', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    )
    expect(wrapper.find(BookmarksList)).to.have.lengthOf(1)
  })

  it('/nonexistentpaths render NotFound', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/nonexistentpath']}>
        <App />
      </MemoryRouter>
    )
    expect(wrapper.find(NotFound)).to.have.lengthOf(1)
  })


  it('renders an add bookmark Fab upon mount', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/']}>
        <App/>

      </MemoryRouter>
    )
    expect(wrapper.find(Fab)).to.have.lengthOf(1)
  })

  it('renders an add bookmark list with bookmarks upon mount', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    )
    expect(wrapper.find(Bookmark)).to.have.lengthOf(2)
  })

  it('has classname App', () => {
    const wrapper = mount(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    )
    expect(wrapper.find('div').first().hasClass('App')).to.equal(true)
  })


})

describe('EditBookmark component', () => {

  it('renders when passed good bookmark id', () => {
    const bookmarkId = 1
    const wrapper = mount(
      <MemoryRouter initialEntries={[`/edit-bookmark/${bookmarkId}`]}>
        <App>
          {/* <BookmarksContext.Provider context={context} /> */}
        </App>

      </MemoryRouter>
    )

    expect(wrapper.find(EditBookmark)).to.have.lengthOf(1)
    expect(wrapper.find(NotFound)).to.have.lengthOf(0)
  })

  it('renders not found page when passed bad bookmark id', () => {
    const bookmarkId = 666
    const wrapper = mount(
      <MemoryRouter initialEntries={[`/edit-bookmark/${bookmarkId}`]}>
        <App>
          {/* <BookmarksContext.Provider context={context} /> */}
        </App>
      </MemoryRouter>
    )
    expect(wrapper.find(EditBookmark)).to.have.lengthOf(0)
    expect(wrapper.find(NotFound)).to.have.lengthOf(1)
  })
})


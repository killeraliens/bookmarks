import React from 'react';
import ReactDOM from 'react-dom';
//import { BrowserRouter } from 'react-router-dom';
import { MemoryRouter } from 'react-router';
import EditBookmark from './EditBookmark';
import { mount } from 'enzyme'
import App from '../App'
import NotFound from '../NotFound/NotFound'
//import BookmarksContext from '../BookmarksContext';
//import context from '../testHelpers'
//const BookmarksContext = jest.genMockFromModule('provider')
//jest.mock('../__mocks__/provider')

describe.skip('EditBookmark component', () => {

  it('renders when passed good bookmark id', () => {
    const bookmarkId = 1
    const wrapper = mount(
      <MemoryRouter initialEntries={[`/edit-bookmark/${bookmarkId}`]}>
          <App>
            {/* <BookmarksContext.Provider context={context} /> */}
          </App>

      </MemoryRouter>
    )
    expect(wrapper.find(EditBookmark)).toHaveLength(1)
    expect(wrapper.find(NotFound)).toHaveLength(0)
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
    expect(wrapper.find(EditBookmark)).toHaveLength(0)
    expect(wrapper.find(NotFound)).toHaveLength(1)
  })
})




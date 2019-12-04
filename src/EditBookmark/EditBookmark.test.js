import React from 'react';
import ReactDOM from 'react-dom';
//import { BrowserRouter } from 'react-router-dom';
import { MemoryRouter } from 'react-router';
import EditBookmark from './EditBookmark';
import { mount, shallow } from 'enzyme'
import App from '../App'
import NotFound from '../NotFound/NotFound'



describe('EditBookmark component', () => {

  it.skip('renders without crashing', () => {
    mount(
      <MemoryRouter initialEntries={['/edit-bookmark/1']}>
        <EditBookmark />
      </MemoryRouter>
    )
  })
  // it.skip('renders when passed good bookmark id', () => {
  //   const bookmarkId = 1
  //   const wrapper = mount(
  //     <MemoryRouter initialEntries={[`/edit-bookmark/${bookmarkId}`]}>
  //       <App/>
  //     </MemoryRouter>
  //   )
  //   expect(wrapper.find(EditBookmark)).toHaveLength(1)
  //   expect(wrapper.find(NotFound)).toHaveLength(0)
  // })

  // it.skip('renders not found page when passed bad bookmark id', () => {
  //   const badBookmarkId = 666
  //   const wrapper = mount(
  //     <MemoryRouter initialEntries={[`/edit-bookmark/${badBookmarkId}`]}>
  //       <App/>
  //     </MemoryRouter>
  //   )
  //   expect(wrapper.find(EditBookmark)).toHaveLength(0)
  //   expect(wrapper.find(NotFound)).toHaveLength(1)
  // })
})




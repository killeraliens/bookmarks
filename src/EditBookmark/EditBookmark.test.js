import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { MemoryRouter } from 'react-router';
import EditBookmark from './EditBookmark';
import { mount } from 'enzyme'
import App from '../App'

//import { match } from 'react-router';

//const path = `/edit-bookmark/:bookmarkId`;
jest.mock('./EditBookmark');
// const location = createLocation(match.url);

describe('EditBookmark component', () => {
  it('renders when passed good bookmark id', () => {
    const bookmarkId = 1
    const wrapper = mount(
      <MemoryRouter initialEntries={[`/edit-bookmark/${bookmarkId}`]}>
        <App />
      </MemoryRouter>
    )
    expect(wrapper.find(EditBookmark)).toHaveLength(1)
  })

  it('renders not found page when passed bad bookmark id', () => {
    const bookmarkId = 666
    const wrapper = mount(
      <MemoryRouter initialEntries={[`/edit-bookmark/${bookmarkId}`]}>
        <App />
      </MemoryRouter>
    )
    expect(wrapper.find(EditBookmark)).toHaveLength(0)
    //expect(wrapper.find(NotFoundPage)).toHaveLength(1)
  })
})



// describe('EditBookmark component', () => {
//   it('renders without crashing', () => {
//     const wrapper = shallow(<EditBookmark />)
//   })
// })



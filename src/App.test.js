import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import { expect } from 'chai';
//import {BrowserRouter} from 'react-router-dom';
import { MemoryRouter } from 'react-router';
import App from '../src/App';
import Fab from './Fab/Fab'
import BookmarksList from './BookmarksList/BookmarksList';

//jest.mock('./App');

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


  it('renders an add bookmark Fab upon mount', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    )

    expect(wrapper.find(Fab)).to.have.lengthOf(1)
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

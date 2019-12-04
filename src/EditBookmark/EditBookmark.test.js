import React from 'react';
import ReactDOM from 'react-dom';
//import { BrowserRouter } from 'react-router-dom';
import { MemoryRouter } from 'react-router';
import { mount, shallow } from 'enzyme'
import { expect} from 'chai'
import EditBookmark from './EditBookmark';
import App from '../App'
import NotFound from '../NotFound/NotFound'
import { jsxEmptyExpression } from '@babel/types';

//I am using this context because
// import BookmarksContext from '../BookmarksContext'
// import context from '../testHelpers'
jest.mock('../__mocks__/provider')

describe('EditBookmark component', () => {
  const props = {
    match: { params: {}},
    history: { push: () => {}},
  }

  it('renders without crashing', () => {
    mount( <EditBookmark {...props}/>)
  })

  //how to set up tests which test that the params id is pulling up correct form values?
  //Context is what's not working, my BrowserRouter /memoryRouter seems to be affecting..
  it('given context and correct id, it renders form with accurate data', () => {

    const wrapper = mount(
      <MemoryRouter initialEntries={['/edit-bookmark/1']}>
        <App>
          {/* <BookmarksContext.Provider value={context} /> */}
        </App>
      </MemoryRouter>
    )
    expect(wrapper.find(EditBookmark)).to.have.lengthOf(1)
    expect(wrapper.find('input').first().prop('value')).to.equal('Dogs')
  })

  //this pulls up my NotFound in React, but testing is problematic with both Router and Context implementation
  //Context is what's not working
  it('given context and bad id, it renders not found', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/edit-bookmark/666']}>
        <App>
          {/* <BookmarksContext.Provider value={context} /> */}
        </App>
      </MemoryRouter>
    )
    expect(wrapper.find(EditBookmark)).to.have.lengthOf(0)
  })


})




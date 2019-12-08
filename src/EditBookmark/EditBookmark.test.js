import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { MemoryRouter } from 'react-router';
import { mount, shallow } from 'enzyme'
import { expect} from 'chai'
import EditBookmark from './EditBookmark';
import App from '../App'
import NotFound from '../NotFound/NotFound';
//import NotFound from '../NotFound/NotFound'


//  import BookmarksContext from '../BookmarksContext'
//  import context from '../testHelpers'
// I have tried importing/using context with two items above, as well as
// expicitly calling the provider mock file. (in Thinkful lessons, this is not ne)
//jest.mock('../__mocks__/provider')

describe('EditBookmark component', () => {
  const props = {
    match: { params: {}},
    history: { push: () => {}},
  }


  it('renders without crashing', () => {
    shallow( <EditBookmark {...props}/>)
  })

  // beforeEach(() => {
  //   jest.spyOn(global, 'fetch')
  //     .mockImplementation(() =>
  //       Promise.resolve({
  //         ok: true,
  //         json: () => Promise.resolve({
  //           id: 1,
  //           title: "Dogs",
  //           url: "https://memes.com",
  //           rating: 4,
  //           description: "Dogs rule. quas non voluptas. Harum fugit molestias qui. Velit ex animi reiciendis quasi. Suscipit totam delectus ut voluptas aut qui rerum. Non veniam eius molestiae rerum quam.\n \rUnde qui aperiam praesentium alias. Aut temporibus id quidem recusandae voluptatem ut eum. Consequatur asperiores et in quisquam corporis maxime dolorem soluta. Et officiis id est quia sunt qui iste reiciendis saepe. Ut aut doloribus minus non nisi vel corporis. Veritatis mollitia et molestias voluptas neque aspernatur reprehenderit.\n \rMaxime aut reprehenderit mollitia quia eos sit fugiat exercitationem. Minima dolore soluta. Quidem fuga ut sit voluptas nihil sunt aliquam dignissimos. Ex autem nemo quisquam voluptas consequuntur et necessitatibus minima velit. Consequatur quia quis tempora minima. Aut qui dolor et dignissimos ut repellat quas ad."
  //         })
  //       })
  //     )
  // })

  // afterEach(() => {
  //   global.fetch.mockRestore()
  // })

  //Context seems to not be working..
  it('given context and correct id, it renders form with accurate data', (done) => {
    jest.spyOn(global, 'fetch')
      .mockImplementation(() =>
        Promise.resolve({
          ok: true,
          json: () => Promise.resolve({
            id: 1,
            title: "Dogs",
            url: "https://memes.com",
            rating: 4,
            description: "Dogs rule. quas non voluptas. Harum fugit molestias qui. Velit ex animi reiciendis quasi. Suscipit totam delectus ut voluptas aut qui rerum. Non veniam eius molestiae rerum quam.\n \rUnde qui aperiam praesentium alias. Aut temporibus id quidem recusandae voluptatem ut eum. Consequatur asperiores et in quisquam corporis maxime dolorem soluta. Et officiis id est quia sunt qui iste reiciendis saepe. Ut aut doloribus minus non nisi vel corporis. Veritatis mollitia et molestias voluptas neque aspernatur reprehenderit.\n \rMaxime aut reprehenderit mollitia quia eos sit fugiat exercitationem. Minima dolore soluta. Quidem fuga ut sit voluptas nihil sunt aliquam dignissimos. Ex autem nemo quisquam voluptas consequuntur et necessitatibus minima velit. Consequatur quia quis tempora minima. Aut qui dolor et dignissimos ut repellat quas ad."
          })
        })
      )

    const wrapper = mount(
      <MemoryRouter initialEntries={['/edit-bookmark/1']}>
        <App />
      </MemoryRouter>
    )

    process.nextTick(() => {
      wrapper.update()
      expect(wrapper.find(EditBookmark)).to.have.lengthOf(1)
      expect(wrapper.find('input').first().prop('value')).to.equal('Dogs')
      done();
    });
    global.fetch.mockRestore()
  })


  //this pulls up my NotFound in React, but testing is problematic with both Router and Context implementation
  //Context is what's not working
  it('given context and bad id, it renders not found', (done) => {
    jest.spyOn(global, 'fetch')
      .mockImplementation(() =>
        Promise.resolve({
          ok: false,
          json: () => Promise.resolve({
            error: {}
          })

        })
      )

    const wrapper = mount(
      <MemoryRouter initialEntries={['/edit-bookmark/666']}>
        <App>
          {/* <BookmarksContext.Provider value={context} /> */}
        </App>
      </MemoryRouter>
    )

    process.nextTick(() => {
      wrapper.update()
      expect(wrapper.find(NotFound)).to.have.lengthOf(1)
      done()
    })
    global.fetch.mockRestore()
  })


})




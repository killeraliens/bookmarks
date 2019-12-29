export default {
  API_ENDPOINT: process.env.NODE_ENV === 'production'
    ? `https://ancient-sands-43748.herokuapp.com/api/bookmarks`
    : 'http://localhost:8000/api/bookmarks',
  API_KEY: process.env.NODE_ENV === 'production'
    ?  process.env.REACT_APP_API_KEY
    : process.env.API_TOKEN
}

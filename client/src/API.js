function searchMovies(search, callback) {
  return fetch(`/api/search?s=${search}`, {
    accept: 'application/json'
  }).then(parseJSON)
    .then(callback)
    .catch((error) => console.error(error.message));
}

function parseJSON(response) {
  return response.json();
}

const API = {searchMovies};
export default API;

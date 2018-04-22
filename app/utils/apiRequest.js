import axios from 'axios';

const request = axios.create({
  baseURL: 'http://localhost:3011/',
});

function parseJSON(response) {
  if (response.data instanceof Object) {
    return response.data;
  }

  const error = new Error('Unknown data');
  error.response = response;
  throw error;
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

function checkStatusJSON(response) {
  if (!response.bOk) {
    const error = new Error(response.message);
    error.response = response;
    throw error;
  }

  return response;
}

export function post(url = '/', data = {}, options = {}) {
  return request({
    json: true,
    method: 'post',
    url,
    data,
    ...options,
  })
  .then(checkStatus)
  .then(parseJSON)
  .then(checkStatusJSON);
}

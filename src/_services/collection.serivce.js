import config from "config";
import { authHeader } from "../_helpers";

export const collectionService = {
  create,
  get,
  getById,
  update,
  delete: _delete,
};

function create(collection) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json", ...authHeader() },
    body: JSON.stringify(collection),
  };

  return fetch(
    `${config.apiUrl}/restaurantcollection/v1/`,
    requestOptions
  ).then(handleResponse);
}

function get() {
  const requestOptions = {
    method: "GET",
    headers: authHeader(),
  };

  return fetch(
    `${config.apiUrl}/restaurantcollection/v1/`,
    requestOptions
  ).then(handleResponse);
}

function getById(id) {
  const requestOptions = {
    method: "GET",
    headers: authHeader(),
  };

  return fetch(
    `${config.apiUrl}/restaurantcollection/v1/${id}`,
    requestOptions
  ).then(handleResponse);
}

function update(collection) {
  const requestOptions = {
    method: "PUT",
    headers: { ...authHeader(), "Content-Type": "application/json" },
    body: JSON.stringify(collection),
  };

  return fetch(
    `${config.apiUrl}/restaurantcollection/${collection.id}`,
    requestOptions
  ).then(handleResponse);
}

function _delete(id) {
  const requestOptions = {
    method: "DELETE",
    headers: authHeader(),
  };

  return fetch(
    `${config.apiUrl}/restaurantcollection/${id}`,
    requestOptions
  ).then(handleResponse);
}

function handleResponse(response) {
  return response.text().then((text) => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        // auto logout if 401 response returned from api
        logout();
        // location.reload(true);
      }
      console.log({ data });
      const error =
        (data && JSON.stringify(data.errors)) || response.statusText;
      return Promise.reject(error);
    }
    console.log({ data });
    return data;
  });
}

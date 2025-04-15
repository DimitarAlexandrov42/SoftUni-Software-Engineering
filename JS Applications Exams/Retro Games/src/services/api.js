import { getUserData, deleteUserData } from "../services/utils.js";

const request = async (method, url, data) => {
  let user = getUserData();

  let options = {
    method,
    headers: {},
  };

  if (user) {
    options.headers["X-Authorization"] = user.accessToken;
  }

  if (data) {
    options.headers["content-type"] = "application/json";
    options.body = JSON.stringify(data)
  }

  let response = await fetch(url, options);

  if (!response.ok) {
    if (response.status == 403) {
      deleteUserData();
    }
    throw response;
  }
  if (response.status == 204) {
    return null;
  }

  return response
};

export const get = request.bind(null, "GET");
export const post = request.bind(null, "POST");
export const put = request.bind(null, "PUT");
export const del = request.bind(null, "DELETE");

import { notificationMsg } from "../views/notificationMsg.js";
import { getUserData,deleteUserData } from "./utils.js";

const request = async (method, url, data) => {
  let user = getUserData();

  let options = {
    method,
    headers: {},
  };

  if (data != undefined) {
    options.headers["content-type"] = "application/json";
    options.body = JSON.stringify(data);
  }

  if (user) {
    options.headers["X-Authorization"] = user.accessToken;
  }


  try {

  
  const response = await fetch(url, options);
  

  if (!response.ok) {
    if (response.status == 403) {
      deleteUserData();
    }
    throw response;
  }

  if(response.status == 204){
    return null
  }

  return response
  }catch(err){
    notificationMsg(err.message)
    throw err
  }
};


export const get = request.bind(null,"GET")
export const post = request.bind(null,"POST")
export const put = request.bind(null,"PUT")
export const del = request.bind(null,"DELETE")
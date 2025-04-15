import {post,get} from './api.js'
import { setUserData } from './utils.js';


export const login = async ({ email, password }) => {
    const host = `http://localhost:3030/users/login`;
    const response = await post(host, { email, password });
    const result = await response.json();
    setUserData(result);
    return result;
  };
  
  export const register = async ({ email, password }) => {
    const host = `http://localhost:3030/users/register`;
    const response = await post(host, { email, password });
    const result = await response.json();
    setUserData(result);
    return result;
  };
  
  export const logout = async () => {
    const host = `http://localhost:3030/users/logout`;
    await get(host);
  };
  
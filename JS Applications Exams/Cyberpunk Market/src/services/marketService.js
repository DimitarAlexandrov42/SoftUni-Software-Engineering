import { get,post,put,del } from "./api.js";

export const loadAllItems = async () => {
  const host = `http://localhost:3030/data/cyberpunk?sortBy=_createdOn%20desc`;
  const response = await get(host);
  const result = await response.json();
  return result;
};

export const addItem = async (data) => {
  const host = `http://localhost:3030/data/cyberpunk`;
  await post(host, data);
};

export const loadOnlyOneItem = async (id) => {
  const host = `http://localhost:3030/data/cyberpunk/${id}`;
  const response = await get(host);
  const result = await response.json();
  return result;
};

export const updateItem = async (id, data) => {
  const host = `http://localhost:3030/data/cyberpunk/${id}`;
 const response =  await put(host, data);
 const result = await response.json()
 return result
};

export const deleteRecord = async(id)=>{
  const host = `http://localhost:3030/data/cyberpunk/${id}`
   await del(host)
}

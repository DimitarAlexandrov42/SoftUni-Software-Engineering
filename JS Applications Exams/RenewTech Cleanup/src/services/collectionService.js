import { get, post, put, del } from "./api.js";

export const loadAllSolutions = async () => {
  const host = `http://localhost:3030/data/solutions?sortBy=_createdOn%20desc`;
  const response = await get(host);
  const result = await response.json();
  return result;
};

export const loadSolution = async (data) => {
  const host = `http://localhost:3030/data/solutions`;
  await post(host, data);
};

export const loadOnlyOneSolution = async (id) => {
  const host = `http://localhost:3030/data/solutions/${id}`;
  const response = await get(host);
  const result = await response.json();
  return result;
};

export const updateSolution = async (id, data) => {
  const host = `http://localhost:3030/data/solutions/${id}`;
  await put(host, data);
};

export const deleteSolutions = async (id) => {
  const host = `http://localhost:3030/data/solutions/${id}`;
  await del(host);
};

//===========================================================//

export const like = async (solutionId) => {
  const host = `http://localhost:3030/data/likes`;
  const response = await post(host, {solutionId});
  const result = await response.json();
  return result;
};

export const totalLikes = async (solutionId) => {
  const host = `http://localhost:3030/data/likes?where=solutionId%3D%22${solutionId}%22&distinct=_ownerId&count`;
  const response = await get(host);
  const result = await response.json();
  return result;
};

export const isLiked = async (solutionId, userId) => {
  const host = `http://localhost:3030/data/likes?where=solutionId%3D%22${solutionId}%22%20and%20_ownerId%3D%22${userId}%22&count`;
  const response = await get(host);
  const result = response.json();
  return result;
};

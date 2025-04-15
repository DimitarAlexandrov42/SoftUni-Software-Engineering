import { get, post, put, del } from "../services/api.js";

export const loadAllGames = async () => {
  const host = `http://localhost:3030/data/games?sortBy=_createdOn%20desc`;
  const response = await get(host);
  const result = await response.json();
  return result;
};

export const loadGame = async (data) => {
  const host = `http://localhost:3030/data/games`;
  await post(host, data);
};

export const loadOnlyOneGame = async (id) => {
  const host = `http://localhost:3030/data/games/${id}`;
  const response = await get(host);
  const result = await response.json();
  return result;
};

export const updateGame = async (id, data) => {
  const host = `http://localhost:3030/data/games/${id}`;
  await put(host, data);
};

export const deleteGame = async (id) => {
  const host = `http://localhost:3030/data/games/${id}`;
  await del(host);
};

//===========================================================//

export const like = async (gameId) => {
  const host = `http://localhost:3030/data/likes`;
  const response = await post(host, {gameId});
  const result = await response.json();
  return result;
};

export const totalLikes = async (gameId) => {
  const host = `http://localhost:3030/data/likes?where=gameId%3D%22${gameId}%22&distinct=_ownerId&count`;
  const response = await get(host);
  const result = await response.json();
  return result;
};

export const isLiked = async (gameId, userId) => {
  const host = `http://localhost:3030/data/likes?where=gameId%3D%22${gameId}%22%20and%20_ownerId%3D%22${userId}%22&count`;
  const response = await get(host);
  const result = response.json();
  return result;
};

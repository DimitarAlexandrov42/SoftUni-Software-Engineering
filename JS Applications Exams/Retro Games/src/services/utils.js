const userData = `userData`;

export const getUserData = () => {
  const user = localStorage.getItem(userData);
  if (user) {
    return JSON.parse(user);
  }
};

export const deleteUserData = () => {
  localStorage.removeItem(userData);
};

export const setUserData = (user) => {
  localStorage.setItem(userData, JSON.stringify(user));
};

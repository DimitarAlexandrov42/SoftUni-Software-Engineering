let user = "userData";

export const getUserData = () => {
  let currentUser = localStorage.getItem(user);
  if (currentUser) {
    return JSON.parse(currentUser);
  }
};

export const deleteUserData = () => {
  localStorage.removeItem(user);
};

export const setUserData = (userData) => {
  localStorage.setItem(user, JSON.stringify(userData));
};

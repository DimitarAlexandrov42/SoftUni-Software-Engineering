import { logout } from "../services/authService.js";
import { deleteUserData } from "../services/utils.js";

export const logoutView = async (ctx) => {
  await logout();
  deleteUserData();
  ctx.page.redirect('/')
};

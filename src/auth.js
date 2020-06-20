const getToken = () => {
  return localStorage.getItem("token");
};

const isLoggedIn = () => {
  if (getToken()) return true;
  return false;
};

const logout = () => {
  if (getToken()) localStorage.removeItem("token");
};

const login = (token) => {
  localStorage.setItem("token", token);
};

export { isLoggedIn, getToken, logout, login };

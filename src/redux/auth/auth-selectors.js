const getIsLoggedIn = state => state.auth.isLoggedIn;

const getUserName = state => state.auth.name;

const getIsRegistered = state => state.auth.isRegistered;

const authSelectors = {
  getIsLoggedIn,
  getUserName,
  getIsRegistered,
};

export default authSelectors;

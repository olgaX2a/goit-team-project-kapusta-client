const getIsLoggedIn = state => state.auth.isLoggedIn;

const getUserName = state => state.auth.name;

const getIsRegistered = state => state.auth.isRegistered;

const getIsFetchingCurrentUser = state => state.auth.isFetchingCurrentUser;

const getUserBalance = state => state.auth.balance;

const authSelectors = {
  getIsLoggedIn,
  getUserName,
  getIsRegistered,
  getIsFetchingCurrentUser,
  getUserBalance,
};

export default authSelectors;

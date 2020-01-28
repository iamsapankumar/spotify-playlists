import React from 'react';

const noop = () => {};

export default React.createContext(
  {
    isAuthenticated: false,
    token: '',
    currentUser: null,
    authenticate: noop,
    logout: noop,
    rehydrated: false,
  },
);

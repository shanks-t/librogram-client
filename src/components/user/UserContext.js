import React from 'react';

const CurrentUserContext = React.createContext(null);

const useCurrentUser = () => React.useContext(CurrentUserContext);

const CurrentUserProvider = ({ value, children }) => {
    return (
      <CurrentUserContext.Provider value={value}>
        {children}
      </CurrentUserContext.Provider>
    );
  };
  
  export { CurrentUserProvider, useCurrentUser };

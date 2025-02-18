// context/AppContext.js
import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [basename, setBasename] = useState("DefaultName");

  return (
    <AppContext.Provider value={{ basename, setBasename }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};

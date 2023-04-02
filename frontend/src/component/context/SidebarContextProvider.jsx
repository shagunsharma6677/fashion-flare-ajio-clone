import React from "react";
import axios from "axios";

export const SidebarContext = React.createContext();

export default function SidebarContextProvider({ children }) {

  const getCartItems = async () => {
    let res = await axios.get(`https://ajio-qvwt.onrender.com/data`);
  };

  React.useEffect(() => {
    getCartItems();
  }, []);

  const [login,setLogin] = React.useState(false);
  const [cartLength, setCartLength] = React.useState(0);

  return (
    <SidebarContext.Provider
      value={{
        login,setLogin,
        getCartItems,
        cartLength,
        setCartLength,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
}
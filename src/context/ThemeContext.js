import { createContext, useReducer } from "react";
const ThemeContexttt = createContext();

const initialData = { theme: localStorage.getItem("theme") || "light" };
const reducer = (firstState , action) => {
  switch (action.type) {
    case "CHANGE_THEME":
      return { ...firstState, theme: action.newValue };
  
    default:
      break;
  }
}

export function ThemeProvider({ children }) {
  const [firstState, dispatch] = useReducer(reducer, initialData);
  const changeName = (newName) => {
    localStorage.setItem("theme" , newName)

    dispatch({ type: "CHANGE_THEME", newValue: newName });
  };
  return (
     <ThemeContexttt.Provider value={{ ...firstState , changeName}}>
      {children}
     </ThemeContexttt.Provider>
  );
}

export default ThemeContexttt;
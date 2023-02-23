import React from "react";
import { BrowserRouter as Router} from "react-router-dom";
import Home from "./Home";

export const CrudContext = React.createContext()
export default function App() {
  return(
    <Router>
      <CrudContext.Provider value={['name','categorie','prix','quanity']}>
        <Home/>
      </CrudContext.Provider>
    </Router>
  )
}
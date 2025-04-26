import React from "react";
import Counter from "./Components/Counter";
import Theme from "./Components/Theme";
import { useSelector } from "react-redux";
import "./App.css";

const App = () => {
  const theme = useSelector((state) => state.theme);

  return (
    <div
      className={theme === "light" ? "light_theme" : "dark_theme"}
      style={{ paddingLeft: "100px", height: "390px", textAlign: "center" }}
    >
      <Theme />
      <Counter />

      <style>{`

         
        .light_theme {
          background-color: white;
          color: black;
         
         
        }
        .dark_theme {
          background-color: #121212;
          color: white;
           width:94%;
           height:350px;

        
        }


       
      `}</style>
    </div>
  );
};

export default App;

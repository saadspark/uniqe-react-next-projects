import React, { useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import "./App.css";

const App = () => {
  useEffect(() => {
    alanBtn({
      key: "00733fc7540b4a30ff0e111f201378d42e956eca572e1d8b807a3e2338fdd0dc/stage",
      onCommand: ({ command, articles }) => {
        console.log("Command received:", command);
        console.log("Articles:", articles);

        if (command === "newHeadline") {
          console.log("New headlines received:", articles);
        }
      },
    });
  }, []);

  return (
    <>
      <h1>Saad</h1>
    </>
  );
};

export default App;

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import HandleCounter from "./RenderProps/HandleCounter";
import ClickCounter from "./RenderProps/ClickCounter";
import HoverCounter from "./RenderProps/HoverCounter";
import ShowMessage from "./RenderProps/ShowMessage";


function App() {
  return (
    <>
      <HandleCounter
        render={(count, incrementCount, decrementCount, resetCount) => (
          <ClickCounter
            count={count}
            incrementCount={incrementCount}
            decrementCount={decrementCount}
            resetCount={resetCount}
          />
        )}
      />

      <hr />
      <br />
      <HandleCounter
        render={(count, incrementCount, decrementCount, resetCount) => (
          <HoverCounter
            count={count}
            incrementCount={incrementCount}
            decrementCount={decrementCount}
            resetCount={resetCount} />)} />

      <br />
      <hr />
      <HandleCounter hello={"hello from HandleCounter"}
        sayHello={
          () => {
            return <ShowMessage msg="hello from function" />
          }} />

    </>


  );
}

export default App;

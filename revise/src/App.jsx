import "./App.css";
import ClickCounter from "./Components/ClickCounter";
import HoverCounter from "./Components/HoverCounter";
import HandleCounter from "./Components/HandleCounter";
import ShowMessage from "./Components/ShowMessage";

function App() {
  return (
    <>
      {/* Using Render Props with ClickCounter */}
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

      {/* Using Render Props with HoverCounter */}
      <HandleCounter
        render={(count, incrementCount, decrementCount, resetCount) => (
          <HoverCounter
            count={count}
            incrementCount={incrementCount}
            decrementCount={decrementCount}
            resetCount={resetCount}
          />
        )}
      />

      {/* Optional example of ShowMessage usage */}
      <ShowMessage msg="Render Props Example Working Successfully!" />
    </>
  );
}

export default App;

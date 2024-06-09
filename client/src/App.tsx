import { useState } from "react";
import { GlobalContext } from "./GlobalContext";
import Router from "./Router";

function App() {
  const [count, setCount] = useState<number>(0);
  return (
    <GlobalContext.Provider value={{ count, setCount }}>
      <Router />
    </GlobalContext.Provider>
  );
}

export default App;

import { useContext } from "react";
import { Context } from "./Context/ContextApi";
function App() {
  const ContextState = useContext(Context);
  console.log("Context", ContextState);
  
}
export default App;

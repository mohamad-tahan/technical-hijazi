import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} ></Route>
      </Routes>
    
    </div>
    </BrowserRouter>
  );
}

export default App;

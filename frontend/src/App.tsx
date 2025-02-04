import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Signup } from "./pages/Signup";
import { Signin } from "./pages/Signin";
import { Poem } from "./pages/Poem";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/poem" element={<Poem />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

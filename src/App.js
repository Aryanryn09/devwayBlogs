import React from "react";
import "./app.css";
import Signup from "./components/pages/Signup/Signup";
// import Homee from "./components/pages/Home/Homee";
import Navbar from "./components/topbar/Navbar";
import Scratch from "./components/Scratch/Scratch";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/pages/Login/Login";
import Create from "./components/Create/Create";
// import Single from "./components/Single/Single";
import Post from "./components/Posts/Post";
function App() {
  const user = true;
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Scratch />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/login" element={user ? <Login /> : <Scratch />} />
          <Route path="/create" element={user ? <Create /> : <Scratch />} />
          <Route path="/post/:postId" element={<Post />} />
          {/* <Route path="/p" element={<Single />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;

import Navbar from "./Navbar"
import Gallery from "./pages/Gallery"
import Home from "./pages/Home"
import About from "./pages/About us"
import Committee from "./pages/Committee"
import Member from "./pages/Member"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/Committee" element={<Committee />} />
          <Route path="/Member" element={<Member/>} />
          <Route path="/about us" element={<About us />} />
          <Route path="/Home" element={<Home />} />
        </Routes>
      </div>
    </>
  )
}

export default App

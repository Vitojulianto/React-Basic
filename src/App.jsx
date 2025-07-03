import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home"
import Setup from "./pages/Setup"
import Hooks from "./pages/Hooks"
import ReactBasics from "./pages/ReactBasics"
import "./index.css"

function App() {
  return (
    <Router>
      <div>
        <nav className="bg-cherry text-black p-4 shadow-md flex justify-center gap-8 text-lg font-semibold">
          <Link to="/" className="hover:text-yellow-200">🏠 Home</Link>
          <Link to="/setup" className="hover:text-yellow-200">⚙️ Setup</Link>
          <Link to="/hooks" className="hover:text-yellow-200">🤖 useState</Link>
          <Link to="/basics" className="hover:text-yellow-200">📚 React Basics</Link>

        </nav>
        <div className="max-w-3xl mx-auto p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/setup" element={<Setup />} />
            <Route path="/hooks" element={<Hooks />} />
            <Route path="/basics" element={<ReactBasics />} />

          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css'
import Landing from "./compound/landing";


function App() {

  return (
        <div>
          <Router>
                <Routes>
                    <Route path="/" element={<Landing />}></Route>
                </Routes>
            </Router>
        </div>
  )
}

export default App

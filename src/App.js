 
import './App.css';
import Home from "./components/Home/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route 
} from "react-router-dom";
import Navbar from './components/Home/Navbar/Navbar';

function App() {
  return (
    <div className="app">
    <Router>

      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Home />} />
          {/* <Route path="blogs" element={<Blogs />} />  */}
        </Route>
      </Routes>
    </Router>
    </div>
  );
}

export default App;

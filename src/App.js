 
import './App.css'; 
import {
  BrowserRouter as Router,
   
} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Gallery from './components/Gallery/Gallery';
 function App() {
  return (
    <div className="app">
    <Router>

      <Navbar/>
      {/* <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Home />} />
          {/* <Route path="blogs" element={<Blogs />} />  
        </Route>
      </Routes> */} 
      <Home /> 
      <Gallery/>
    </Router>
    </div>
  );
}

export default App;

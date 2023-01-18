import './App.css';
import Home from './screens/Home.jsx'
import EditEntry from './screens/EditEntry.jsx';
import CreateEntry from './screens/CreateEntry';
import AllArt from './screens/AllArt';
import ArtDetail from './screens/ArtDetail.jsx'
import Navbar from './components/Nav.jsx'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/all" element={<AllArt />} />
          <Route path="/art/:id" element={<ArtDetail />} />
          <Route path="/create-entry" element={<CreateEntry />} />
          <Route path="/edit-entry" element={<EditEntry />} />
        </Routes>
        </Router>
        </div>
  );
}

export default App;

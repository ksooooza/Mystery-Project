import './App.css';
import Home from './screens/Home.jsx'
import EditEntry from './screens/EditEntry.jsx';
import UpdateEntry from './screens/UpdateEntry.jsx';
import DeleteEntry from './screens/DeleteEntry.jsx';
import CreateEntry from './screens/CreateEntry';
import Navbar from './components/Nav.jsx'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-entry" element={<CreateEntry />} />
          <Route path="/update-entry" element={<UpdateEntry />} />
          <Route path="/edit-entry" element={<EditEntry />} />
          <Route path="/delete-entry" element={<DeleteEntry />} />
        </Routes>
        </Router>
        </div>
  );
}

export default App;

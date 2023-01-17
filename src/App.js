import './App.css';
import Home from './screens/Home.jsx'
import EditEntry from './screens/EditEntry.jsx';
import DeleteEntry from './screens/DeleteEntry.jsx';
import CreateEntry from './screens/CreateEntry';
import Nav from './components/Nav.jsx'
import { Route, Routes } from 'react'


function App() {
 

  return (
    <div className="App">
      <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/edit-entry" element={<EditEntry />} />
          <Route path="/delete-entry" element={<DeleteEntry />} />
          <Route path="/create-entry" element={<CreateEntry />} />
        </Routes>
        </div>
  );
}

export default App;

import './App.css';
import Modal from './Modal.js'
import Art from './Art.jsx';
import { useState } from 'react'

function App() {
  const [ openModal, setOpenModal ] = useState(false);
  const [ art, setArt ] = useState("");

  return (
    <div className="App">
    <h1>The Met Museum API</h1>
    <Art setArt={setArt} setOpenModal={setOpenModal}/>
    {openModal && <Modal art={art} closeModal={setOpenModal}/>}
  </div>
  );
}

export default App;

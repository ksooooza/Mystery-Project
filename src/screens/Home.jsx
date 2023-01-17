import React, { useState } from 'react'
import Modal from '../components/Modal.js'
import Art from '../screens/Art.jsx'


function Home() {
    const [ openModal, setOpenModal ] = useState(false);
    const [ art, setArt ] = useState("");

  return (
    <div>
      <h1>The Met Museum API</h1>
         <Art setArt={setArt} setOpenModal={setOpenModal}/>
        {openModal && <Modal art={art} closeModal={setOpenModal}/>}
  </div>
  )
}

export default Home;

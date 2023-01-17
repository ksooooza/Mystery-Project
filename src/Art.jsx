import React, { useState, useEffect } from 'react'

function Art({setArt, setOpenModal}) {
    const [ artworks, setArtworks ] = useState([])

    useEffect(() => {
        getArt()
    }, [])

    function getArt() {
        fetch('https://metmuseumapi-production.up.railway.app/museum')
        .then((res) => res.json())
        .then(data => setArtworks(data))
        .catch((err) => console.log("Oops something went wrong", err))
    }

    function handleClick(art){
        setArt(art)
        setOpenModal(true)
    }

    return(
        <div>
        {artworks.map((art) => (
            <button className="buttons" key={art.title} onClick={() => handleClick(art.title)} style={{ backgroundImage: {art}}}>{art.title}</button>
            ))}
        </div>
    )
}

export default Art;
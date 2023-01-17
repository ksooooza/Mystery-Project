import {useState, useEffect} from 'react';
import axios from 'axios';

function Modal({ closeModal, artworks }) {
    const [image, setImage] = useState("")
    const [artStats, setArtStats] = useState([])

    useEffect(()=>{
        fetchArt()
    }, [])

    async function fetchArt(){
        const artResponse = await axios(`https://metmuseumapi-production.up.railway.app/museum`)
        //console.log(artResponse)
        
        let filteredStats = {
            Title: artResponse.data[9].title,
            Date: artResponse.data[9].objectDate,
            Medium: artResponse.data[9].medium,
            Culture: artResponse.data[9].culture,
            Department: artResponse[9].department

        }

        setImage(artResponse.data[9].primaryImage)
        setArtStats(filteredStats)
    }

            return (
                <div className="modalBackground">
                <div className="modalContainer">
                <button onClick={() => closeModal(false)}>X</button>
                <div className="title"><h2>{artworks}</h2></div>
                <div className="body">
                    <img src={image}></img>
                    <p>Title: {artStats.Title}
                    <br />
                    Date: {artStats.Date}
                    <br />
                    Medium: {artStats.Medium}
                    <br />
                    Culture: {artStats.Culture}
                    <br />
                    Department: {artStats.Department}
                    </p>
                </div>
                </div>
                </div>
            )
}

export default Modal;
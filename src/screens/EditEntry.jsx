import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { updateArt, getArt } from '../services/art.js'

function EditEntry() {
        const [ artwork, setArtwork ] = useState({
            objectID: Number,
            isHighlight: Boolean,
            accessionNumber: "",
            isPublicDomain: Boolean,
            primaryImage: "",
            department: "",
            objectName: "",
            title: "",
            culture: "",
            period: "",
            objectDate: "",
            objectBeginDate: Date,
            objectEndDate: Date,
            medium: "",
            __v: Number
        })
        
        let { id } = useParams();
        let navigate = useNavigate();

        useEffect(() => {
            fetchArt();
        }, [])

        async function fetchArt() {
            let artwork = await getArt(id);
            setArtwork(artwork)
        }
    
        const handleSubmit = async (e) => {
            e.preventDefault();
            await updateArt(id, artwork);
            navigate(`/`, { replace: true})
        };
    
        const handleChange = (e) => {
            const { value, name } = e.target;
    
            setArtwork((prev) => ({
                ...prev,
                [name]: value
            }))
        };
    
      return (
        <div>
          <h1>Edit Entry</h1>
          <form className="create-form" onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column', maxWidth: 400}}>
                <input 
                type="text" 
                placeholder="Enter your Object ID" 
                name="objectID" 
                value={artwork.objectID} 
                onChange={handleChange}
                />
                <input 
                type="text" 
                placeholder="Enter your Highlight" 
                name="isHighlight" 
                value={artwork.isHighlight} 
                onChange={handleChange}
                />
                <input 
                type="text" 
                placeholder="Enter your Accession Number" 
                name="accessionNumber" 
                value={artwork.accessionNumber} 
                onChange={handleChange}
                />
                <input 
                type="text" 
                placeholder="Enter your Public Domain Value" 
                name="isPublicDomain" 
                value={artwork.isPublicDomain} 
                onChange={handleChange}
                />
                <input 
                type="text" 
                placeholder="Enter your Department" 
                name="department" 
                value={artwork.department} 
                onChange={handleChange}
                />
                <input 
                type="text" 
                placeholder="Enter your Object Name" 
                name="objectName" 
                value={artwork.objectName} 
                onChange={handleChange}
                />
                <input 
                type="text" 
                placeholder="Enter your Title" 
                name="title" 
                value={artwork.title} 
                onChange={handleChange}
                />
                <input 
                type="text" 
                placeholder="Enter your Culture" 
                name="culture" 
                value={artwork.culture} 
                onChange={handleChange}
                />
                <input 
                type="text" 
                placeholder="Enter your Period" 
                name="period" 
                value={artwork.period} 
                onChange={handleChange}
                />
                <input 
                type="text" 
                placeholder="Enter your Object Date" 
                name="objectDate" 
                value={artwork.objectDate} 
                onChange={handleChange}
                />
                <input 
                type="text" 
                placeholder="Enter your Object Begin Date" 
                name="objectBeginDate" 
                value={artwork.objectBeginDate} 
                onChange={handleChange}
                />
                <input 
                type="text" 
                placeholder="Enter your Object End Date" 
                name="objectEndDate" 
                value={artwork.objectEndDate} 
                onChange={handleChange}
                />
                <input 
                type="text" 
                placeholder="Enter your Medium" 
                name="medium" 
                value={artwork.medium} 
                onChange={handleChange}
                />
                <input 
                type="text" 
                placeholder="Enter your Version" 
                name="__v" 
                value={artwork.__v} 
                onChange={handleChange}
                />
                <button type="submit">Edit your art</button>
          </form>
        </div>
      )
}

export default EditEntry;
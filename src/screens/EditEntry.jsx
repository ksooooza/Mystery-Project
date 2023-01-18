import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { updateArt, getArt } from '../services/art.js'

function EditEntry() {
        const [ art, setArt ] = useState({
            _id: "",
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
            setArt(artwork)
        }
    
        const handleSubmit = async (e) => {
            e.preventDefault();
            await updateArt(art);
            navigate(`/${art._id}`, { replace: true})
        };
    
        const handleChange = (e) => {
            const { value, name } = e.target;
    
            setArt((prev) => ({
                ...prev,
                [name]: value
            }))
        };
    
      return (
        <div>
          <h1>Edit Entry</h1>
          <form className="create-form" onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Enter your ID" 
                name="_id" 
                value={art._id} 
                onChange={handleChange}
                />
                <input 
                type="text" 
                placeholder="Enter your Object ID" 
                name="objectID" 
                value={art.objectID} 
                onChange={handleChange}
                />
                <input 
                type="text" 
                placeholder="Enter your Highlight" 
                name="isHighlight" 
                value={art.isHighlight} 
                onChange={handleChange}
                />
                <input 
                type="text" 
                placeholder="Enter your Accession Number" 
                name="accessionNumber" 
                value={art.accessionNumber} 
                onChange={handleChange}
                />
                <input 
                type="text" 
                placeholder="Enter your Public Domain Value" 
                name="isPublicDomain" 
                value={art.isPublicDomain} 
                onChange={handleChange}
                />
                <input 
                type="text" 
                placeholder="Enter your Department" 
                name="department" 
                value={art.department} 
                onChange={handleChange}
                />
                <input 
                type="text" 
                placeholder="Enter your Object Name" 
                name="objectName" 
                value={art.objectName} 
                onChange={handleChange}
                />
                <input 
                type="text" 
                placeholder="Enter your Title" 
                name="title" 
                value={art.title} 
                onChange={handleChange}
                />
                <input 
                type="text" 
                placeholder="Enter your Culture" 
                name="culture" 
                value={art.culture} 
                onChange={handleChange}
                />
                <input 
                type="text" 
                placeholder="Enter your Period" 
                name="period" 
                value={art.period} 
                onChange={handleChange}
                />
                <input 
                type="text" 
                placeholder="Enter your Object Date" 
                name="objectDate" 
                value={art.objectDate} 
                onChange={handleChange}
                />
                <input 
                type="text" 
                placeholder="Enter your Object Begin Date" 
                name="objectBeginDate" 
                value={art.objectBeginDate} 
                onChange={handleChange}
                />
                <input 
                type="text" 
                placeholder="Enter your Object End Date" 
                name="objectEndDate" 
                value={art.objectEndDate} 
                onChange={handleChange}
                />
                <input 
                type="text" 
                placeholder="Enter your Medium" 
                name="medium" 
                value={art.medium} 
                onChange={handleChange}
                />
                <input 
                type="text" 
                placeholder="Enter your Version" 
                name="__v" 
                value={art.__v} 
                onChange={handleChange}
                />
                <button type="submit">Edit your art</button>
          </form>
        </div>
      )
}

export default EditEntry;
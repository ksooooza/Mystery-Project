import { useState } from 'react';
import { deleteArt } from '../services/art.js';
import { Link, useParams, useNavigate } from 'react-router-dom';


function ArtDetail() {
    const [ art, setArt] = useState({});

    let { id } = useParams();
    let navigate = useNavigate();

    async function handleDelete() {
        await deleteArt(id);
        navigate("/", { replace: true })
    }
  return (
    <div>
      <p>{art._id}</p>
      <p>{art.objectID}</p>
      <p>{art.isHighlight}</p>
      <p>{art.accessionNumber}</p>
      <p>{art.isPublicDomain}</p>
      <p>{art.department}</p>
      <p>{art.objectName}</p>
      <p>{art.title}</p>
      <p>{art.culture}</p>
      <p>{art.period}</p>
      <p>{art.objectDate}</p>
      <p>{art.objectBeginDate}</p>
      <p>{art.objectEndDate}</p>
      <p>{art.medium}</p>
      <p>{art.__v}</p>
    <div>
    <Link to={`/${id}`}>
        <button>Edit Art</button>
    </Link>
    <button onClick={handleDelete}>Delete Art</button>
    </div>
    </div>
  );
}

export default ArtDetail;
import Art from '../components/Art.jsx';
import { useEffect, useState } from 'react';
import { getArt } from "../services/art.js";

export default function AllArt() {
    const [ art, setArt ] = useState([]);

    useEffect(() => {
        fetchArt();
    }, []);

    async function fetchArt() {
        const allArt = await getArt();
        setArt(allArt);
    }
  return (
    <div>
        <h1>All Art</h1>
            {art.map((artData) => (
                <Art art={artData} key={artData._id} />
            ))}
    </div>
  )
}

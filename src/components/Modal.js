//import { deleteArt } from "../services/art.js";
import { useNavigate, useParams } from 'react-router-dom';

function Modal({ closeModal, art }) {

    let navigate = useNavigate()
    

    function handleNav() {
        navigate(`/art/${art._id}`, { replace: true})
    }

    return (
        <div className="modalBackground">
        <div className="modalContainer">
        <button onClick={() => closeModal(false)}>X</button>
        <div className="title"><h2>{art.title}</h2></div>
        <div className="body">
            <img src={art.primaryImage} alt="Artwork" style={{maxHeight: 200}}></img>
            <p>Title: {art.title}
            <br />
            Date: {art.objectDate}
            <br />
            Medium: {art.medium}
            <br />
            Culture: {art.culture}
            <br />
            Department: {art.department}
            </p>
        </div>
        <button onClick={handleNav}>More details</button>
        </div>
        </div>
    )
}

export default Modal;
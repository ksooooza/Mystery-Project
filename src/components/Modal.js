
function Modal({ closeModal, art }) {
    return (
        <div className="modalBackground">
        <div className="modalContainer">
        <button onClick={() => closeModal(false)}>X</button>
        <div className="title"><h2>{art.title}</h2></div>
        <div className="body">
            <img src={art.primaryImage}></img>
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
        </div>
        </div>
    )
}

export default Modal;
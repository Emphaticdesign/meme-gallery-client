import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import './Meme.css';

const Meme = ({ meme }) => {
    const deleteService = id => {
        fetch(`https://sheltered-lake-22038.herokuapp.com/deleteMeme/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(result => {
            console.log('deleted success')
        })
        window.location.reload(false);
    }
    return (
        <div className="hoverStyle col-md-4 col-sm-6 text-center">
            <a href={meme.link}>
                {
                    meme.image ? <img style={{ height: '200px' }} src={`data:image/png;base64,${meme.image.img}`} />
                        :
                        <img style={{ height: '200px' }} className="img-fluid mb-3" src={`https://sheltered-lake-22038.herokuapp.com/${meme.img}`} alt="" />
                }
            </a>
            <div className="overlay"></div>
            <div className="button"><button onClick={() => deleteService(meme._id)}> <FontAwesomeIcon icon={faTrashAlt} /> </button></div>
        </div>
    );
};

export default Meme;
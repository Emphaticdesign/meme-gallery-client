import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Memes from '../Memes/Memes';
import './Home.css';

const Home = () => {

    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);
    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile)
        console.log(newFile)
    }

    const handleSubmit = () => {
        const formData = new FormData()
        console.log(info);
        formData.append('file', file);
        formData.append('link', info.link);

        fetch('https://sheltered-lake-22038.herokuapp.com/addMeme', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
            window.location.reload(false);
    }

    return (
        <div className="container">
            <Link to="/"><h1>MEME GALLERY</h1></Link>
            <Link to="/status"><h3>See Status</h3></Link>
            <form className="d-flex" onSubmit={handleSubmit}>
                <div className="form-group link">
                    <input onBlur={handleBlur} type="link" className="form-control" name="link" placeholder="link" />
                </div>
                <div className="form-group uploadFile">
                    <input onChange={handleFileChange} type="file" className="form-control" id="exampleInputPassword1" placeholder="Picture" />
                </div>
                <button className="submitButton" type="submit" className="btn btn-primary">Upload Meme</button>
            </form>

            <div className="img">
                <Memes></Memes>
            </div>
            
            <div className="sub-footer bg-dark text-white border-top text-center">
                <p>&copy; Copyright {new Date().getFullYear()} all right reserved MD.SAHJALAL </p>
            </div>
        </div>
    );
};

export default Home;
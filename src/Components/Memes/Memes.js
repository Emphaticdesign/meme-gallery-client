import React, { useEffect, useState } from 'react';
import Meme from './Meme';

const Memes = () => {
    const [memes, setMemes] = useState([])
    useEffect(() => {
        fetch('https://sheltered-lake-22038.herokuapp.com/memes')
            .then(res => res.json())
            .then(data => setMemes(data))
    }, [])
    return (
        <section className="doctors">
            <div className="container">
                <div className="row">
                    {
                        memes.map(meme => <Meme key={meme._id} meme={meme} />)
                    }

                </div>
            </div>
        </section>
    );
};

export default Memes;
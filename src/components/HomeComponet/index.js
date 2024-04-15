import React, { useState, useEffect } from 'react';


const HomeComponent = () => {
    const [photos, setPhotos] = useState([]);
    const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

    useEffect(() => {
        // Import images from folder
        const importAll = (r) => r.keys().map(r);
        const images = importAll(require.context('../../images', false, /\.(png|jpe?g|svg)$/));

        setPhotos(images);

        // Change photos every 2 seconds
        const interval = setInterval(() => {
            setCurrentPhotoIndex(prevIndex => (prevIndex + 1) % images.length);
        }, 2000);

        // Clear the interval before unmounting
        return () => clearInterval(interval);
    }, []);

    const prevImage = () => {
        setCurrentPhotoIndex(prevIndex => (prevIndex - 1 + photos.length) % photos.length);
    };

    const nextImage = () => {
        setCurrentPhotoIndex(prevIndex => (prevIndex + 1) % photos.length);
    };

    return (
        <>
        <div style={{width:'100%', height:"auto", border:'2px solid blue'}}>


     
            <div style={{ width:"auto", border:"5px solid yellow", marginTop:"100px", height:"auto", background: 'white' }}>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    {/* <button onClick={prevImage} style={{ background: 'grey', width: '100px', height: '50px', marginTop: '150px', color: 'white', borderRadius: "999px" }}>Попередня</button> */}
                    <img src={photos[currentPhotoIndex]} style={{ width: '500px', height: '400px' }} alt={`Photo ${currentPhotoIndex + 1}`} />
                    {/* <button onClick={nextImage} style={{ background: 'grey', width: '100px', color: 'white', borderRadius: "999px", height: '50px', marginTop: '150px' }}>Наступна</button> */}
                </div>
            </div>
            </div>
        </>
    );
};

export default HomeComponent;

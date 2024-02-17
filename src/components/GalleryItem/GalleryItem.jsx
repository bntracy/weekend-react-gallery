import axios from 'axios';
import { useState } from "react";

import './GalleryItem.css'

function GalleryItem( {item, fetchGallery} ) {
    const [showPic, setShowPic] = useState(true);

    const togglePic = () => {
        setShowPic(!showPic);
    }

    const likeItem = () => {
        axios({
            method: 'PUT',
            url: `/api/gallery/like/${item.id}`
        }).then(response => {
            fetchGallery();
        }).catch(error => {
            console.log('Error in PUT', error);
        });
    }

    return (
        <div data-testid="galleryItem" className="gallery-item">
            { showPic 
                ? <img src={item.url} alt={item.description} data-testid="toggle" onClick={() => togglePic()} />
                : <p data-testid="toggle" onClick={togglePic} className="description">{item.description}</p> }
            <p>{item.title}</p>
            <p>Likes: {item.likes}</p>
            <button data-testid="like" onClick={likeItem}>Like</button>
        </div>
    );
}

export default GalleryItem;
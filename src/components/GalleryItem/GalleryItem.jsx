import { useState } from "react";

import './GalleryItem.css'

function GalleryItem( {item} ) {
    const [showPic, setShowPic] = useState(true);

    const togglePic = () => {
        setShowPic(!showPic);
    }

    return (
        <div data-testid="galleryItem" className="gallery-item">
            { showPic 
                ? <img src={item.url} alt={item.description} data-testid="toggle" onClick={() => togglePic()} />
                : <p data-testid="toggle" onClick={() => togglePic()} className="description">{item.description}</p> }
            <p>{item.title}</p>
        </div>
    );
}

export default GalleryItem;
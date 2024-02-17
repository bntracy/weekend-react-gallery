import { useState } from "react";

function GalleryItem( {item} ) {
    const [showPic, setShowPic] = useState(true);

    const togglePic = () => {
        setShowPic(!showPic);
    }

    return (
        <div data-testid="galleryItem">
            { showPic 
                ? <img src={item.url} alt={item.description} data-testid="toggle" onClick={() => togglePic()} />
                : <p data-testid="toggle" onClick={() => togglePic()}>{item.description}</p> }
            <p>{item.title}</p>
        </div>
    );
}

export default GalleryItem;
import axios from 'axios';
import { useState } from "react";
import Button from '@mui/material/Button';

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

    const deleteItem = () => {
        axios({
            method: 'DELETE',
            url: `/api/gallery/${item.id}`
        }).then(response => {
            fetchGallery();
        }).catch(error => {
            console.log('Error deleting item', error);
        });
    }

    return (
        <div data-testid="galleryItem" className="gallery-item">
            <div className="item-content">
                { showPic 
                    ? <img src={item.url} alt={item.description} data-testid="toggle" onClick={() => togglePic()} />
                    : <p data-testid="toggle" onClick={togglePic} className="description">{item.description}</p> }
            </div>
            <p className="title">{item.title}</p>
            <Button variant="contained" data-testid="like" onClick={likeItem}>Like</Button>
            <p>
                { item.likes
                    ? <>{item.likes}</>
                    : <>No</> }
                { (item.likes === 1)
                    ? <> person likes </>
                    : <> people like </>
                }
                this
                { item.likes
                    ? <>!</>
                    : <> yet.</>
                }
            </p>
            <Button size="small" color="error" variant="outlined" onClick={deleteItem}>Delete</Button>
        </div>
    );
}

export default GalleryItem;
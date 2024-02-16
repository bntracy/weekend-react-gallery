import axios from 'axios';
import { useState, useEffect } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList() {
    const [galleryArray, setGalleryArray] = useState([]);

    const fetchGallery = () => {
        axios({
            method: 'GET',
            url: 'api/gallery/'
        }).then(response => {
            setGalleryArray(response.data);
        }).catch(error => {
            console.log('Error getting gallery', error);
        });
    }

    useEffect(fetchGallery, []);

    return (
        <div data-testid="galleryList">
            {galleryArray.map(item => <GalleryItem key={item.id} item={item} />)}
        </div>
    );
}

export default GalleryList;
import axios from 'axios';
import { useState, useEffect } from 'react';

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
        <div data-testid="galleryList"></div>
    );
}

export default GalleryList;
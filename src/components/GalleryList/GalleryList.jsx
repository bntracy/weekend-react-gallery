import axios from 'axios';
import { useState, useEffect } from 'react';

import GalleryItem from '../GalleryItem/GalleryItem';

import './GalleryList.css';

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
        <div data-testid="galleryList" className="gallery-list">
            {galleryArray.map(item => <GalleryItem key={item.id} item={item} fetchGallery={fetchGallery} />)}
        </div>
    );
}

export default GalleryList;
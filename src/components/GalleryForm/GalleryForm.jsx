import { useState } from 'react';
import axios from 'axios';

import './GalleryForm.css';

function GalleryForm( {fetchGallery} ) {
    const [newURL, setNewURL] = useState('');
    const [newTitle, setNewTitle] = useState('');
    const [newDescription, setNewDescription] = useState('');

    const addPicture = (event) => {
        event.preventDefault();

        axios({
            method: 'POST',
            url: 'api/gallery/',
            data: {
                url: newURL,
                title: newTitle,
                description: newDescription
            }
        }).then(response => {
            setNewURL('');
            setNewTitle('');
            setNewDescription('');
            fetchGallery();
        }).catch(error => {
            console.log('Error adding picture', error);
        });
    }
 
    return (
        <div>
            <h3>Add a picture:</h3>
            <form onSubmit={addPicture}>
                <p>
                    <label htmlFor="url">URL:</label>
                    <input id="url" type="url" value={newURL} onChange={(event) => setNewURL(event.target.value)} required />
                </p>
                <p>
                    <label htmlFor="title">Title:</label>
                    <input id="title" type="text" value={newTitle} onChange={(event) => setNewTitle(event.target.value)} required />
                </p>
                <p>
                    <label htmlFor="description">Description:</label>
                    <input id="description" type="text" value={newDescription} onChange={(event) => setNewDescription(event.target.value)} required />
                </p>
                <button className="add-button" type="submit">Add</button>
            </form>
        </div>
    );
}

export default GalleryForm;
import { useState } from 'react';
import axios from 'axios';

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
                <label htmlFor="url">URL:</label>
                <input id="url" type="text" value={newURL} onChange={(event) => setNewURL(event.target.value)} required />
                <label htmlFor="title">Title:</label>
                <input id="title" type="text" value={newTitle} onChange={(event) => setNewTitle(event.target.value)} required />
                <label htmlFor="description">Description:</label>
                <input id="description" type="text" value={newDescription} onChange={(event) => setNewDescription(event.target.value)} required />
                <button type="submit">Add</button>
            </form>
        </div>
    );
}

export default GalleryForm;
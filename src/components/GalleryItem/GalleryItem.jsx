function GalleryItem( {item} ) {
    return (
        <div data-testid="galleryItem" alt={item.description}>
            <img src={item.url}/>
            <p>{item.title}</p>
        </div>
    );
}

export default GalleryItem;
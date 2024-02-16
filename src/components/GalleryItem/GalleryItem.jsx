function GalleryItem( {item} ) {
    return (
        <div data-testid="galleryItem">
            <img src={item.url} alt={item.description}/>
            <p>{item.title}</p>
        </div>
    );
}

export default GalleryItem;
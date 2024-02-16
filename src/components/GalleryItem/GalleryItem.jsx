function GalleryItem( {item} ) {
    return (
        <div data-testid="galleryItem">
            <img src={item.url}/>
            <p>{item.title}</p>
        </div>
    );
}

export default GalleryItem;
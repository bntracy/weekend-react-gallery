import GalleryList from "../GalleryList/GalleryList";

function App() {
    return (
      <div data-testid="app">
        <header>
          <h1>React Gallery</h1>
        </header>
        <GalleryList />
        {/* <p>The gallery goes here!</p>
        <img src="images/goat_small.jpg"/> */}
      </div>
    );
}

export default App;

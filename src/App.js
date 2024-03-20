// import images from "./helper/data"
import React from "react";
import Header from "./pages/header";
import { images } from "./helper/data";

// const {fotografçı,kaynak}=images;

function App() {
  return (
    <div className="App">
      <Header />
      <div className="imgDiv">
        {images.map((image, index) => (
          <div key={index} className="imgContainer">            
              <img
                
                src={image.kaynak.büyük}
                alt={image.fotoğrafçı}
              />
              <p>{image.fotoğrafçı}</p>            
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

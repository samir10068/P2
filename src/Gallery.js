import { Component } from "react";
import './index.css'; 


class Gallery extends Component{
    render() {
        return (
            
        <div className="Gallery"> 
             
             <div className="GalleryMessage">
             <h1 className="GalleryTitle">Gallery</h1>
             <div className="GalleryBox">
      <div className="box">
        <h1>Title</h1>
        <p>about</p>
        <image>image</image>
      </div>
      <div className="box">
        <h1>Title</h1>
        <p>about</p>
        <image>image</image>
      </div>
      <div className="box">
        <h1>Title</h1>
        <p>about</p>
        <image>image</image>
      </div>
    </div>

              </div>
            <div className="Pic4"></div>
       
        </div>
        )
    }
}
export default Gallery;
import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery'
import "react-image-gallery/styles/css/image-gallery.css";

function Slides ({children, images}) {
    return (
        <ImageGallery items={images} autoPlay={true} originalClass="original" thumbnailClass="thumbnail" />
    )
}

export {
    Slides
}
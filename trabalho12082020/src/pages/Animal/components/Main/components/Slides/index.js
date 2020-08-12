import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery'
import "react-image-gallery/styles/css/image-gallery.css";

const images = []

const newImage = (image) => {
    images.push({
        original: image,
        thumbnail: image
    })
}

function Slides ({children}) {
    return (
        <ImageGallery items={images} autoPlay={true} originalClass="original" thumbnailClass="thumbnail" />
    )
}

export {
    newImage,
    Slides
}
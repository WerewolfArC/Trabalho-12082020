import React from 'react';
import Animal from '../../Animal'

const images = []


const newImage = (image) => {
    images.push({
        original: image,
        thumbnail: image
    })
}

newImage('https://instagram.fpoa12-1.fna.fbcdn.net/v/t51.2885-15/e35/52607748_1113859995461314_3048995758671174056_n.jpg?_nc_ht=instagram.fpoa12-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=CDBy-w0T3soAX_HsIGo&oh=5b079afd4c5d47d10e899758d6c052a4&oe=5F5ECC40')


function Mia() {
    return (
        <Animal name={'Mia'} food={'Ração'} cheers={'Saldável'} images={images} />
    )
}

export default Mia
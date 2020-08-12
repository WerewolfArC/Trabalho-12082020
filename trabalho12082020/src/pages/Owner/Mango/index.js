import React from 'react';
import Animal from '../../Animal'

const images = []


const newImage = (image) => {
    images.push({
        original: image,
        thumbnail: image
    })
}

newImage('https://instagram.fpoa12-1.fna.fbcdn.net/v/t51.2885-15/e35/35948780_2085016661738721_8669022605119848448_n.jpg?_nc_ht=instagram.fpoa12-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=qFxyYmVirRoAX_hmbxe&oh=55058dea860c08a3240cc7cfa43324e1&oe=5F5CEA83')
newImage('https://instagram.fpoa12-1.fna.fbcdn.net/v/t51.2885-15/e35/42763465_2099243093670304_7223303691135287672_n.jpg?_nc_ht=instagram.fpoa12-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=j8WWuBgaXTMAX_RupJp&oh=084e13a10e0755959c4db619b3c54761&oe=5F5F4FF5')

function Mango() {
    return (
        <Animal name={'Mango'} food={'Ração'} cheers={'Saldável'} images={images} />
    )
}

export default Mango
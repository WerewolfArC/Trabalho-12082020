import React from 'react';
import Header from './components/Header/index';
import { newImage } from './components/Main/components/Slides'
import { Age } from './components/Main/components/Information/components/Birth'
import Main from './components/Main';

newImage('https://instagram.fpoa12-1.fna.fbcdn.net/v/t51.2885-15/e35/35948780_2085016661738721_8669022605119848448_n.jpg?_nc_ht=instagram.fpoa12-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=qFxyYmVirRoAX_hmbxe&oh=55058dea860c08a3240cc7cfa43324e1&oe=5F5CEA83')//Mango
newImage('https://instagram.fpoa12-1.fna.fbcdn.net/v/t51.2885-15/e35/52607748_1113859995461314_3048995758671174056_n.jpg?_nc_ht=instagram.fpoa12-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=CDBy-w0T3soAX_HsIGo&oh=5b079afd4c5d47d10e899758d6c052a4&oe=5F5ECC40')//Mia
newImage('https://instagram.fpoa12-1.fna.fbcdn.net/v/t51.2885-15/e35/42763465_2099243093670304_7223303691135287672_n.jpg?_nc_ht=instagram.fpoa12-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=j8WWuBgaXTMAX_RupJp&oh=084e13a10e0755959c4db619b3c54761&oe=5F5F4FF5')//Mango

function Animal() {
  return (
    <>
      <Header />
      <Main />
    </>
  );
}

export default Animal
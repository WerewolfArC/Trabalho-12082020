import React from 'react';
import Header from './components/Header/index';
import Main from './components/Main';


function Animal({name, food, cheers, images}) {
  return (
    <>
      <Header />
      <Main name={name} food={food} cheers={cheers} images={images} />
    </>
  );
}

export default Animal
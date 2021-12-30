import React from 'react';
import Iframe from 'react-iframe';

export const Kaboompics = (props) => {

  const {query} = props;

  return(
    <>
      <Iframe
        id = 'kaboompics'
        url = {`https://kaboompics.com/gallery?search=${query}`}
        position='absolute'
        width='80%'
        height='90%'/>
    </>
  )
}



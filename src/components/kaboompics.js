import React from 'react';
import styled from 'styled-components';
import Iframe from 'react-iframe';

export const Kaboompics = (props) => {

  const {query} = props;

  return(
    <>
      <IframeDiv>
        <Iframe
          id = 'kaboompics'
          url = {`https://kaboompics.com/gallery?search=${query}`}
          display = 'block'
          width = '100%'
          height =  '100%'/>
      </IframeDiv>
    </>
  )
}

const IframeDiv = styled.div`
  height: 100vh;
  width: 100%;
`

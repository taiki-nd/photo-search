import React from 'react';
import styled from 'styled-components';
import Iframe from 'react-iframe';

export const NegativeSpace = (props) => {

  const {query} = props;

  return(
    <>
      <IframeDiv>
        <Iframe
          id = 'negativespace'
          url = {`https://negativespace.co/?s=${query}`}
          display = 'block'
          width = '100%'
          height =  '100%'/>
      </IframeDiv>
    </>
  )
}

const IframeDiv = styled.div`
  height: 100vh;
  width: 95%;
`

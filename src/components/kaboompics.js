import React from 'react';
import styled from 'styled-components';
import Iframe from 'react-iframe';

export const Kaboompics = (props) => {

  const {query} = props;

  return(
    <>
      <LetSearch>"{query}"の検索結果 form kaboompics</LetSearch>
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

const LetSearch = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  color: #ffffff;
`

const IframeDiv = styled.div`
  padding-top: 50px;
  height: 100vh;
  width: 100%;
`

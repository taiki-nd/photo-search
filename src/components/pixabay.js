import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

export const Pixabay = (props) => {

  const {query} = props;

  const [images_p, setImages_p] = useState([]); //何の写真が表示されているか管理(pixabay)

  useEffect(() => {
    fetch(`https://pixabay.com/api/?q=${query}&key=${process.env.REACT_APP_CLIENT_ID_PIXABAY}`)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      setImages_p(data.hits)
    })
  }, [query])//queryが変わった時にuseEffectを走らせる

  return (
    <>
      <LetSearch>{query}の検索結果form pixabay</LetSearch>
      <Photos>
        {images_p.map(image => (
          <Card key={image.id}>
            <Photo src={image.largeImageURL} alt=''/>
            <p>{image.alt_description}</p>
          </Card>
        ))}
      </Photos>
    </>
  )
}

const LetSearch = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
`

const Content = styled.div`
  width: 90%;
  margin: 0 auto;
`

const Photos = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 25px;
`
const Card = styled.div`
  width: 300px;
`

const Photo = styled.img`
  width 300px;
  height: auto;
`
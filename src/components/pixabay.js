import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import media from "styled-media-query";

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
      <Photos>
        {images_p.map(image => (
          <Card key={image.id}>
            <a href={image.pageURL} target="_blank"><Photo src={image.largeImageURL} alt=''/></a>
            <p>{image.alt_description}</p>
          </Card>
        ))}
      </Photos>
    </>
  )
}

const Photos = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 25px;
  place-items: center;
  ${media.lessThan("medium")`
    flex-direction: column;
  `}
`
const Card = styled.div`
  width: 300px;
`

const Photo = styled.img`
  width 300px;
  height: 300px;
  object-fit: cover;
`
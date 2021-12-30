import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

 export const Unsplash = (props) => {

  const {query} = props;

  const [images_u, setImages_u] = useState([]); //何の写真が表示されているか管理(unsplash)

  useEffect(() => {
    console.log('useEffectが走りました。')
    fetch(`https://api.unsplash.com/search/photos?query=${query}&client_id=${process.env.REACT_APP_CLIENT_ID_UNSPLASH}`)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setImages_u(data.results)
      })
  }, [query])//queryが変わった時にuseEffectを走らせる

  return (
    <>
      <LetSearch>"{query}"の検索結果 form unsplash</LetSearch>
      <Photos>
        {images_u.map(image => (
          <Card key={image.id}>
            <a href={image.links.html} target="_blank"><Photo src={image.urls.regular} alt=''/></a>
          </Card>
        ))}
        {console.log(images_u)}
      </Photos>
    </>
  )
}

const LetSearch = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  color: #ffffff;
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
  height: 300px;
  object-fit: cover;
`

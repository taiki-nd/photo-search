import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const App = () => {

  const [images_u, setImages_u] = useState([]); //何の写真が表示されているか管理(unsplash)
  const [images_p, setImages_p] = useState([]); //何の写真が表示されているか管理(pixabay)
  const [text, setText] = useState(''); //検索バーに入れる文字列の管理
  const [query, setQuery] = useState(''); //検索されている文字列の保持

  useEffect(() => {
    console.log('unsplashのuseEffectが走りました。')
    fetch(`https://api.unsplash.com/search/photos?query=${query}&client_id=${process.env.REACT_APP_CLIENT_ID_UNSPLASH}`)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setImages_u(data.results)
      })
  }, [query])//queryが変わった時にuseEffectを走らせる

  useEffect(() => {
    console.log('pixabayのuseEffectが走りました。')
    fetch(`https://pixabay.com/api/?q=${query}&key=${process.env.REACT_APP_CLIENT_ID_PIXABAY}`)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setImages_p(data.hits)
      })
  }, [query])


  const onClickSearch = (e) => {
    e.preventDefault(); //ページ遷移の防止（SPAのため）
    setQuery(text);
    setText('');
    console.log(`${text}でonClickSearchが呼ばれました`)
    console.log(query)
  }

  return (
    <>
      <header>
        <Title>PHOTO-SEARCH</Title>
      </header>
      <Content>
        <Form>
          <InputSearch
            type="text"
            onChange={(e) => setText(e.target.value)}
            value={text}/>
          <Btn type="submit" onClick={onClickSearch}>search...</Btn>
        </Form>

        {images_u < 1 ? 

          <LetSearch>検索してください</LetSearch>
        
        :
          <>
            <LetSearch>{query}の検索結果form unsplash</LetSearch>
            <Photos>
              {images_u.map(image => (
                <Card key={image.id}>
                  <Photo src={image.urls.regular} alt=''/>
                  <p>{image.alt_description}</p>
                </Card>
              ))}
              {console.log(images_u)}
            </Photos>

            <LetSearch>{query}の検索結果form pixabay</LetSearch>
            <Photos>
              {images_p.map(image => (
                <Card key={image.id}>
                  <Photo src={image.largeImageURL} alt=''/>
                  <p>{image.alt_description}</p>
                </Card>
              ))}
              {console.log(images_p)}
            </Photos>
          </>

        }


      </Content>
    </>
  );
}

const Title = styled.h1`
  margin-left: 5%;
  letter-spacing: 5px;
`

const Form = styled.div`
  width: fit-content;
  margin: 25px auto;
`

const InputSearch = styled.input`
  width: 600px;
  padding: 10px;
  margin: 0 10px;
`

const Btn = styled.button`
  padding: 10px;
  :hover{
    background-color: #ccc;
  }
`

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

export default App;
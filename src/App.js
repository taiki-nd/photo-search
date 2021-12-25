import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const App = () => {

  const [images, setImages] = useState([]); //何の写真が表示されているか管理
  const [text, setText] = useState(''); //検索バーに入れる文字列の管理
  const [query, setQuery] = useState(''); //検索されている文字列の保持

  useEffect(() => {
    console.log('useEffectが走りました。')
    fetch(`https://api.unsplash.com/search/photos?query=${query}&client_id=${process.env.REACT_APP_CLIENT_ID_UNSPLASH}`)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setImages(data.results)
      })
  }, [query])//queryが変わった時にuseEffectを走らせる

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
        <h1>PHOTO-SEARCH</h1>
      </header>
      <Content>
        <input
          type="text"
          onChange={(e) => setText(e.target.value)}
          value={text}/>
        <button type="submit" onClick={onClickSearch}>search...</button>
      </Content>
    </>
  );
}

const Content = styled.div`
  width: 90%;
  margin: 0 auto;
`

export default App;
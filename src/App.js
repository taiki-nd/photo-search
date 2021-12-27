import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { Unsplash } from './components/unsplash';
import { Pixabay } from './components/pixabay';

const App = () => {

  const [text, setText] = useState(''); //検索バーに入れる文字列の管理
  const [query, setQuery] = useState(''); //検索されている文字列の保持

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

        <Unsplash
          query={query}
        />

        <Pixabay
          query={query}
        />

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
const Content = styled.div`
  width: 90%;
  margin: 0 auto;
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

export default App;
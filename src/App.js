import React, {useState} from 'react';
import styled from 'styled-components';
import { Unsplash } from './components/unsplash';
import { Pixabay } from './components/pixabay';

const App = () => {

  const [text, setText] = useState(''); //検索バーに入れる文字列の管理
  const [query, setQuery] = useState(''); //検索されている文字列の保持
  const [view, setView] = useState(1);

  const onClickSearch = (e) => {
    e.preventDefault(); //ページ遷移の防止（SPAのため）
    setQuery(text);
    setText('');
    console.log(`${text}でonClickSearchが呼ばれました`)
    console.log(query)
  }

  const onClickDisplayUnsplash = () => {
    setView(1);
  }

  const onClickDisplayPixabay = () => {
    setView(2);
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

        {query == '' ?

        <LetSearch>検索してください</LetSearch>

        :
        
        <>
          <button onClick={() => onClickDisplayUnsplash(1)}>Unsplash</button>
          <button onClick={() => onClickDisplayPixabay(2)}>pixabay</button>

          {view === 1 ?
            <Unsplash
              query={query}
            />
          : view === 2 ?
            <Pixabay
              query={query}
            />
          :
          ''
          }
         
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

const LetSearch = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
`

export default App;
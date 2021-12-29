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
      <Header>
        <Title>PHOTO-SEARCH</Title>
      </Header>
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
          {view === 1 ?
            <>
              <BtnSelectorNow onClick={() => onClickDisplayUnsplash(1)}>Unsplash</BtnSelectorNow>
              <BtnSelector onClick={() => onClickDisplayPixabay(2)}>pixabay</BtnSelector>
            </>
          : view === 2 ?
            <>
              <BtnSelector onClick={() => onClickDisplayUnsplash(1)}>Unsplash</BtnSelector>
              <BtnSelectorNow onClick={() => onClickDisplayPixabay(2)}>pixabay</BtnSelectorNow>
            </>
          :
            ''
          
          } 

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

const Header = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  background: -webkit-linear-gradient(45deg, #91b3bc, #5b7d87, #45415e, #2b4251, #2e323c);
`

const Title = styled.h1`
  margin-left: 5%;
  letter-spacing: 5px;
  color: #ffffff;
`

const Content = styled.div`
  width: 90%;
  margin: 100px auto 0;
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
  margin: 0 10px;
  border-radius: 999px;
  :hover{
    background-color: #ccc;
  }
`

const BtnSelector = styled.button`
  padding: 10px;
  margin: 0 10px;
  border-radius: 999px;
  :hover{
    background-color: #ccc;
  }
`

const BtnSelectorNow = styled.button`
  padding: 10px;
  margin: 0 10px;
  border-radius: 999px;
  color: #ffffff;
  background: -webkit-linear-gradient(45deg, #91b3bc, #5b7d87, #45415e, #2b4251, #2e323c);
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
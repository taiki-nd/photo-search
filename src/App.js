import React, {useState} from 'react';
import styled from 'styled-components';
import { Unsplash } from './components/unsplash';
import { Pixabay } from './components/pixabay';
import { Kaboompics } from './components/kaboompics'

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

  const onClickDisplayKaboompics = () => {
    setView(3);
  }

  return (
    <>
      <Back>
      <Header>
        <TitleDiv>
          <Title>PHOTO<br />SEARCH</Title>
        </TitleDiv>
        <Form>
          <InputSearch
            type="text"
            onChange={(e) => setText(e.target.value)}
            value={text}/>
          <Btn type="submit" onClick={onClickSearch}>search...</Btn>
        </Form>
      </Header>

      <Content>

        {query == '' ?

        <LetSearch>検索してください</LetSearch>

        :
        
        <>
          {view === 1 ?
            <>
              <BtnSelectorNow onClick={() => onClickDisplayUnsplash(1)}>Unsplash</BtnSelectorNow>
              <BtnSelector onClick={() => onClickDisplayPixabay(2)}>pixabay</BtnSelector>
              <BtnSelector onClick={() => onClickDisplayKaboompics(3)}>kaboompics</BtnSelector>
            </>
          : view === 2 ?
            <>
              <BtnSelector onClick={() => onClickDisplayUnsplash(1)}>Unsplash</BtnSelector>
              <BtnSelectorNow onClick={() => onClickDisplayPixabay(2)}>pixabay</BtnSelectorNow>
              <BtnSelector onClick={() => onClickDisplayKaboompics(3)}>kaboompics</BtnSelector>
            </>
          : view === 3 ?
            <>
              <BtnSelector onClick={() => onClickDisplayUnsplash(1)}>Unsplash</BtnSelector>
              <BtnSelector onClick={() => onClickDisplayPixabay(2)}>pixabay</BtnSelector>
              <BtnSelectorNow onClick={() => onClickDisplayKaboompics(3)}>kaboompics</BtnSelectorNow>
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
          : view === 3 ?
            <Kaboompics 
              query={query}
            />
          :
            ''
          }
         
        </>
        }

      </Content>
      </Back>
    </>
  );
}

const Back = styled.div`
  background-color: #2b4251;
`

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  position: fixed;
  top: 0;
  border-bottom: 1px solid #ffffff;
  background: -webkit-linear-gradient(45deg, #91b3bc, #5b7d87, #45415e, #2b4251, #2e323c);
`

const TitleDiv = styled.div`
  margin-left: 5%;
`

const Title = styled.p`
  letter-spacing: 5px;
  color: #ffffff;
  font-weight: bold;
`

const Form = styled.div`
  margin: 10px 0 ;
  margin-right: 5%;
  display: flex;
  justify-content: center;
`

const InputSearch = styled.input`
  width: 100%;
  padding: 10px;
  margin: 0 10px;
`

const Btn = styled.button`
  padding: 10px;
  margin: 0 10px;
  border-radius: 999px;
  border: 1px solid #ffffff;
  :hover{
    background: -webkit-linear-gradient(45deg, #91b3bc, #5b7d87, #45415e, #2b4251, #2e323c);
    color: #ffffff;
  }
  :active{
    background: -webkit-linear-gradient(45deg, #91b3bc, #5b7d87, #45415e, #2b4251, #2e323c);
    color: #ffffff;
  }
`

const Content = styled.div`
  width: 90%;
  padding-top: 50px;
  margin: 50px auto 0;
`

const BtnSelector = styled.button`
  padding: 10px;
  margin: 0 10px;
  border-radius: 999px;
  border: 1px solid #ffffff;
  :hover{
    background: -webkit-linear-gradient(45deg, #91b3bc, #5b7d87, #45415e, #2b4251, #2e323c);
    color: #ffffff;
  }
  :active{
    background: -webkit-linear-gradient(45deg, #91b3bc, #5b7d87, #45415e, #2b4251, #2e323c);
    color: #ffffff;
  }
`

const BtnSelectorNow = styled.button`
  padding: 10px;
  margin: 0 10px;
  border-radius: 999px;
  border: 1px solid #ffffff;
  color: #ffffff;
  background: -webkit-linear-gradient(45deg, #91b3bc, #5b7d87, #45415e, #2b4251, #2e323c);
  :hover{
    background-color: #ccc;
  }
`

const LetSearch = styled.p`
  height: 150vh;
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
`

export default App;
import React, {useState} from 'react';
import styled from 'styled-components';
import media from "styled-media-query";
import { Unsplash } from './components/unsplash';
import { Pixabay } from './components/pixabay';
import { Kaboompics } from './components/kaboompics';
import { NegativeSpace } from './components/negativespace';
import BackImage from './images/back.jpg';
import { Head } from './components/head';

const App = () => {

  const [text, setText] = useState(''); //検索バーに入れる文字列の管理
  const [query, setQuery] = useState(''); //検索されている文字列の保持
  const [view, setView] = useState(1);

  const onClickReload = () => {
    window.location.reload();
  }

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

  const onClickDisplayNegativespace = () => {
    setView(4);
  }

  return (
    <>
      <Head />
      <Back>
      <Header>
        <TitleDiv onClick={() => onClickReload()}>
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

        <LetSearch>無料で高品質な<br />商用利用写真を見つける</LetSearch>

        :
        
        <>
          <Result>
            <LeftBar>
              {view === 1 ?
                <>
                  <SearchWord>{`"${query}"の検索結果`}</SearchWord>
                  <BtnSelectorNow onClick={() => onClickDisplayUnsplash(1)}>Unsplash</BtnSelectorNow>
                  <BtnSelector onClick={() => onClickDisplayPixabay(2)}>pixabay</BtnSelector>
                  <BtnSelector onClick={() => onClickDisplayKaboompics(3)}>kaboompics</BtnSelector>
                  <BtnSelector onClick={() => onClickDisplayNegativespace(4)}>negative space</BtnSelector>
                </>
              : view === 2 ?
                <>
                  <SearchWord>{`"${query}"の検索結果`}</SearchWord>
                  <BtnSelector onClick={() => onClickDisplayUnsplash(1)}>Unsplash</BtnSelector>
                  <BtnSelectorNow onClick={() => onClickDisplayPixabay(2)}>pixabay</BtnSelectorNow>
                  <BtnSelector onClick={() => onClickDisplayKaboompics(3)}>kaboompics</BtnSelector>
                  <BtnSelector onClick={() => onClickDisplayNegativespace(4)}>negative space</BtnSelector>
                </>
              : view === 3 ?
                <>
                  <SearchWord>{`"${query}"の検索結果`}</SearchWord>
                  <BtnSelector onClick={() => onClickDisplayUnsplash(1)}>Unsplash</BtnSelector>
                  <BtnSelector onClick={() => onClickDisplayPixabay(2)}>pixabay</BtnSelector>
                  <BtnSelectorNow onClick={() => onClickDisplayKaboompics(3)}>kaboompics</BtnSelectorNow>
                  <BtnSelector onClick={() => onClickDisplayNegativespace(4)}>negative space</BtnSelector>
                </>
              : view === 4 ?
              <>
                <SearchWord>{`"${query}"の検索結果`}</SearchWord>
                <BtnSelector onClick={() => onClickDisplayUnsplash(1)}>Unsplash</BtnSelector>
                <BtnSelector onClick={() => onClickDisplayPixabay(2)}>pixabay</BtnSelector>
                <BtnSelector onClick={() => onClickDisplayKaboompics(3)}>kaboompics</BtnSelector>
                <BtnSelectorNow onClick={() => onClickDisplayNegativespace(4)}>negative space</BtnSelectorNow>
              </>
              :
                ''
              
              } 
            </LeftBar>
            <RightBar>
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
              : view === 4 ?
                <NegativeSpace 
                  query={query}
                />
              :
                ''
              }
            </RightBar>
          </Result> 
        </>
        }

      </Content>
      </Back>
    </>
  );
}

const Back = styled.div`
  min-height: 100vh;
  background-image: url(${BackImage});
  background-repeat:  no-repeat;
  background-position: center;
  background-size: cover; 
  background-attachment: fixed;
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
  cursor: pointer;
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
  padding: 10px 5px;
  margin: 0 10px;
`

const Btn = styled.div`
  padding: 10px;
  margin: 0 10px;
  border-radius: 999px;
  border: 1px solid #ffffff;
  background-color: #91b3bc;
  cursor: pointer;
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
  padding-top: 50px;
  margin: 50px auto 0;
`

const Result = styled.div`
  margin: 0 auto;
  display: flex;
  ${media.lessThan("medium")`
    flex-direction: column;
  `}
`

const LeftBar = styled.div`
  width: 20%;
  position: fixed;
  overflow: auto;
  ${media.lessThan("medium")`
    position: static;
    width: 100%;
  `}
`

const RightBar = styled.div`
  width: 80%;
  margin-left: 20%;
  ${media.lessThan("medium")`
    width: 100%;
    margin: 25px auto;
  `}
`

const SearchWord = styled.p`
  text-align: center;
  color: #fff;
`

const BtnSelector = styled.div`
  padding: 10px 0;
  margin: 10px;
  border-radius: 999px;
  border: 1px solid #ffffff;
  background-color: #91b3bc;
  text-align: center;
  cursor: pointer;
  :hover{
    background: -webkit-linear-gradient(45deg, #91b3bc, #5b7d87, #45415e, #2b4251, #2e323c);
    color: #ffffff;
  }
  :active{
    background: -webkit-linear-gradient(45deg, #91b3bc, #5b7d87, #45415e, #2b4251, #2e323c);
    color: #ffffff;
  }
`

const BtnSelectorNow = styled.div`
  padding: 10px 0;
  margin: 10px;
  border-radius: 999px;
  border: 1px solid #ffffff;
  color: #ffffff;
  text-align: center;
  cursor: pointer;
  background: -webkit-linear-gradient(45deg, #91b3bc, #5b7d87, #45415e, #2b4251, #2e323c);
  :hover{
    background-color: #ccc;
  }
`

const LetSearch = styled.p`
  color: #ffffff;
  margin-top: 40vh;
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
`

export default App;
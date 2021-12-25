import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const App = () => {

  const [images, setImages] = useState([]); //何の写真が表示されているか管理
  const [text, setText] = useState(''); //検索バーに入れる文字列の管理
  const [query, setQuery] = useState('cat'); //検索されている文字列の保持

  return (
    <>
      <Content>
      </Content>
    </>
  );
}

const Content = styled.div`
  width: 90%;
  margin: 0 auto;
`

export default App;
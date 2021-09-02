import React from 'react';
import GlobalStyle from './styles/globalStyle';
import Album from './components/Album';

const App = (): JSX.Element => {
  return (
    <>
      <GlobalStyle />
      <Album />
    </>
  )
}

export default App
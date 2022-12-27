import React from 'react';
import { Header, Sales } from './components';
import { headerapi, popularsales, topratedsales } from './data/data';
const App = () => {
  return (
    <>
      <main>
          <Header headerapi={ headerapi } />
          <Sales endpoint={popularsales} />
          <Sales endpoint={topratedsales} />
      </main> 
    </>
  )
}

export default App
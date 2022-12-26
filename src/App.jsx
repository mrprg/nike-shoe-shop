import React from 'react';
import { Header, Sales } from './components';
import { headerapi } from './data/data';
const App = () => {
  return (
    <>
      <main>
          <Header headerapi={ headerapi } />
          <Sales />
      </main> 
    </>
  )
}

export default App
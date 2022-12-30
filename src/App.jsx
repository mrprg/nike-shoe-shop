import React from 'react';
import { Header, Sales, FlexContent } from './components';
import { headerapi, popularsales, topratedsales, highlight, sneaker } from './data/data';
const App = () => {
  return (
    <>
      <main className='flex flex-col gap-16 relative'>
          <Header headerapi={ headerapi } />
          <Sales endpoint={popularsales} ifExists/>
          <FlexContent endpoint={highlight} ifExists/>
          <Sales endpoint={topratedsales} />
          <FlexContent endpoint={sneaker} />
      </main> 
    </>
  )
};

export default App
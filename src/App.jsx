import React from 'react';
import { Header, Sales, FlexContent } from './components';
import { headerapi, popularsales, topratedsales } from './data/data';
const App = () => {
  return (
    <>
      <main className='flex flex-col gap-16 relative'>
          <Header headerapi={ headerapi } />
          <Sales endpoint={popularsales} ifExists/>
          <Sales endpoint={topratedsales} />
          <FlexContent/>
      </main> 
    </>
  )
};

export default App
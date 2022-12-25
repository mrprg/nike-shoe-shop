import React from 'react';
import { Header } from './components';
import { headerapi } from './data/data';
const App = () => {
  return (
    <>
      <main>
          <Header headerapi={ headerapi } />
      </main> 
    </>
  )
}

export default App
import ItemContextProvider from './Context/ItemContextProvider';
import './App.css'
import Header from './Components/Header';
import Card from './Components/Card';
import { useContext, useEffect } from 'react';
import ItemContext from './Context/ItemContext';

function App() {

  
  
  return (
    <ItemContextProvider>
      <Header   />
      <Card/>
    </ItemContextProvider>
  )
}

export default App

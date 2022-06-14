import React from 'react'
import Stories from './components/Stories'
import { useGlobalHook } from './context';

const App = () => {

  // let data = useContext(AppContext);
  let data = useGlobalHook();
  return (
    <>
      {data}
      <Stories/>
    </>
  )
}

export default App
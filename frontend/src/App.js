import React, { useContext } from 'react';
import LandingPage from './Components/LandingPage';
import SecondStep from './Components/DataManipulation';
import { Context } from './Components/Context';

function App() {
  const { data } = useContext(Context);

  return !data ? <LandingPage /> : <SecondStep />
}

export default App;

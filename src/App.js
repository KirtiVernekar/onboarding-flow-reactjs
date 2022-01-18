import { useState } from 'react';
import './App.scss';
import OnboardingForm from './components/onboarding_form/OnboardingForm';
import logo from './icons/Eden-logo.png'

function App() {
  const [page, setPage] = useState(1);

  return (
    <div className="App">
        <div className="App__header">
          <img src={logo} alt="Eden logo"/>
          <h2>Eden</h2>
        </div>
        <OnboardingForm page={page}/>
    </div>
  );
}

export default App;

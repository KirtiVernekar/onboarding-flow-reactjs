import { useState } from 'react';
import './App.scss';
import OnboardingForm from './components/onboarding_form/OnboardingForm';
import logo from './icons/Eden-logo.png'

function App() {
  const [step, setStep] = useState(1);
  const pages = [1,2,3,4];

  const handleClick = (event) => {
    setStep(parseInt(event.currentTarget.id));
  }

  return (
    <div className="App">
        <div className="App__header">
          <img src={logo} alt="Eden logo"/>
          <h2>Eden</h2>
        </div>
        {/* Stepper */}
        <ol className="stepper">
            {pages.map(page => (
              <li className={page <= step ? "stepper__item  done" : "stepper__item"} id={page} onClick={handleClick} key={page}>
                <span className="stepper__title">{page}</span>
              </li>
            ))}
        </ol>
        <OnboardingForm page={step} setPage={setStep} />
    </div>
  );
}

export default App;

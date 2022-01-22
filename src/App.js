import { useState } from 'react';
import OnboardingForm from './components/onboarding_form/OnboardingForm';
import logo from './icons/Eden-logo.png'
import './App.scss';

function App() {
  const [step, setStep] = useState(1);
  const pages = [1,2,3,4];

  const handleClick = (event) => {
    setStep(parseInt(event.currentTarget.id));
  }

  return (
    <div className="app">
        <div className="app__header">
          <img className="app__logo" src={logo} alt="Eden logo"/>
          <h2 className="app__name">Eden</h2>
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

import React, {useState} from 'react';
import Title from '../title/Title'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faUser, faUsers } from '@fortawesome/free-solid-svg-icons'
import input_validation from '../../helpers/input_validation';
import './OnboardingForm.scss'

function OnboardingForm({page, setPage}) {
    // const [formData, setFormData] = useState({  
    //     fullName: '',
    //     displayName: '',
    //     workspaceName: '',
    //     workspaceURL: '',
    //     planType: '',
    // });

    // for adding input validation
    const [formData, setFormData] = useState({
        step1: {
          fullName: {
            value: '',
            required: true,
          },
          displayName: {
            value: '',
            required: true,
          }
        },
        step2: {
          workspaceName: {
            value: '',
            required: true,
          },
          workspaceURL: {
            value: '',
            required: false,
          }
        },
        step3: {
            planType: {
                value: '',
                required: true,
            }
        },
      });
    const [errors, setErrors] = useState({});

    const handleInputChange = (event, step) => {
        if(step === "step3"){
            console.log("in here");
            setFormData({
                ...formData,
                [step]: {
                    ...formData[step],
                    planType: {
                      ...formData[step]["planType"],
                      value: event.target.id
                    }
                  }
            })
        } else {
            setFormData({
                ...formData,
                [step]: {
                    ...formData[step],
                    [event.target.id]: {
                    ...formData[step][event.target.id],
                    value: event.target.value
                    }
                }
            });
        }
    }
    // console.log(formData);
    const handleCTA = (event, nextPage, currentStepData) => {
        event.preventDefault();

        let errMessages = input_validation(formData[currentStepData]);
        if(errMessages.inValid){
            setErrors(errMessages.message);
        } else{
            setPage(nextPage);
            setErrors({});
        }
    }

    const handleLaunch = () => {
        console.log("You've made it!");

        //Further Improvement -
        //Logic for registering user and redirecting to Home page
    }


    switch(page) {
        case 1:
            return (
                <div className='onboarding__container' >
                    <Title 
                        text="Welcome! First things first..." 
                        subtext="You can always change them later"
                    />
                    <form className='onboarding__form'>
                        <div className='onboarding__input'>
                            <label id="fullName-label">Full Name</label>
                            <input 
                                id="fullName" 
                                type="text" 
                                placeholder="Steve Jobs" 
                                value={formData.step1.fullName.value} 
                                onChange={e => handleInputChange(e, "step1")}
                            />
                            {errors && <p className="error">{errors.fullName}</p>}
                        </div>
                        <div className='onboarding__input'>
                            <label id="displayName-label">Display Name</label>
                            <input 
                                id="displayName" 
                                type="text" 
                                placeholder="Steve" 
                                value={formData.step1.displayName.value} 
                                onChange={e => handleInputChange(e, "step1")}
                            />
                            {errors && <p className="error">{errors.displayName}</p>}
                        </div>
                        <button type="submit" onClick={e => handleCTA(e, 2, "step1")}>Create Workspace</button>
                    </form>
                </div>
            );
        case 2:
            return (
                <div className='onboarding__container'>
                    <Title 
                        text="Let's set up a home for all your work" 
                        subtext="You can always create another workspace later"
                    />
                    <form className='onboarding__form'>
                        <div className='onboarding__input'>
                            <label id="workspaceName-label">Workspace Name</label>
                            <input 
                                id="workspaceName" 
                                type="text" 
                                placeholder="Eden" 
                                value={formData.step2.workspaceName.value} 
                                onChange={e => handleInputChange(e, "step2")}
                            />
                            {errors && <p className="error">{errors.workspaceName}</p>}
                        </div>
                        <div className='onboarding__input'>
                            <label id="workspaceURL-label">Workspace URL<span> (optional)</span></label>
                            <div className='input__url'>
                                <span>www.eden.com/</span>
                                <input 
                                    id="workspaceURL" 
                                    type="text" 
                                    placeholder="Example" 
                                    value={formData.step2.workspaceURL.value} 
                                    onChange={e => handleInputChange(e, "step2")}
                                />
                            </div>
                        </div>
                        <button type="submit" onClick={e => handleCTA(e, 3, "step2")}>Create Workspace</button>
                    </form>
                </div>
            );
        case 3:
            return (
                <div className='onboarding__container'>
                    <Title 
                        text="How are you planning to use Eden?" 
                        subtext="We'll streamline your experience accordingly"
                    />
                    <form className='onboarding__form'>
                        <div className='onboarding__selectType'>
                            <div 
                                className={ formData.step3.planType.value === 'self' 
                                            ? 'onboarding__planType select' 
                                            : 'onboarding__planType'} 
                                id="self" 
                                onClick={e => handleInputChange(e, "step3")}
                            >
                                <FontAwesomeIcon icon={faUser} className='onboarding__planType__icon'/>
                                <h4>For myself</h4>
                                <p>Write better. Think more clearly. Stay organized.</p>
                            </div>
                            <div 
                                className={ formData.step3.planType.value === 'team' 
                                            ? 'onboarding__planType select' 
                                            : 'onboarding__planType'} 
                                id="team" 
                                onClick={e => handleInputChange(e, "step3")}
                            >
                                <FontAwesomeIcon icon={faUsers} className='onboarding__planType__icon'/>
                                <h4>With my team</h4>
                                <p>Wikis, docs, tasks & projects, all in one place.</p>
                            </div>
                        </div>
                        {errors && <p className="error">{errors.planType}</p>}
                        <button type="submit" onClick={e => handleCTA(e, 4, "step3")}>Create Workspace</button>
                    </form>
                </div>
            );
        case 4:
            return (
                <div className='onboarding__container'>
                    <div className='onboarding__check'>
                        <FontAwesomeIcon icon={faCheck} />
                    </div>
                    <Title 
                        text={`Congratulations, ${formData.step1.displayName.value ? formData.step1.displayName.value : 'Eren'}!`} 
                        subtext="You have completed onboarding, you can start using Eden!"
                    />
                    <button type="submit" onClick={handleLaunch}>Launch Eden</button>
                </div>
            );
        default: 
            return (
                <div className='onboarding__container'>
                    <Title 
                        subtext="Something went wrong!"
                    />
                </div>
            );
    }
}

export default OnboardingForm;

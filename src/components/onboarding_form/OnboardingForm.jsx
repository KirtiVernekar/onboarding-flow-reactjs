import React, {useEffect, useState} from 'react';
import './OnboardingForm.scss'
import Title from '../title/Title'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faUser, faUsers } from '@fortawesome/free-solid-svg-icons'
import input_validation from '../../helpers/input_validation';

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

    const handleChange = (e, step) => {
        if(step === "step3"){
            console.log("in here");
            setFormData({
                ...formData,
                [step]: {
                    ...formData[step],
                    planType: {
                      ...formData[step]["planType"],
                      value: e.target.id
                    }
                  }
            })
        } else {
            setFormData({
                ...formData,
                [step]: {
                    ...formData[step],
                    [e.target.id]: {
                    ...formData[step][e.target.id],
                    value: e.target.value
                    }
                }
                // [e.target.id]: e.target.value
            });
        }
    }
    console.log(formData);
    const handleClick = (event, value, step) => {
        event.preventDefault();

        let isInvalid = input_validation(formData[step]);
        if(isInvalid){
            setErrors(isInvalid);
            console.log("isInvalid", errors)
        } 
        if(errors == {}){
            setPage(value);
        }
        // setPage(value);
    }
    // console.log("outside click", errors)

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
                            <label id="fullName-label" for="fullName">Full Name</label>
                            <input id="fullName" type="text" placeholder="Steve Jobs" value={formData.step1.fullName.value} onChange={e => handleChange(e, "step1")}/>
                            {errors && <p className="error">{errors.fullName}</p>}
                        </div>
                        <div className='onboarding__input'>
                            <label id="displayName-label" for="displayName">Display Name</label>
                            <input id="displayName" type="text" placeholder="Steve" value={formData.step1.displayName.value} onChange={e => handleChange(e, "step1")}/>
                            {errors && <p className="error">{errors.displayName}</p>}
                        </div>
                        <button type="submit" onClick={e => handleClick(e, 2, "step1")}>Create Workspace</button>
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
                            <label id="workspaceName-label" for="workspaceName">Workspace Name</label>
                            <input id="workspaceName" type="text" placeholder="Eden" value={formData.step2.workspaceName.value} onChange={e => handleChange(e, "step2")}/>
                            {errors && <p className="error">{errors.workspaceName}</p>}
                        </div>
                        <div className='onboarding__input'>
                            <label id="workspaceURL-label" for="workspaceURL">Workspace URL<span> (optional)</span></label>
                            <div className='input-url'>
                                <span className='fixed-url' id="basic-addon3">www.eden.com/</span>
                                <input id="workspaceURL" type="text" placeholder="Example" value={formData.step2.workspaceURL.value} onChange={e => handleChange(e, "step2")}/>
                            </div>
                        </div>
                        <button type="submit" onClick={e => handleClick(e, 3, "step2")}>Create Workspace</button>
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
                            <div className={formData.step3.planType.value === 'self' ? 'onboarding__planType select' : 'onboarding__planType'} id="self" onClick={e => handleChange(e, "step3")}>
                                <FontAwesomeIcon icon={faUser} className='onboarding__planType-icon'/>
                                <h4>For myself</h4>
                                <p>Write better. Think more clearly. Stay organized.</p>
                            </div>
                            <div className={formData.step3.planType.value === 'team' ? 'onboarding__planType select' : 'onboarding__planType'} id="team" onClick={e => handleChange(e, "step3")}>
                                <FontAwesomeIcon icon={faUsers} className='onboarding__planType-icon'/>
                                <h4>With my team</h4>
                                <p>Wikis, docs, tasks & projects, all in one place.</p>
                            </div>
                        </div>
                        {errors && <p className="error">{errors.planType}</p>}
                        <button type="submit" onClick={e => handleClick(e, 4, "step3")}>Create Workspace</button>
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
                    <button type="submit">Launch Eden</button>
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

export default OnboardingForm

import React, {useState} from 'react';
import './OnboardingForm.scss'
import CardTitle from '../card_title/CardTitle'
import Button from '../button/Button';
import user from '../../icons/user-solid.svg'
import group from '../../icons/users-solid.svg'

function OnboardingForm({page}) {
    const [formData, setFormData] = useState({  
        fullName: '',
        displayName: '',
        workspaceName: '',
        workspaceURL: '',
        planType: '',
    });
    const handleChange = () => {}
    const handleCreate = () => {}

    switch(page) {
        case 1:
            return (
                <div className='onboarding__container'>
                    <CardTitle 
                        title="Welcome! First things first..." 
                        subtitle="You can always change them later"
                    />
                    <form className='onboarding__form'>
                        <div className='onboarding__input'>
                            <label id="fullname-label" for="fullname">Full Name</label>
                            <input id="fullname" type="text" placeholder="Steve Jobs" value={formData.fullName} onChange={handleChange}/>
                        </div>
                        <div className='onboarding__input'>
                            <label id="displayname-label" for="displayname">Display Name</label>
                            <input id="displayname" type="text" placeholder="Steve" value={formData.displayName} onChange={handleChange}/>
                        </div>
                        <button type="submit" onClick={handleCreate}>Create Workspace</button>
                    </form>
                </div>
            );
        case 2:
            return (
                <div className='onboarding__container'>
                    <CardTitle 
                        title="Let's set up a home for all your work" 
                        subtitle="You can always create another workspace later"
                    />
                    <form className='onboarding__form'>
                        <div className='onboarding__input'>
                            <label id="workspacename-label" for="fullname">Workspace Name</label>
                            <input id="workspacename" type="text" placeholder="Eden" value={formData.workspaceName} onChange={handleChange}/>
                        </div>
                        <div className='onboarding__input'>
                            <label id="workspaceURL-label" for="displayname">Workspace URL<span> (optional)</span></label>
                            <input id="workspaceURL" type="text" placeholder="Example" value={formData.workspaceURL} onChange={handleChange}/>
                        </div>
                        <button type="submit" onClick={handleCreate}>Create Workspace</button>
                    </form>
                </div>
            );
        case 3:
            return (
                <div className='onboarding__container'>
                    <CardTitle 
                        title="How are you planning to use Eden?" 
                        subtitle="We'll streamline your experience accordingly"
                    />
                    <form className='onboarding__form'>
                        <div className='onboarding__selectType'>
                            <div className='onboarding__planType'>
                                <img src={user} alt="user"/>
                                <h4>For myself</h4>
                                <p>Write better. Think more clearly. Stay organized.</p>
                            </div>
                            <div className='onboarding__planType'>
                                <img src={group} alt="user"/>
                                <h4>With my team</h4>
                                <p>Wikis, docs, tasks & projects, all in one place.</p>
                            </div>
                        </div>
                        <button type="submit" onClick={handleCreate}>Create Workspace</button>
                    </form>
                </div>
            );
        case 4:
            return (
                <div className='onboarding__container'>
                    <CardTitle 
                        title="Congratulations, Eren!" 
                        subtitle="You have completed onboarding, you can start using Eden!"
                    />
                    {/* <button type="submit" onClick={handleCreate}>Launch Eden</button> */}
                    <Button action="Launch Eden"/>
                </div>
            );
    }
}

export default OnboardingForm

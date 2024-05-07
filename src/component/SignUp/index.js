import React, { useState } from 'react'
import { Container, Desc } from './styles';
import AlkyLogo from '../../assests/alk-logo.svg';
import Step from '../Step';

const SignUp = () => {
  const [stepper, setStepper] = useState({ 
    level: 1,
    heading: 'Enter your email ',
    innerHeading: 'address to continue',
    subHeading: 'Log in to your account. If you don’t have one,',
    innerSubHeading: 'you will be prompted to create one.'
   });

  return (
    <Container>
      <div>
        <img src={AlkyLogo} alt='alky logo' width="100px" height="100px" /> 
      </div>
      <Step stepper={stepper} setStepper={setStepper} />
      {stepper?.level === 2 ? <Desc>
        Dingoo will use your data to personalise and improve your Dingoo experience and 
        to send you information about Dingoo. You can change your communication preferences 
        anytime. We may use your data as described in our Privacy Policy, including sharing 
        it with The Test of Companies. By clicking "Agree & Continue", 
        you agree to our Subscriber Agreement and acknowledge that you have read our 
        Privacy Policy and Collection Statement.</Desc> : null}
    </Container>
  )
}

export default SignUp;
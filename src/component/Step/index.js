import React, { useState } from 'react'
import { Heading, SubHeading, BottomSection, CTA, InputBar, RightSection, LeftSection, Level, Note, Note2 } from './styles';
import EyeOffIcon from '../../assests/eye-off.png';
import EyeOnIcon from '../../assests/eye-on.png';
import { NavLink } from 'react-router-dom';

const Step = ({ stepper = {}, setStepper = () => {} }) => {
    const { level = '', heading = '', innerHeading = '', subHeading, innerSubHeading } = stepper || {};

    const [isEyeOn, setIsEyeOn] = useState(false);

    const checkPass = isEyeOn ? 'text' : 'password';

  return (
      <BottomSection>
        <RightSection>
          <Level>STEP {level}</Level>
          <Heading>{heading}<div>{innerHeading}</div></Heading>
          <SubHeading>{subHeading}
            <div>{innerSubHeading}</div>
          </SubHeading>
        </RightSection>
        <LeftSection>
          {level === 2 && <Note>Enter a password to create your account with</Note>}
          <div style={{ display:'flex', flexDirection:'column' }}>
            <div style={{ position:'relative'}}>
              <InputBar type={level === 2 ? checkPass : 'email' } placeholder={level === 2 ? 'Choose a password' : 'Email'} />
              {level === 2 && <img src={isEyeOn ? EyeOnIcon : EyeOffIcon} alt='eye_icon' width="30px" height="30px" style={{ position:'absolute', right: '10px', top: '10px', cursor:'pointer'}} onClick={() => setIsEyeOn(!isEyeOn)} />}
            </div>
            <div style={{ display:'flex', flex: 1, justifyContent:'flex-end', alignItems:"center"}}>
                {level === 2 && <Note2>
                    Use a minimum of 6 characters (case sensitive) with at least one number or special character.
                </Note2>}
                <NavLink to={level === 2 ? '/dashboard' : '/'}>
                  <CTA onClick={() => 
                      setStepper({ 
                          level : 2,
                          heading: 'Create an account to', 
                          innerHeading : 'continue',
                          subHeading : 'You’ll be able to log in to Dingoo with this',
                          innerSubHeading : 'email address and password.'
                      })}>{level === 2 ? 'Agree &' : null } Continue</CTA>
                </NavLink>
            </div>
          </div>
        </LeftSection>
      </BottomSection>
  )
}

export default Step;
import React from 'react'
import { Container, Heading, SubHeading } from './styles';
import AlkyLogo from '../../assests/alk-logo-white.svg';
import Slider from '../Slider';
import { PHOTOGRAPHY_COLLETION } from '../../constant/photography';
import { useLocation } from 'react-router-dom';

const Dashboard = () => {
  const location = useLocation();

  const username = location?.search?.slice(1) || 'Test';

  return (
    <Container>
        <img src={AlkyLogo} alt='alky' width="80px" height="80px" />
        <Heading>Welcome <span>{username}</span></Heading>
        <SubHeading>Hope you having a good day!</SubHeading>
        <Slider title='Photography' colletion={PHOTOGRAPHY_COLLETION} />
        <Slider title='Learning' colletion={PHOTOGRAPHY_COLLETION} />
    </Container>
  )
}

export default Dashboard
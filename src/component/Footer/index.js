import React from 'react'
import { Container, Image, Navs, Nav } from './styles';
import { NAVIGATIONS, SOCIAL_ICONS, SOCIAL_ICONS_MAPPING } from '../../constant';

const Footer = () => {
  return (
    <Container>
       <div>
        {SOCIAL_ICONS.map((item) => <a href={SOCIAL_ICONS_MAPPING[item]?.link} target='_blank' rel="noreferrer"><Image key={item} src={SOCIAL_ICONS_MAPPING[item]?.url} alt={`${item}_logo`} /></a>)}
       </div>
       <Navs>
        {NAVIGATIONS.map((itm) => <Nav key={itm}>{itm} </Nav>)}</Navs>
       <div>© Alkye Test</div>
    </Container>
  )
}

export default Footer;
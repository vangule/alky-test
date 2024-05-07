import React from 'react'
import { Heading, Container, Image, SliderBox } from './styles';

const Slider = ({ title = '', colletion = [] }) => {
    
  return (
    <Container>
        <Heading>{title}</Heading>
        <SliderBox>
            {colletion.map((item) => {
                return <Image src={item} alt={`${item}_photo`} />
            })}
        </SliderBox>

    </Container>
  )
}

export default Slider
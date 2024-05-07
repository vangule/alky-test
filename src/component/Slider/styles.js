import styled from "styled-components";

export const Heading = styled.div`
    font-size: 48px;
    font-weight: 500;
    margin-bottom: 20px;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 40px 0;
`;

export const Image = styled.img`
    width: 300px;
    height: 400px; 
    margin-right: 40px;
`;

export const SliderBox = styled.div`
    display: flex;
    overflow-x: scroll;
    overflow-y: hidden;

    &::-webkit-scrollbar {
        display: none;
    }

`;
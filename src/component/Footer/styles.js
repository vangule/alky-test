import styled from "styled-components";

export const Container = styled.div`
    background: #000;
    color: #fff;
    padding: 40px 240px;
    height: 282px;

    @media (max-width: 390px) {
        padding: 40px 20px;
    }
`;

export const Image = styled.img`
    margin-right: 50px;
    cursor: pointer;
    width: 60px !important;
    height: 60px !important;;

  @media (max-width: 390px) {
    margin-right: 20px;
    width: 50px !important;;
    height: 50px !important;;
    }
`;
export const Navs = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 90%;
    padding: 40px 0;

    @media (max-width: 390px) {
        width: 90%;
    }
`;

export const Nav = styled.div`
    margin: 10px 25px;
    font-size: 24px;
    font-weight: 600;
    color: #FFFFFF;

    &:hover {
        text-decoration: underline;
        cursor: pointer;
    }

    @media (max-width: 390px) {
        margin: 10px 6px;
        font-size: 14px;
    }
`
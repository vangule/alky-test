import styled from "styled-components";

export const Container = styled.div`
  background: #ffffff;
  border-radius: 50px;
  margin: 50px 40px;
  padding: 50px;
  box-shadow: 0 0 2px #ffff;

  @media (max-width: 390px) {
    padding: 25px;
  }
`;

export const Desc = styled.div`
  line-height: 30px;
  margin-top: 20px;

  @media (max-width: 390px) {
    font-size: 10px;
    line-height: 15px;
  }
`;
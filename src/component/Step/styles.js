import styled from "styled-components";

export const Heading = styled.div`
  font-weight: 500;
  font-size: 48px;
  line-height: 55px;

  @media (max-width: 390px) {
    font-size: 24px;
    line-height: 25px;
  }
`;

export const SubHeading = styled.div`
  font-size: 24px;
  line-height: 50px;

  @media (max-width: 390px) {
    font-size: 12px;
    line-height: 25px;
    margin-top: 12px;
  }
`;

export const BottomSection = styled.div`
  display: flex;
  flex: 2;

  @media (max-width: 390px) {
    display: flex;
    flex-direction: column;
  }
`;

export const CTA = styled.button`
  border-radius: 10px;
  background: #000000;
  color: #fff;
  padding: 16px 24px;
  width: fit-content;
  margin-top: 20px;
  cursor: pointer;
  font-size: 18px;
  font-weight: 700;

  @media (max-width: 390px) {
    padding: 14px 22px;
    font-size: 16px;
  }
`;

export const Level = styled.div`
  font-size: 24px;
  color: #000000;
  line-height: 50px;
`;

export const InputBar = styled.input`
  width: 100%;
  height: 48px;

  @media (max-width: 390px) {
    width: 250px;
    margin: 0px 1px;
  }
`;

export const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`
export const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 25px 25px 0 120px;

  @media (max-width: 390px) {
    flex: none;
    padding: 0px;
  }
`;

export const Note = styled.div`
  font-size: 24px;
  margin-bottom: 16px;
  color: #000000;

  @media (max-width: 390px) {
    font-size: 12px;
    margin: 16px 0;
  }
`;

export const Note2 = styled.div`
   display: flex;
  flex: 2;
  font-size: 20px;
  color: #4E4E4E;

  @media (max-width: 390px) {
    font-size: 12px;
  }
`;
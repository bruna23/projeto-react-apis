import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  width: 1100px;
  height: 663px;
  left: 0px;
  top: 0px;

  background: ${(props) => props.color};
  border-radius: 37.8857px;

  h3 {
    padding-top: 10px;
    background-position: 105% 90%;
  }
  .infos {
    margin-top: -207px;
    padding-left: 56px;
  }
`;

export const Primeiro = styled.div`
  height: 1500px;
  width: 1250px;
  background: #5e5e5e;

  h1 {
    margin-left: 89px;
    padding-top: 70px;
    height: 150px;
    color: white;
  }
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: -2px;
  margin-left: -215px;
  margin-top: -139px;

  h2 {
    margin-left: -47px;
    color: white;
  }
  h4 {
    font-size: 2.5rem;
    margin-left: -48px;
    color: white;
  }
`;

export const Div = styled.div`
  margin-top: -390px;
  padding-left: 375px;
  img {
    padding-top: 24px;
  }
  p {
    padding-left: 10px;
  }
  .imagem {
    height: 200px;
    margin-top: -266px;
    margin-left: 41px;
  }
  .types {
    display: flex;
    p {
      display: flex;
      gap: 10px;
      margin-left: -55px;
    }
  }
`;
export const BaseStats = styled.div`
  background: #ffff;
  margin-top: -244px;
  width: 226px;
  padding-left: 28px;
  height: 525px;
  margin-left: 327px;
`;
export const Info = styled.div`
  gap: 20px;

  display: flex;
  margin-top: 206px;
  padding-top: -57px;
  margin-left: 59px;

  height: 247px;
  width: 253px;
  flex-direction: column;

  img {
    background: #ffff;
  }
`;

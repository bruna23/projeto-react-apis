import styled from "styled-components";

export const Container = styled.header`
  .home {
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-start;
    margin-rigth: 200px;
    width: 1200px;

    button {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 4px 10px;

      width: 256px;
      height: 74px;
      margin-top: 20px;
      margin-right: 71px;

      background: #33a4f5;
      border-radius: 8px;
      border-color: #33a4f5;
      color: white;
    }
    img {
      width: 307px;
      height: 113px;
      margin-right: 152px;
      padding: 14px;
    }
  }
  .pokedex {
    display: flex;
    width: 1200px;

    h3 {
      width: 243px;
      height: 36px;
      left: 100px;
      margin-top: 30px;

      font-family: "Poppins";
      font-style: normal;
      font-weight: 700;
      font-size: 24px;

      text-decoration-line: underline;

      color: #1a1a1a;
      cursor: pointer;
    }
    img {
      width: 307px;
      height: 113px;
      margin-right: 152px;
      padding: 14px;
      margin-left: 200px;
    }
  }
  .details {
    display: flex;
    width: 1200px;

    h3 {
      width: 243px;
      height: 36px;
      left: 100px;
      margin-top: 51px;

      font-family: "Poppins";
      font-style: normal;
      font-weight: 700;
      font-size: 24px;

      text-decoration-line: underline;

      color: #1a1a1a;
      cursor: pointer;
    }
    img {
      width: 307px;
      height: 113px;
      margin-right: 152px;
      padding: 14px;
      top: 55px;

      margin-left: 200px;
      margin-top: 15px;
    }
    .bntDel {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 4px 10px;

      position: absolute;
      width: 226px;
      height: 57px;
      left: 942px;
      top: 51px;

      background: #ff6262;
      border-radius: 8px;
    }
  }
`;

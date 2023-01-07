import styled from "styled-components";

export const Container = styled.div`
  section {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    height: 1200px;
    width: 1200px;

    background: #5e5e5e;
    padding: 50px;
    .cards {
      display: flex;
      gap: 20px;
      flex-wrap: wrap;
      justify-content: center;
      padding-bottom: 495px;
    }

    h1 {
      width: 100%;
      height: 110px;

      font-family: "Poppins";
      font-style: normal;
      font-size: 48px;

      color: #ffffff;
    }
  }
`;

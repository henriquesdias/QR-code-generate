import styled from "styled-components";

export const InfoLayout = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 50px auto 0 auto;
  padding: 10px;
  h2 {
    font-size: 20px;
    margin-bottom: 40px;
  }
  h1 {
    font-size: 28px;
    font-weight: bold;
    margin-bottom: 30px;
  }
  p {
    margin-bottom: 25px;
  }
  > div {
    margin-left: 20px;
    width: 40%;
    display: flex;
    justify-content: space-between;
    @media (max-width: 500px) {
      justify-content: flex-start;
      width: 100%;
      gap: 40px;
    }
  }
`;

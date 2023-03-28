import styled from "styled-components";

export default function InfoPage() {
  return (
    <InfoLayout>
      <h2>Hello, my name is John</h2>
      <h1>My History</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ea
        incidunt in dignissimos esse, unde officiis accusantium. Dolore sit
        asperiores earum pariatur inventore quas ratione, eaque dolor odio quia?
        Esse!
      </p>
      <div>
        <ButtonLink link="http://">Github</ButtonLink>
        <ButtonLink link="http://">LinkedIn</ButtonLink>
      </div>
    </InfoLayout>
  );
}

interface IButtonLink {
  children: string;
  link: string;
}

function ButtonLink({ children, link }: IButtonLink) {
  return (
    <ButtonLinkLayout>
      <a href="http://" target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    </ButtonLinkLayout>
  );
}

const ButtonLinkLayout = styled.div`
  color: black;
  border-radius: 10px;
  width: 100px;
  height: 40px;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  a {
    text-decoration: none;
    color: black;
  }
`;

const InfoLayout = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 50px auto 0 auto;
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
  }
`;

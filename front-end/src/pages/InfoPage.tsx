import { useEffect, useState } from "react";

import styled from "styled-components";

import getInformations from "../api/getInformations";
import { Information } from "../protocols";

export default function InfoPage() {
  const [info, setInfo] = useState<Information | null>(null);
  const [error, setError] = useState<string | null>(null);
  const url = window.location.href.split("/");
  useEffect(() => {
    getInformations(url[3])
      .catch((res) => {
        // console.log(res);
        setError("Informations not found");
      })
      .then((res) => {
        // console.log(res);
        if (res) {
          setInfo(res[0]);
        }
      });
  }, []);

  if (!info) {
    return <div>Loading</div>;
  }

  return (
    <InfoLayout>
      <h2>Hello, my name is {info.name}</h2>
      <h1>My History</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ea
        incidunt in dignissimos esse, unde officiis accusantium. Dolore sit
        asperiores earum pariatur inventore quas ratione, eaque dolor odio quia?
        Esse!
      </p>
      <div>
        <ButtonLink url={info.github_url}>Github</ButtonLink>
        <ButtonLink url={info.linkedin_url}>LinkedIn</ButtonLink>
      </div>
    </InfoLayout>
  );
}

interface IButtonLink {
  children: string;
  url: string;
}

function ButtonLink({ children, url }: IButtonLink) {
  return (
    <ButtonLinkLayout>
      <a href={url} target="_blank">
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
  cursor: pointer;
  a {
    text-decoration: none;
    color: black;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
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

import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import styled from "styled-components";

import getInformations from "../api/getInformations";
import { Information } from "../protocols";
import { ButtonLinkLayout } from "../styles/ButtonLink";
import { InfoLayout } from "../styles/InfoLayout";

export default function InfoPage() {
  const [info, setInfo] = useState<Information | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { name } = useParams();

  useEffect(() => {
    getInformations(name ? name : "").then((res) => {
      console.log(res);
      if (res) {
        setInfo(res[0]);
      }
    });
  }, []);

  const urlBase = `http://${window.location.host}`;
  if (!info && error) {
    return (
      <ErrorMessage>
        Error, go to <a href={urlBase}>Home</a>
      </ErrorMessage>
    );
  }

  if (!info) {
    return <Loading />;
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

const ErrorMessage = styled.div`
  margin: 50px auto 0 auto;
  font-size: 20px;
  display: flex;
  justify-content: center;
  a {
    margin-left: 10px;
  }
`;

const Loading = styled.div`
  margin: 50px auto 0 auto;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: 9px solid;
  border-color: #dbdcef;
  border-right-color: #474bff;
  animation: spinner-d3wgkg 1s infinite linear;

  @keyframes spinner-d3wgkg {
    to {
      transform: rotate(1turn);
    }
  }
`;

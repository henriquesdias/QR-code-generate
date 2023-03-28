import { useEffect, useState } from "react";

import getInformations from "../api/getInformations";
import { Information } from "../protocols";
import { ButtonLinkLayout } from "../styles/ButtonLink";
import { InfoLayout } from "../styles/InfoLayout";

export default function InfoPage() {
  const [info, setInfo] = useState<Information | null>(null);
  const [error, setError] = useState<string | null>(null);
  const name = window.location.pathname.replace("/", "");
  useEffect(() => {
    getInformations(name)
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

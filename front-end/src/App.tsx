import MainPage from "./pages/MainPage";
import { ResetStyle } from "./styles/Reset";
import InfoPage from "./pages/InfoPage";

export default function App() {
  const url = window.location.href.split("/");

  return (
    <>
      <ResetStyle />
      {url[3] ? <InfoPage /> : <MainPage />}
    </>
  );
}

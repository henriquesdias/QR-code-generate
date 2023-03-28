import { BrowserRouter, Route, Routes } from "react-router-dom";

import MainPage from "./pages/MainPage";
import { ResetStyle } from "./styles/Reset";
import InfoPage from "./pages/InfoPage";

export default function App() {
  return (
    <BrowserRouter>
      <ResetStyle />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/:name" element={<InfoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

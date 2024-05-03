import MainPage from "./pages/Mainpage";
import ResultPage from "./pages/ResultPage";
import GlobalStyles from "./statics/styles/GlobalStyle";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<MainPage />} />
          <Route path={"/result"} element={<ResultPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

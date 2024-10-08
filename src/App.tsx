import "./App.css";
import Header from "./components/common/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Tab } from "./utils/types";
import { Tabs } from "./utils/constants";
import Movie from "./components/pages/Movie";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <Header tabs={Tabs} />
        </header>
        <main>
          <Routes>
            {Tabs.map((tab: Tab, index: number) => (
              <Route key={index} path={tab.path} element={tab.component} />
            ))}
            <Route path={"movie/:movieId"} element={<Movie />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;

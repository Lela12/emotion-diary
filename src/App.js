import "./App.css";
import RouteTest from "./components/RouteTest";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import New from "./pages/New";
import Edit from "./pages/Edit";
import Diary from "./pages/Diary";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h2>App.js</h2>
        {/* 어떤 컴포넌트를 랜더링해서 페이지 역할을 하게 할 것인지 결정하기 위해 */}
        {/* 페이지가 바뀔 때 변화하는 부분(App.js는 어떤 페이지에서든 나타남) */}
        <Routes>
          {/* url경로와 컴포넌트를 매핑시켜주는  */}
          {/* path가 index를 가리키고 있으면, home컴포넌트를 랜더해라 */}
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<New />} />
          <Route path="/edit" element={<Edit />} />
          <Route path="/diary/:id" element={<Diary />} />
        </Routes>
        <RouteTest />
      </div>
    </BrowserRouter>
  );
}

export default App;

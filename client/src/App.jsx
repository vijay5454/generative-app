import { Home, CreatePost } from "./pages";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { logo } from "./assets";

const App = () => {
  return (
    <BrowserRouter>
      <header className="flex justify-between items-center px-4 py-4 sm:px-8 w-full bg-white border-b border-b-[#e6ebf4]">
        <Link to="/">
          <img src={logo} alt="logo" className="w-28 object-contain" />
        </Link>
        <Link to="/create-post">
          <button className="px-4 py-2 bg-[#6469ff] rounded-md text-white font-inter font-medium">
            Create
          </button>
        </Link>
      </header>
      <main className="px-4 py-8 sm:p-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<CreatePost />} path="/create-post" />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;

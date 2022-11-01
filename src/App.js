import "./App.css";
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Search from "./Components/Search";
import Counter from "./Components/Counter";
import Quiz from "./Components/Quiz/Quiz";
import Header from "./header";
import RegisForm from "./Components/RegisForm";
import Navbar from "./Components/Navbar";
import LoginAuth from "./Components/LoginAuth";
import Todo from "./Components/Todo/Todo";

function App() {
  const components = [
    { name: "Counter", path: "/counter" },
    { name: "Search", path: "/search" },
    { name: "RegisForm", path: "/regisform" },
    { name: "Quiz", path: "/quiz" },
    { name: "Navbar", path: "/navbar" },
    { name: "LoginAuth", path: "/loginauth" },
    { name: "Todo", path: "/todo" },
  ];

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="counter" element={<Counter />} />
        <Route path="search" element={<Search />} />
        <Route path="regisform" element={<RegisForm />} />
        <Route path="quiz" element={<Quiz />} />
        <Route path="loginauth" element={<LoginAuth />} />
        <Route path="navbar" element={<Navbar />} />
        <Route path="todo" element={<Todo />} />

        {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
        {/* <Route path="*" element={<NoMatch />} /> */}
      </Routes>
    </div>
  );

  function Home() {
    return (
      <div className="App">
        <div className="main-body">
          {components.map((component, key) => {
            return (
              <Link
                className="button-custom remove-underline"
                to={component.path}
              >
                {component.name}
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;

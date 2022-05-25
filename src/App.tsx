import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import { List } from "./pages/list/index";
import { Item } from "./pages/detail/index";
import { Loading } from "./components/Loading";

import { LoadingContext } from "./context/loadingContext";

function App() {
  const [loading, setLoading] = useState(false);
  const isLoading = (value: boolean) => {
    setLoading(value);
  };
  return (
    <LoadingContext.Provider value={{ loading, isLoading }}>
      <Loading />
      <Router>
        <Routes>
          <Route path="/" element={<List/>} />
          <Route path="/:id" element={<Item />} />
        </Routes>
      </Router>
    </LoadingContext.Provider>
  );
}

export default App;

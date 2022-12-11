import React from "react";
import { Routes, Route } from "react-router-dom";

import { Main } from "../../pages";

const App = () => {
  return (
    <main className="container" role="main">
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </main>
  );
};

export default App;

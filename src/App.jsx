import { useState } from "react";

import Header from "./components/Header";
import History_Table from "./components/History_Table";

function App() {
  return (
    <>
      <div className="app">
        <Header />
        <div className="contents-container">
          <h1 className="text-3xl mt-4 text-center">Histories</h1>
          <div className="histories-table-container">
            <History_Table />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

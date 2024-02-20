import { useState } from "react";

import Header from "./components/Header";

function App() {
  return (
    <>
      <div className="app">
        <Header />
        <div className="contents-container">
          <h1 className="text-3xl mt-4 text-center">Histories</h1>
          <div className="histories-table-container">
            <table className="mt-4">
              <tr>
                <th>Sold Items</th>
                <th>Date</th>
                <th>Profit</th>
              </tr>
              <tr>
                <td></td>
                <td></td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

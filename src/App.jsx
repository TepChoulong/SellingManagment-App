import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./Layout";
import Homepage from "./pages/Hompage";
import CreateNewHistory from "./pages/CreateNewHistory";
import LoadMoreHistory from "./components/LoadMoreHistory";
import NoPage from "./NoPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path="create-new-history" element={<CreateNewHistory />} />
        <Route path="products/:id" Component={LoadMoreHistory} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  );
}

export default App;

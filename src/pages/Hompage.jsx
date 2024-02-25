import History_Table from "../components/History_Table";

export default function Homepage() {
  return (
    <>
      <div className="app">
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

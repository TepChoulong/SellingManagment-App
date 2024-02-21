import History_Post from "./History_Post";

export default function History_Table() {
  return (
    <table className="mt-4 min-w-full divide-y divide-gray-600 dark:divide-gray-900">
      <thead>
        <tr className="table-header text-center text-ls">
          <th>Sold Items</th>
          <th>Date</th>
          <th>Profit</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <History_Post />
      </tbody>
    </table>
  );
}

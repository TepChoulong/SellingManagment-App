export default function History_Post() {
  const TestClicking = () => {
    alert("clicked");
  };
  return (
    <tr className="text-center bg-slate-200">
      <td className="p-2 00">5</td>
      <td>21/Feb/2024</td>
      <td>10000 Riel</td>
      <td>
        <button
          type="button"
          className="load-more-btn font-semibold text-blue-700"
          onClick={() => TestClicking()}
        >
          Load more
        </button>
      </td>
    </tr>
  );
}

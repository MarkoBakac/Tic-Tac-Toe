export default function Log({ turns }) {
  return (
    <ol id="log">
      {turns.map((turn, index) => (
        <li key={index}>
          Player {turn.player} selected {turn.square.row + 1},{" "}
          {turn.square.col + 1}
        </li>
      ))}
    </ol>
  );
}

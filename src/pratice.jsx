export const Counterbtn = ({ click, value }) => {
  return (
    <>
      <button onClick={click}>increment</button>
      <p>{value}</p>
    </>
  );
};

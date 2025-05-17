function Btn(count, setCount) {
  const handleCount = () => {
    setCount(count + 1);
  };

  return (
    <>
      <p>The no of time button clicked {count}</p>
      <button onClick={handleCount}>Click me!!</button>
    </>
  );
}

export default Btn;

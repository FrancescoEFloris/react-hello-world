
function App() {
  let helloContainer = [];
  for (let i = 0; i < 5; i++) {
    helloContainer.push( <>
      <h1>{1 + i} Hello World!</h1>
      <p>hello human</p>
    </>);
  }
  return helloContainer;
}

export default App

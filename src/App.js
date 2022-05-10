import "./App.css";

function App() {
  const title = "Velkommen til bloggen";
  const likes = "86";

  return (
    <div className="App">
      <div className="content">
        <h1>{title}</h1>
        <p>Vi har {likes} likes!</p>
      </div>
    </div>
  );
}

export default App;

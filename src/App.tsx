import React from "react";
import Container from "./components/Container";
import List from "./components/List";

function App() {
  return (
    <div className="App">
      <Container>
        <h1>TO-DO List</h1>

        <List />
      </Container>
    </div>
  );
}

export default App;

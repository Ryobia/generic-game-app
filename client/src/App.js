import "./App.css";
import Game from "./components/Game";
import Nav from "./components/Nav";

function App() {
  return (
    <div>
      <Nav />
      <section id="main">
        <Game />
      </section>
    </div>
  );
}

export default App;

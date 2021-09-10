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
      <div className="bot">Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
    </div>
  );
}

export default App;

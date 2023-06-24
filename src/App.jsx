import "./App.css";
import Header from "./components/header";
import Main from "./components/Main";
import data from "./assets/movies_rnexgr.json";
function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Main data={data} />
      </main>
      <footer></footer>
    </>
  );
}

export default App;

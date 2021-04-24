import logo from './logo.jpg';
import './App.css';
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
        <img src={logo} className="App-logo img-fluid" alt="logo" />
        <div className="App-header-title">
        What word do you want to look up? 🧐
        </div>
      </header>
      <main>
        <Dictionary />
      </main>
      <footer className="App-footer">
        <small>Coded by Ana Paula Zanibão</small></footer>
      </div>
    </div>
  );
}

export default App;

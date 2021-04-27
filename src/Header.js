import "./Header.css";
import logo from "./logo.jpg";

export default function Header() {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo img-fluid" alt="logo" />
      <div className="App-header-title">
        What word do you want to look up? 🧐
      </div>
    </header>
  );
}

import "./App.css";
import Dictionary from "./Dictionary";
import Footer from "./Footer";
import Header from "./Header";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <main>
          <Dictionary defaultKeyword="Sunset" />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;

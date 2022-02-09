import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import "./design/style.css";

function App() {
  return (
    <div className="App">
      <img src={require("./photos/lau.png")} width="310px" />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;

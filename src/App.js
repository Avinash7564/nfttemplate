import "./App.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import Routing from "./components/Routing/Routes";

function App() {
  return (
    <>
      <Header />
      <Routing />
      <Footer />
    </>
  );
}

export default App;

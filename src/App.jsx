import "./App.css";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";

const App = () => {
  return (
    <div>
      <Header title={"This is Header Area"} />
      <Content />
      <Footer />
    </div>
  );
};

export default App;

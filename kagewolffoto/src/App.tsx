import Banner from "./components/Banner";
import "./style.css";

function App() {
  return (
    <div>
      <Banner onAbout={() => console.log("About clicked")} />
    </div>
  );
}

export default App;

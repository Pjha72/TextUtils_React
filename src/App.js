import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
    <Navbar title="TextUtils" aboutText = "About Us"/>
    {/* <Navbar/> */}
    <div className="container my-5">
    <TextForm heading="Enter The Text To Analyze Below"/>
    </div>
    <div className="container">
      <About heading="About Us"/>
    </div>
    
    </>
  );
}

export default App;

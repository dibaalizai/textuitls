import './App.css';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';


function App() {
  return (
    <>
      {/* <NavBar title="TextUtils2" aboutText="About TextUtils"  /> */}
      {/* <NavBar  /> */}

      <NavBar title="TextUtils2"  />

      <div className="container my-3">

      <TextForm heading="Enter the text to analyze below"  />

      </div>

    </>

  
  );
}

export default App;


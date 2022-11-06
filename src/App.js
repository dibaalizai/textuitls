import logo from './logo.svg';
import './App.css';


let name = "Diba";
function App() {
  return (
    <>
    <nav>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
    </nav>
    <img src={logo} className="App-logo" alt="logo" />
    <div className="container">
      <h1>Hello {name}</h1>
      <p>Lorem <b>ipsum</b>ipsum dolor sit amet consectetur adipisicing elit. Voluptatem incidunt voluptate nostrum architecto hic id accusamus officiis deserunt eum adipisci, molestiae ab amet illo, cum accusantium labore ut quam aperiam!</p>
    </div>
    </>
  );
}

export default App;


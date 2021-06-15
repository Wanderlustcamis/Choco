import logo from './logo.svg';
import './App.css';

import './App.css';
import './index.js';
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
    </div>
  );
}


window.onscroll = function () { myFunction() };

let navbar = document.getElementById("root");
let sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    NavBar.classList.add("sticky")
  } else {
    NavBar.classList.remove("sticky");
  }
}

export default App;

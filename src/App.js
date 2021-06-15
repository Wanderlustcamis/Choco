import './App.css';
import NavBar from "./components/NavBar.js";

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

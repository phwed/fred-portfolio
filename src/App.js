import "./styles/tailwind-light/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css";
import './styles/globals.css'
import PrimeReact from "primereact/api"; //icons
// layout
import Main from "./layout/Main";

// sections
import Home from "./sections/Home";
import {Work} from './sections/Work';
import { Testimonials } from "./sections/Testimonials";
import {About} from './sections/About';

function App() {
  PrimeReact.ripple = true;
  PrimeReact.inputStyle = "filled";

  return (
    <Main>
      <Home id="home" />
      <Work id="work" />
      <Testimonials id="testimonials" />
      <About id="about" />
    </Main>
  );
}

export default App;

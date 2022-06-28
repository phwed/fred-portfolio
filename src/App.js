import "./styles/tailwind-light/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css";

import PrimeReact from "primereact/api";//icons

import {Button} from 'primereact/button'

function App() {

  PrimeReact.ripple = true;
  PrimeReact.inputStyle = "filled";

  return (
    <div className="flex flex-col  bg-slate-500 align-middle text-center justify-center h-screen">
      <h1 className="text-4xl font-bold underline ">Hello World a</h1>
      <div className="mt-3">
        <Button
          label="Click Me"
          className="p-button-raised p-button-danger"
        />
      </div>
    </div>
  );
}

export default App;

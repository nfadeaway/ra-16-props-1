import './App.css'
import { ReactElement } from "react";
import Stars from "./components/Stars.tsx";

function App():ReactElement {

  return (
    <>
      <Stars count={5}/>
    </>
  )
}

export default App

import Navbar from "./components/Navbar"
import Tutorial from "./components/Tutorial"
import Modal from "./components/Modal"
import "./App.css"

function App() {

  return (
    <div className="container">
      <Modal/>
      <Navbar/>
      <Tutorial/>
    </div>
  )
}

export default App

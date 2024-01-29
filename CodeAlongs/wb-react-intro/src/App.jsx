import Clicker from "./Clicker.jsx"
import RedButton from "./RedButton.jsx"

function App() {
  return (
    <>
      <h1>Hello World!</h1>
      <RedButton message="hello" />
      <RedButton message="button 2" />
      <RedButton message="button 3" />
      <RedButton message="this is a message" />
      <Clicker/>
      <Clicker initCount={5}/>
    </>
  )
}

export default App

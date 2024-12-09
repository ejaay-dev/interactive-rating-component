// import { useState } from "react"
import Rating from "./components/Rating"
import SuccessMessage from "./components/SuccessMessage"
function App() {
  // const [showConfirmation, setShowConfirmation] = useState(false)
  return (
    <>
      <section>
        <div className="flex flex-col items-center justify-center h-screen gap-3 bg-very-dark-blue">
          <Rating />
          <SuccessMessage />
        </div>
        <div></div>
      </section>
    </>
  )
}

export default App

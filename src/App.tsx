import { useState } from "react"
import Rating from "./components/Rating"
import SuccessMessage from "./components/SuccessMessage"

function App() {
  const ratings = [1, 2, 3, 4, 5]
  const [selectRating, setSelectedRating] = useState(0)
  const [showConfirmation, setShowConfirmation] = useState(false)

  const handleSelectRating = (rating: number) => {
    console.log("Selected rating is " + rating)
    setSelectedRating(rating)
  }

  const handleSubmitRating = () => {
    if (selectRating !== 0) {
      console.log("Submitted Rating is " + selectRating)
      setShowConfirmation(true)
    } else {
      console.log("Please select from the ratings above!")
    }
  }

  const handleBackBtn = () => {
    setShowConfirmation(false)
    setSelectedRating(0)
  }

  return (
    <>
      <section>
        <div className="flex flex-col items-center justify-center h-screen gap-3 bg-very-dark-blue">
          {showConfirmation ? (
            <SuccessMessage
              onClose={handleBackBtn}
              selectedRating={selectRating}
            />
          ) : (
            <Rating
              ratings={ratings}
              onSelectRating={handleSelectRating}
              onSubmitRating={handleSubmitRating}
            />
          )}
        </div>
        <div></div>
      </section>
    </>
  )
}

export default App

import { useState } from "react"
import Rating from "./components/Rating"
import SuccessMessage from "./components/SuccessMessage"

function App() {
  // Initialize an array for the value of ratings
  const ratings = [1, 2, 3, 4, 5]

  // Initialize the selectedRating as null to indicate that no rating selected initially
  const [selectedRating, setSelectedRating] = useState<number | null>(null)

  // Initialize the showConfirmation to false up until user select and submit a rating
  const [showConfirmation, setShowConfirmation] = useState(false)

  // Handle selecting of a rating
  const handleSelectRating = (rating: number | null) => {
    console.log(`Selected rating is ${rating ?? "none"}`)
    setSelectedRating(rating)
  }

  // Handle submitting of a rating
  const handleSubmitRating = () => {
    // If a rating is selected
    if (selectedRating !== null) {
      console.log(`Submitted Rating is ${selectedRating}`)
      setShowConfirmation(true) // Show the Success Message component
    } else {
      console.log("Please select from the ratings above!")
    }
  }

  // Handle closing of the success message component
  const handleBackBtn = () => {
    setShowConfirmation(false)
    setSelectedRating(null) // Resets the value of the selectedRating to null
  }

  return (
    <>
      <main className="flex items-center justify-center w-screen h-screen bg-very-dark-blue">
        <section className="flex items-center justify-center w-full h-full">
          {showConfirmation ? (
            <SuccessMessage
              onClose={handleBackBtn}
              selectedRating={selectedRating}
            />
          ) : (
            <Rating
              ratings={ratings}
              onSelectRating={handleSelectRating}
              onSubmitRating={handleSubmitRating}
            />
          )}
        </section>
      </main>
    </>
  )
}

export default App

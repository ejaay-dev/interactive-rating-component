import { useState } from "react"

interface RatingProps {
  ratings: number[]
  onSelectRating: (rating: number | null) => void
  onSubmitRating: () => void
}

const Rating = ({ ratings, onSelectRating, onSubmitRating }: RatingProps) => {
  // Array for the rating values

  // useState hook was used for the selected rating index
  const [selectedRatingIndex, setSelectedRatingIndex] = useState(-1)

  // Condition to check if there is a rating selected to enable the submit button
  const isClickable = selectedRatingIndex !== -1

  // Set the button background color and status based on selection
  const btnStatus = isClickable
    ? "bg-custom-orange hover:bg-custom-white text-black cursor-pointer"
    : "bg-gray-400 cursor-not-allowed text-gray-700"

  return (
    <div className="flex flex-col justify-center w-[325px] h-[330px] bg-gradient-to-b from-grayish-blue to-dark-blue px-6 pt-4 rounded-2xl">
      <div className="flex items-center mt-3 mb-5">
        <div className="flex items-center justify-center rounded-full w-9 h-9 bg-dark-gray">
          <img
            src="/public/icon-star.svg"
            alt="star-icon"
            className="w-[14px] h-[14px]"
          />
        </div>
      </div>
      <div className="flex items-center mb-2">
        <p className="text-xl font-normal text-custom-white font-overpass">
          How did we do?
        </p>
      </div>
      <div className="flex items-center mb-5">
        <p className="text-[13px] font-extralight text-light-gray font-overpass">
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
      </div>

      {/* Refactored code to eliminate the repetitive classes names and conditional logic. 
      Extracted the common classes and making conditional logic more readable */}
      <div className="flex items-center justify-between mb-5">
        {ratings.map((rating, index) => {
          // Check if this rating is selected
          const isSelected = selectedRatingIndex === index

          // Set the background color based on selection
          const bgColor = isSelected
            ? "bg-custom-orange cursor-"
            : "bg-dark-gray hover:bg-custom-white"

          // Set the text color based on selection
          const textColor = isSelected
            ? "text-black"
            : "text-light-gray group-hover:text-black"

          // This will output after conditional logic statement
          return (
            <div
              className={`flex justify-center items-center w-10 h-10 rounded-full group cursor-pointer ${bgColor}`}
              key={rating}
              onClick={() => {
                setSelectedRatingIndex(index)
                onSelectRating(rating)
              }}
            >
              <p className={`text-[13px] ${textColor}`}>{rating}</p>
            </div>
          )
        })}
      </div>
      <div className="flex items-center justify-center">
        <button
          className={`${btnStatus} shadow rounded-3xl w-full h-10 text-[14px] font-normal font-overpass tracking-wider uppercase`}
          onClick={onSubmitRating}
        >
          submit
        </button>
      </div>
    </div>
  )
}

export default Rating

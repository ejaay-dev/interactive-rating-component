import { useState } from "react"

const Rating = () => {
  // Array for the rating values
  const ratings = [1, 2, 3, 4, 5]

  // useState hook was used for the selected rating index
  const [selectedRatingIndex, setSelectedRatingIndex] = useState(-1)

  return (
    <div className="flex-col p-4 rounded-2xl bg-gradient-to-b from-grayish-blue to-dark-blue w-[325px] h-[350px px-6">
      <div className="flex items-center mt-3 mb-5">
        <div className="flex items-center justify-center rounded-full w-9 h-9 bg-dark-gray">
          <img
            src="/public/icon-star.svg"
            alt="star-icon"
            className="w-[14px] h-[14px]"
          />
        </div>
      </div>
      <p className="mb-2 text-xl font-normal text-custom-white font-overpass">
        How did we do?
      </p>
      <p className="text-[13px] font-extralight text-light-gray font-overpass mb-5">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      {/* Refactored code to eliminate the repetitive classes names and conditional logic. 
      Extracted the common classes and making conditional logic more readable */}
      <div className="flex items-center justify-between mb-6">
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
              onClick={() => setSelectedRatingIndex(index)}
            >
              <p className={`text-[13px] ${textColor}`}>{rating}</p>
            </div>
          )
        })}
      </div>
      <div className="flex items-center justify-center mb-3 cursor-pointer rounded-3xl bg-custom-orange hover:bg-custom-white">
        <button className="w-full h-10 text-[14px] text-black font-normal  font-overpass uppercase tracking-wider">
          submit
        </button>
      </div>
    </div>
  )
}

export default Rating

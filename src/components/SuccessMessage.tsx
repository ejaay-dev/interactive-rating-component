interface SuccessProps {
  onClose: () => void
  selectedRating: number | null
}

const SuccessMessage = ({ onClose, selectedRating }: SuccessProps) => {
  return (
    <div className="flex flex-col justify-center w-[325px] h-[330px] rounded-2xl bg-gradient-to-b from-grayish-blue to-dark-blue">
      <div className="flex justify-center w-full h-[100px]">
        <div className="flex items-center justify-center">
          <img
            src="/public/illustration-thank-you.svg"
            alt="thank-you-icon"
            className="h-20"
          />
        </div>
      </div>
      {selectedRating === null ? (
        <div className="flex justify-center mt-4 mb-[100px]">
          <div className="flex items-center justify-center px-4 rounded-full bg-dark-gray">
            <p className="text-[13px] font-light font-overpass text-custom-orange pt-1">
              No rating selected
            </p>
          </div>
        </div>
      ) : (
        <div>
          <div className="flex justify-center mt-4">
            <div className="flex items-center justify-center px-4 rounded-full bg-dark-gray">
              <p className="text-[13px] font-extralight font-overpass text-custom-orange pt-1">
                You selected{" "}
                <span className="font-medium">{selectedRating} </span>
                out of <span className="font-medium">5</span>
              </p>
            </div>
          </div>
          <div className="flex justify-center mt-4">
            <div className="flex items-center justify-center">
              <p className="text-xl font-normal text-custom-white font-overpass">
                Thank you!
              </p>
            </div>
          </div>
          <div className="flex justify-center mt-2">
            <div className="flex items-center justify-center px-5">
              <p className="text-center text-light-gray text-[13px] font-extralight font-overpass">
                We appreciate you taking the time to give a rating. If you ever
                need more support, don't hesitate to get in touch!
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="flex justify-center mt-6">
        <div className="flex items-center justify-center cursor-pointer rounded-3xl bg-custom-orange hover:bg-custom-white">
          <button
            className="h-6 px-6 py-2 font-normal text-[13px] text-black uppercase tracking-wider font-overpass leading-none"
            onClick={onClose}
          >
            back to main page
          </button>
        </div>
      </div>
    </div>
  )
}

export default SuccessMessage

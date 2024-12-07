const Rating = () => {
  return (
    <div className="flex-col p-4 rounded-2xl bg-gradient-to-b from-grayish-blue to-dark-blue w-[325px] h-[350px px-6">
      <div className="flex items-center mt-3 mb-5">
        <img
          src="/public/icon-star.svg"
          alt="star-icon"
          className="p-2 rounded-full bg-dark-gray"
        />
      </div>
      <p className="mb-2 text-xl font-normal text-custom-white font-overpass">
        How did we do?
      </p>
      <p className="text-[13px] font-extralight text-light-gray font-overpass mb-5">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className="flex items-center justify-between mb-6 ">
        <div className="flex justify-center items-center w-[40px] h-[40px] bg-dark-gray rounded-full">
          <p className="text-[13px] text-light-gray">1</p>
        </div>
        <div className="flex justify-center items-center w-[40px] h-[40px] bg-dark-gray rounded-full">
          <p className="text-[13px] text-light-gray">2</p>
        </div>
        <div className="flex justify-center items-center w-[40px] h-[40px] bg-dark-gray rounded-full">
          <p className="text-[13px] text-light-gray">3</p>
        </div>
        <div className="flex justify-center items-center w-[40px] h-[40px] bg-dark-gray rounded-full">
          <p className="text-[13px] text-light-gray">4</p>
        </div>
        <div className="flex justify-center items-center w-[40px] h-[40px] bg-dark-gray rounded-full">
          <p className="text-[13px] text-light-gray">5</p>
        </div>
      </div>
      <div className="flex items-center justify-center w-full h-10 mb-3 rounded-3xl bg-custom-orange">
        <button className="text-[14px] text-black font-normal  font-overpass uppercase tracking-wider">
          submit
        </button>
      </div>
    </div>
  )
}

export default Rating

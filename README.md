# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)

  - [Built with](#built-with)
  - [What I learned](#what-i-learned)

- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![Desktop](./design/desktop-design.jpg)
![Mobile](./design/mobile-design.jpg)

### Links

- Solution URL: [Github Repo](https://github.com/ejaay-dev/interactive-rating-component)
- Live Site URL: [Site Demo](https://interactive-rating-component-seven-sigma.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Tailwind](https://tailwindcss.com/) - For styles

### What I learned

- I learned how to switch React JS components

```js
<main className="flex items-center justify-center w-screen h-screen bg-very-dark-blue">
  <section className="flex items-center justify-center w-full h-full">
    {showConfirmation ? (
      <SuccessMessage onClose={handleBackBtn} selectedRating={selectedRating} />
    ) : (
      <Rating
        ratings={ratings}
        onSelectRating={handleSelectRating}
        onSubmitRating={handleSubmitRating}
      />
    )}
  </section>
</main>
```

- I learned how to use props with TypeScript

```ts
interface RatingProps {
  ratings: number[]
  onSelectRating: (rating: number | null) => void
  onSubmitRating: () => void
}
```

- I learned how to manipulate a rate element state using conditional statement/logic

```js
{
  ratings.map((rating, index) => {
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
  })
}
```

## Author

- Frontend Mentor - [@ejaay-dev](https://www.frontendmentor.io/profile/ejaay-dev)
- Github - [@ejaay-dev](https://github.com/ejaay-dev)
- LinkedIn - [@errolignacio](https://www.linkedin.com/in/errolignacio)

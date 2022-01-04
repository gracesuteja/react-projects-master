import React, { useState } from 'react'
import people from './data'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa'

const Review = () => {
  const [index, setIndex] = useState(0)
  const person = people[index]

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1 > 3 ? 0 : index + 1
      return newIndex
    })
  }

  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1 < 0 ? 3 : index - 1
      return newIndex
    })
  }

  const randomPerson = () => {
    setIndex((index) => {
      let randomNumber = getRandomNumber()
      if (randomNumber === index) {
        randomNumber = randomNumber + 1
        if (randomNumber > 3) {
          randomNumber = 0
        }
      }
      let newIndex = randomNumber
      return newIndex
    })
  }

  const getRandomNumber = () => {
    return Math.floor(Math.random() * people.length)
  }

  return (
    <article className='review'>
      <div className='img-container'>
        <img src={person.image} alt={person.name} className='person-img'></img>
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className='author'>{person.name}</h4>
      <p className='job'>{person.job}</p>
      <p className='info'>{person.text}</p>
      <div className='button-container'>
        <button className='prev-btn' onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className='next-btn' onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className='random-btn' onClick={randomPerson}>
        Suprise Me
      </button>
    </article>
  )
}

export default Review

import React, { useState } from 'react'
import data from './data'
function App() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    let amount = parseInt(count)
    if (amount > data.length) {
      let message =
        'Limit exceeded, your request is ' +
        amount +
        '. Maximum paragraph is ' +
        data.length
      alert(message)
      amount = data.length
    } else if (amount < 1) {
      let message =
        'No paragraph selected, your request is ' +
        amount +
        '. Minimum paragraph is 1'
      amount = 0
      alert(message)
    }
    setText(data.slice(0, amount))
  }

  return (
    <section className='section-center'>
      <h3>Tired of boring lorem ipsum?</h3>
      <form className='lorem-form' onSubmit={handleSubmit}>
        <label htmlFor='amount'> paragraphs: </label>
        <input
          type='number'
          name='amount'
          id='amount'
          value={count}
          onChange={(e) => setCount(e.target.value)}
        ></input>
        <button type='submit' className='btn'>
          generate
        </button>
      </form>

      <article className='loren-text'>
        {text.map((item, index) => {
          return <p key={index}>{item}</p>
        })}
      </article>
    </section>
  )
}

export default App

import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const [color, setColor] = useState('')
  const [isError, setIsError] = useState(false)
  const [list, setList] = useState(new Values('#f15025').all(10))

  const handleSubmit = (e) => {
    e.preventDefault()
    try {
      let colors = new Values(color).all(10)
      setList(colors)
      setIsError(false)
      alert('Hi, thanks for your submit, your colors is generating.')
    } catch (error) {
      setIsError(true)
      setList([])
      alert('Color is not exist, please input correct color format.')
    }
  }

  return (
    <>
      <section className='container'>
        <h3>Color Generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            name='color'
            id='color'
            value={color}
            onChange={(e) => {
              setColor(e.target.value)
              setIsError(false)
            }}
            placeholder='#f15025'
            className={`${isError ? 'error' : null}`}
          ></input>
          <button type='submit' className='btn'>
            Generate
          </button>
        </form>
      </section>
      <section className='colors'>
        {list.map((color, index) => {
          console.log(color)
          return (
            <SingleColor key={index} {...color} index={index} hex={color.hex} />
          )
        })}
      </section>
    </>
  )
}

export default App

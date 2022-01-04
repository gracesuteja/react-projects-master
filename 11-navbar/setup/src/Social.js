import React from 'react'
import { social } from './data'

const Social = () => {
  return (
    <>
      {social.map((item) => {
        const { id, url, icon } = item
        return (
          <li key={id}>
            <a href={url}>{icon}</a>
          </li>
        )
      })}
    </>
  )
}

export default Social

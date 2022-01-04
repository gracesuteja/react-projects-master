import React from 'react'
import { links } from './data'

const Sidebar = () => {
  return (
    <>
      {links.map((link) => {
        const { id, url, text } = link
        return (
          <li key={id}>
            <a href={url}>{text}</a>
          </li>
        )
      })}
    </>
  )
}

export default Sidebar

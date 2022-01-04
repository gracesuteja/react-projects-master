import React, { useState, useRef, useEffect } from 'react'
import { useGlobalContext } from './context'
const Submenu = () => {
  const { isSubMenuOpen, location, page } = useGlobalContext()
  const container = useRef(null)
  const [columns, setColumns] = useState('col-2')
  useEffect(() => {
    setColumns('col-2')
    const submenu = container.current
    const { center, bottom } = location
    submenu.style.left = `${center}px`
    submenu.style.top = `${bottom}px`
    if (page.links.length > 4 && page.links.length < 7) {
      setColumns('col-3')
    }
    if (page.links.length >= 6) {
      setColumns('col-4')
    }
    console.log(columns)
  }, [location, page.links])
  return (
    <aside
      className={`${isSubMenuOpen ? 'submenu show' : 'submenu'}`}
      ref={container}
    >
      <h4>{page.page}</h4>
      <div className={`submenu-center ${columns}`}>
        {page.links.map((item, index) => {
          const { label, icon, url } = item
          return (
            <a key={index} href={url}>
              {icon}
              {label}
            </a>
          )
        })}
      </div>
    </aside>
  )
}

export default Submenu
